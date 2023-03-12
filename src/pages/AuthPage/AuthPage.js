import { useState} from "react";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage(props) {
  const [status, setStatus] = useState("login");

  function handleClick(event) {
    if (event.target.name === "login") {
      setStatus("login");
    } else if (event.target.name === "register") {
      setStatus("register");
    }
  }

  return (
    <div className="AuthPage">
      <div className="auth-form">
        {/* form side */}
        {status === "login" ? (
          <>
            <LoginForm setUser={props.setUser} />
            <button className="btn long-btn" name="register" onClick={handleClick}>
              REGISTER
            </button>
          </>
        ) : (
          <>
            <SignUpForm setUser={props.setUser} />
            <button className="btn long-btn" name="login" onClick={handleClick}>
              LOGIN
            </button>
          </>
        )}
      </div>
      <div className="app-logo">
        {/* logo side */}
        <h1>Δ</h1>
        <h2>DELTA</h2>
      </div>
    </div>
  );
}
