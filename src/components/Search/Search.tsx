import React from "react";
import * as S from "./search.styled";

const Search = ({ pub }: any) => {
  return (
    <S.Search>
      <header>
        <h2>Publicações</h2> <span>{pub} publicações</span>
      </header>

      <input type="search" placeholder="Buscar conteúdo" />
    </S.Search>
  );
};

export default Search;
