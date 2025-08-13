import s from "./Modal.module.scss";

type TModalProps = {
  closeSuccessModal: () => void;
};

export const Modal = ({ closeSuccessModal }: TModalProps) => {
  return (
    <div className={s.modal} onClick={closeSuccessModal}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={s.modal__header}>
          <h3>Спасибо!</h3>
          <button className={s.modal__close} onClick={closeSuccessModal}>
            ×
          </button>
        </div>
        <div className={s.modal__body}>
          <p>Ваша анкета успешно отправлена!</p>
          <p>Мы очень ждем встречи с вами ❤️</p>
        </div>
      </div>
    </div>
  );
};
