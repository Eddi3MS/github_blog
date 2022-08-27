import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  //justify-content: center;
  .image__wrapper {
    min-height: 150px;
    max-height: 300px;
    width: 100%;
    overflow-x: hidden;

    img {
      max-height: 300px;
      min-height: 150px;
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
`;
