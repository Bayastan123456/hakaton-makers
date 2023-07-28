import React, { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { register } from "../../store/auth/authAction";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState();
  const [suname, setSuname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit() {
    if (password.trim() === !password2.trim()) {
      setShowError(true);
      return;
    }
    if (!name || !email || !password) {
      setShowError(true);
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", name);
    formData.append("password", password);
    dispatch(register({ formData, navigate }));
  }
  return (
    <div>
      <div className="register__block">
        <h3>Sign In</h3>
        <p>Please enter your contact details to connect.</p>
        <span>Name</span>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <span>Suname</span>
        <input
          type="text"
          placeholder="suname"
          onChange={(e) => setSuname(e.target.value)}
          value={suname}
        />
        <span>Email adress</span>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <span>Password</span>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span>Password confirmation</span>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
        {showError ? <p style={{ color: "red" }}>password mismatch</p> : <></>}
        {showError ? <p style={{ color: "red" }}>fill in the field </p> : <></>}
        <div className="checkbox__register">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <button className="login__btn-register" onClick={handleSubmit}>
          Log in
        </button>
        <button className="google__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
              fill="#FFC107"
            />
            <path
              d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
              fill="#FF3D00"
            />
            <path
              d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
              fill="#4CAF50"
            />
            <path
              d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
              fill="#1976D2"
            />
          </svg>
          Continue with Google
        </button>
        <span className="register__span">
          Already on Coursera?{" "}
          <span onClick={() => navigate("/login")}> Log in</span>
        </span>
      </div>
    </div>
  );
};

export default Register;
