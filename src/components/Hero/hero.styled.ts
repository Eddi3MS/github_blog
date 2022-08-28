import styled from "styled-components";
import { fadeIn } from "../../styles/Global";
export const Hero = styled.div`
  min-height: 212px;
  display: flex;
  background-color: var(--profile);
  padding: 2rem 2.5rem;
  max-width: 864px;
  margin-inline: auto;
  border-radius: 10px;
  position: relative;
  top: -80px;
  gap: 2rem;

  animation: ${fadeIn} 0.2s forwards ease-in;

  @media (max-width: 900px) {
    top: -40px;
    margin-inline: 1rem;
  }

  .image__wrapper {
    max-height: 148px;
    max-width: 148px;
    aspect-ratio: 1/1;

    border-radius: 8px;
    overflow: hidden;

    img {
      display: block;
      max-width: 100%;
    }
  }

  .info__wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;

    header {
      display: flex;
      justify-content: space-between;

      h1 {
        color: var(--title);
        font-size: var(--size-24);
      }

      a {
        color: var(--brand);
        font-size: var(--size-12);
        text-decoration: none;

        svg {
          margin-left: 0.5rem;
        }
      }
    }

    p {
      color: var(--text);
      font-size: var(--size-16);
      margin-top: 0.5rem;
      flex: 1;
    }

    .stats__wrapper {
      span {
        margin-right: 1.5rem;
        color: var(--subtitle);
        font-size: var(--size-16);
      }
      svg {
        color: var(--label);
        margin-right: 0.5rem;
      }
    }
  }
`;
