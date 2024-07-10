import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { removeUserFromStore } from "../store/userSlice";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return isAuth ? (
    <div>
      <h1>Welcome, {email}</h1>

      <button onClick={() => dispatch(removeUserFromStore())}>
        Log out from {email}
      </button>
    </div>
  ) : null;
}
