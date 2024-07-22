import { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SignupPopup = ({
  isOpen,
  onClose,
  handleSignInButton,
  handleRegistration,
}) => {
  const [buttonStyle, setButtonStyle] = useState("SignUp__button-disabled");
  const [buttonText, setButtonText] = useState("Disabled");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signupButton = document.getElementById("signupButton");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ email, password, username });
  };
  useEffect(() => {
    if (email.length && password.length && username.length > 0) {
      setButtonStyle("SignUp__button");
      setButtonText("Sign up");
      signupButton.disabled = false;
    } else {
      return;
    }
  }, [email, password, username]);
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
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          className="modal__input"
          id="password"
          name="Enter password"
          type="text"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />
      </label>
      <label htmlFor="Username" className="modal__label">
        Username
        <input
          id="name"
          name="name"
          className="modal__input"
          type="text"
          placeholder="Enter your username"
          minLength="1"
          maxLength="30"
          onChange={handleUsernameChange}
          required
        />
      </label>
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
