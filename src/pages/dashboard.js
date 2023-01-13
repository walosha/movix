import React from "react";
// import { useAuth } from "../context/Authcontext";
// import { useNavigate } from "react-router-dom";
import Hero from "../components/hero";
import MovieSection from "../components/movieSection";

export default function Dashboard() {
  // const { logout } = useAuth();
  // const navigate = useNavigate();
  return (
    <div>
      {/* <h1
        className="bg-black cursor-pointer"
        onClick={async () => {
          await logout();
          navigate("/");
        }}
      >
        dashboard dashboard
      </h1> */}
      <Hero />
      <MovieSection />
    </div>
  );
}
