import PopupWithForm from "../PopupWithForm/PopupWithForm";

const ConfirmationPopup = (isOpen, onClose, handleSignInButton) => {
  return (
    <PopupWithForm
      titleText="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSignInButton}
    >
      <div>
        <button className="Or-Login__button" type="submit">
          Sign in
        </button>
      </div>
    </PopupWithForm>
  );
};

export default ConfirmationPopup;
