import PopupWithForm from "../PopupWithForm/PopupWithForm";

const ConfirmationPopup = ({ isOpen, onClose, handleSignInButton }) => {
  return (
    <PopupWithForm
      titleText="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <button
        className="Or-Login__button"
        type="button"
        onClick={handleSignInButton}
      >
        Sign in
      </button>
    </PopupWithForm>
  );
};

export default ConfirmationPopup;
