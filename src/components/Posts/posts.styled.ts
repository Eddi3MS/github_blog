import styled from "styled-components";
export const Posts = styled.div`
  margin-top: 3rem;
  max-width: 864px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 260px;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 900px) {
    margin-inline: 1rem;
  }
`;
