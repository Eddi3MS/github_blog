import styled from "styled-components";
import { fadeIn } from "../../styles/Global";
export const Card = styled.div`
  background-color: var(--post);
  padding: 2rem;
  border-radius: 10px;

  animation: ${fadeIn} 0.2s forwards ease-in;

  &:hover {
    box-shadow: 0 0 0 2px var(--border);
    cursor: pointer;
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    span {
      min-width: 90px;
      text-align: right;
      color: var(--span);
      font-size: var(--size-14);
    }

    h3 {
      color: var(--title);
      font-size: var(--size-20);
      min-height: 52px;
    }
  }
  .body__wrapper {
    margin-top: 1.125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    & > * {
      font-size: var(--size-16);
      font-weight: normal;
      color: var(--text);
    }
  }
`;
