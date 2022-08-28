import styled from "styled-components";
import { fadeIn } from "../../styles/Global";

export const Search = styled.div`
  max-width: 864px;
  margin-inline: auto;
  animation: ${fadeIn} 0.2s forwards ease-in;

  @media (max-width: 900px) {
    margin-inline: 1rem;
  }

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      color: var(--title);
      font-size: var(--size-18);
    }

    span {
      color: var(--span);
      font-size: var(--size-14);
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    border: 1px solid var(--border);
    background-color: var(--background);
    height: 50px;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: var(--text);

    &::placeholder {
      color: var(--label);
    }

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid var(--brand);
    }
  }
`;
