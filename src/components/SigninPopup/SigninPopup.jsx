import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SigninPopup = ({ isOpen, onClose, handleSignupButton }) => {
  return (
    <PopupWithForm titleText="Sign In" isOpen={isOpen} onClose={onClose}>
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="email"
          placeholder="Enter email"
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
          required
        />
      </label>

      <button type="submit" className="SignUp__button">
        Sign in
      </button>
      <button
        type="button"
        className="Or-Login__button"
        onClick={handleSignupButton}
      >
        or Sign up
      </button>
    </PopupWithForm>
  );
};

export default SigninPopup;
