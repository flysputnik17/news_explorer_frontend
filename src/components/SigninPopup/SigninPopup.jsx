import { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SigninPopup = ({ isOpen, onClose, handleSignupButton, handleLogin }) => {
  const [buttonStyle, setButtonStyle] = useState("SignUp__button-disabled");
  const [buttonText, setButtonText] = useState("Disabled");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // State for email error message
  const [passwordError, setPasswordError] = useState(""); // State for password error message
  const signinButton = document.getElementById("signinButton");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Password validation logic
    const minPasswordLength = 8; // Example: Minimum length of 6 characters
    if (value.length < minPasswordLength) {
      setPasswordError(
        `Password must be at least ${minPasswordLength} characters`
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError) return; // Prevent submission if there are errors
    handleLogin({ email, password });
  };

  useEffect(() => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      !emailError &&
      !passwordError
    ) {
      setButtonStyle("SignUp__button");
      setButtonText("Sign in");
      signinButton.disabled = false;
    } else {
      setButtonStyle("SignUp__button-disabled");
      setButtonText("Disabled");
    }
  }, [email, password, emailError, passwordError]);

  return (
    <PopupWithForm
      titleText="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="email"
          value={email}
          placeholder="Enter email"
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="modal__error">{emailError}</p>}
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          className="modal__input"
          id="password"
          name="password"
          type="password" // Changed to password type
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="modal__error">{passwordError}</p>}
      </label>

      <button id="signinButton" disabled type="submit" className={buttonStyle}>
        {buttonText}
      </button>
      <button
        type="button"
        className="Or-Sign-Up__button"
        onClick={handleSignupButton}
      >
        or Sign up
      </button>
    </PopupWithForm>
  );
};

export default SigninPopup;
