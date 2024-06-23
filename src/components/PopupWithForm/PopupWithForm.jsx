import "./PopupWithForm.css";
import closeButton from "../../images/closeButton.svg";

const PopupWithForm = ({ children, titleText, onClose, isOpen, onSubmit }) => {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h1 className="modal__title">{titleText}</h1>
        <button type="button" className="modal__close-button" onClick={onClose}>
          <img src={closeButton} alt="close button"></img>
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
