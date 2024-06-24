import { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SigninPopup = ({ isOpen, onClose, handleSignupButton }) => {
  const [buttonStyle, setButtonStyle] = useState("SignUp__button-disabled");
  const [buttonText, setButtonText] = useState("Disabled");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signinButton = document.getElementById("signinButton");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (email.length && password.length > 0) {
      setButtonStyle("SignUp__button");
      setButtonText("Sign in");
      signinButton.disabled = false;
    } else {
      return;
    }
  }, [email, password]);

  return (
    <PopupWithForm titleText="Sign In" isOpen={isOpen} onClose={onClose}>
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
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          className="modal__input"
          id="password"
          name="Enter password"
          type="text"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
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
