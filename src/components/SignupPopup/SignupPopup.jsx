import { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SignupPopup = ({
  isOpen,
  onClose,
  handleSignInButton,
  handleRegistration,
  emailUsed,
}) => {
  const [buttonStyle, setButtonStyle] = useState("SignUp__button-disabled");
  const [buttonText, setButtonText] = useState("Disabled");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(""); // State for email error message
  const [passwordError, setPasswordError] = useState(""); // State for password error message
  const [usernameError, setUsernameError] = useState(""); // State for username error message

  const signupButton = document.getElementById("signupButton");

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
    const minPasswordLength = 8;
    if (value.length < minPasswordLength) {
      setPasswordError(
        `Password must be at least ${minPasswordLength} characters`
      );
    } else {
      setPasswordError("");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setName(value);

    // Username validation logic
    const minUsernameLength = 2;
    if (value.length < minUsernameLength) {
      setUsernameError(
        `Username must be at least ${minUsernameLength} characters`
      );
    } else {
      setUsernameError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError || usernameError) return; // Prevent submission if there are errors
    handleRegistration({ email, password, name });
  };

  useEffect(() => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      name.length > 0 &&
      !emailError &&
      !passwordError &&
      !usernameError
    ) {
      setButtonStyle("SignUp__button");
      setButtonText("Sign up");
      signupButton.disabled = false;
    } else {
      setButtonStyle("SignUp__button-disabled");
      setButtonText("Disabled");
    }
  }, [email, password, name, emailError, passwordError, usernameError]);

  return (
    <PopupWithForm
      titleText="Sign Up"
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
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="modal__error">{passwordError}</p>}
      </label>
      <label htmlFor="Username" className="modal__label">
        Username
        <input
          id="name"
          name="name"
          className="modal__input"
          type="text"
          placeholder="Enter your username"
          minLength="2"
          maxLength="30"
          onChange={handleUsernameChange}
          required
        />
        {usernameError && <p className="modal__error">{usernameError}</p>}
      </label>
      {emailUsed ? (
        <p className="modal__error">This email is not available</p>
      ) : (
        ""
      )}
      <button type="submit" disabled className={buttonStyle} id="signupButton">
        {buttonText}
      </button>
      <button
        type="button"
        className="Or-Login__button"
        onClick={handleSignInButton}
      >
        or Sign in
      </button>
    </PopupWithForm>
  );
};
export default SignupPopup;
