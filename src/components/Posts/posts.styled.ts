import styled from "styled-components";
export const Posts = styled.div`
  margin-top: 3rem;
  max-width: 864px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 900px) {
    margin-inline: 1rem;
  }

  .no_content {
    color: var(--title);
    text-align: center;
    font-weight: bold;
    font-size: var(--size-14);
  }
`;
