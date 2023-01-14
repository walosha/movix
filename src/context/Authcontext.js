import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import auth, { db } from "../config/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function register({ email, password, fullname }, reset, navigate) {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = doc(db, "users", user?.user?.uid);
      await setDoc(
        docRef,
        {
          id: user?.user?.uid,
          fullname,
          email,
          password,
        },
        { merge: true }
      );
      navigate("/dashboard");
    } catch (error) {
      navigate("/");
      if (error.code === "auth/email-already-in-use") {
        reset("email", { message: "That email address is already in use!" });
      } else if (error.code === "auth/invalid-email") {
        reset("email", { message: "That email address is invalid!" });
      } else {
        reset("email", { message: error });
      }
    }
  }

  async function login({ email, password }, reset, navigate) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        reset("email", {
          message: "The email or password incorrect",
        });
      } else if (error.code === "auth/wrong-password") {
        reset("password", { message: "That password is incorrect!" });
      } else if (error.code === "auth/network-request-failed") {
        reset("email", { message: "No network connection" });
      } else {
        console.log({ message: error });
      }
    }
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
