import styled from "styled-components";
import { fadeIn } from "../../styles/Global";
export const Post = styled.div`
  max-width: 864px;
  margin-inline: auto;
  border-radius: 10px;
  padding-block: 2rem;
  animation: ${fadeIn} 0.2s forwards ease-in;

  @media (max-width: 900px) {
    margin-inline: 1rem;
  }

  pre {
    border-radius: 10px;
    margin-block: 2.5rem;
  }

  h3,
  h2,
  h1,
  p,
  li {
    color: var(--text);
    line-height: 160%;
    letter-spacing: 0.1px;
    font-size: var(--size-20);
  }

  img {
    display: block;
    max-width: 100%;
    margin-block: 2.5rem;
    border-radius: 10px;
  }
`;
