import styled from "styled-components";
import { fadeIn } from "../../styles/Global";
export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(7, 20, 34, 0.6);

  .error__modal {
    background-color: var(--border);
    max-width: 350px;
    min-width: 300px;
    min-height: 280px;
    border-radius: 10px;
    padding: 1.5rem;
    animation: ${fadeIn} 0.2s forwards ease-in;

    display: flex;
    flex-direction: column;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: var(--size-20);
        color: var(--title);
      }

      svg {
        color: var(--title);
        cursor: pointer;
      }
    }

    .error_modal__body {
      flex: 2;
      padding-top: 1.5rem;
      font-size: var(--size-18);
      color: var(--text);
      text-align: left;
      word-wrap: break-word;
    }

    footer button {
      width: 100%;
      border: 0;
      padding: 0.5rem 1rem;
      background-color: var(--subtitle);
      cursor: pointer;
      border-radius: 6px;
      color: var(--border);
      font-weight: bold;
      font-size: var(--size-16);

      &:hover {
        background-color: var(--text);
      }
    }
  }
`;
