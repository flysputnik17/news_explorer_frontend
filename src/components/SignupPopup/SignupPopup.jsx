import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SignupPopup = ({ isOpen, onClose, handleSignInButton }) => {
  return (
    <PopupWithForm titleText="Sign Up" isOpen={isOpen} onClose={onClose}>
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
          required
        />
      </label>
      <button type="submit" className="SignUp__button">
        Sign up
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
