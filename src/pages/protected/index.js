import React, { useEffect } from "react";
import { useAuth } from "../../context/Authcontext";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
      return;
    }
  });

  return <Outlet />;
}
