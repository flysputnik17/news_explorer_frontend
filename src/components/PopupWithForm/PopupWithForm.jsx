import "./PopupWithForm.css";

const PopupWithForm = ({ children, titleText, onClose, isOpen, onSubmit }) => {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
