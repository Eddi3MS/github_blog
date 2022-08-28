import styled from "styled-components";
import { fadeIn } from "../../styles/Global";
export const HeroPost = styled.div`
  min-height: 212px;
  display: flex;
  flex-direction: column;
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

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    justify-content: space-between;

    a {
      color: var(--brand);
      font-size: var(--size-12);
      text-transform: uppercase;

      &.go_back {
        svg {
          margin-right: 0.5rem;
        }
      }
      &.go_to_issue {
        svg {
          margin-left: 0.5rem;
        }
      }
    }
  }

  h1 {
    color: var(--title);
    font-size: var(--size-24);
  }

  .stats_wrapper {
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
`;
