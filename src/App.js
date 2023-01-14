import React, { useEffect } from "react";
import { useAuth } from "./context/Authcontext";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
      return;
    }
  });

  return <Outlet />;
}
