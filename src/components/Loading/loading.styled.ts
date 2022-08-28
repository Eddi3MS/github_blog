import styled from "styled-components";
export const Loading = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(7, 20, 34, 0.6);

  span {
    margin-block: auto;
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 5px solid var(--label);
    border-top-color: var(--text);
    animation: rotate 1.4s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
