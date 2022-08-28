import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as S from "./errorFeedbackModal.styled";

interface IFeedbackErrorModal {
  onHide: () => void;
  message: string;
}

const ErrorFeedbackModal = ({ onHide, message }: IFeedbackErrorModal) => {
  return (
    <S.ModalWrapper>
      <div className="error__modal">
        <header>
          <h1>Algo deu Errado!!</h1>
          <FontAwesomeIcon icon={faTimes as IconProp} onClick={onHide} />
        </header>
        <div className="error_modal__body">{message}</div>
        <footer>
          <button onClick={onHide}>OK</button>
        </footer>
      </div>
    </S.ModalWrapper>
  );
};

export default ErrorFeedbackModal;
