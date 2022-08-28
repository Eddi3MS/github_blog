import * as S from "./header.styled";

const Header = () => {
  return (
    <S.Header>
      <div className="image__wrapper">
        <img src="/cover.svg" alt="cover bg" />
      </div>
    </S.Header>
  );
};

export default Header;
