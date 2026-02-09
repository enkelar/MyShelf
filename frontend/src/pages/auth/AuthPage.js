import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      setIsLogin(window.location.hash !== "#signup");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="auth_container">
      <div className={`auth_box ${isLogin ? "" : "right-panel-active"}`}>
        <div className="sliding_animation">
          <div className="sliding_overlay">
            <div className="overlay_panel overlay_left">
              <h1>Already have an account?</h1>
              <p>Please sign in with your personal info</p>
              <button
                className="ghost"
                onClick={() => (window.location.hash = "#login")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay_panel overlay_right">
              <h1>New Here?</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                onClick={() => (window.location.hash = "#signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="form_panel signup_panel">
          <Signup />
        </div>

        <div className="form_panel login_panel">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;