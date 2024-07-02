import PopupWithForm from "../PopupWithForm/PopupWithForm";

const ConfirmationPopup = ({ isOpen, onClose, handleSuccessRegistration }) => {
  return (
    <PopupWithForm
      titleText="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <button
        className="Or-Login__button"
        type="button"
        onClick={handleSuccessRegistration}
      >
        Sign in
      </button>
    </PopupWithForm>
  );
};

export default ConfirmationPopup;
