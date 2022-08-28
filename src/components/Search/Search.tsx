import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import * as S from "./search.styled";

interface ISearch {
  handleSearch: React.Dispatch<React.SetStateAction<string>>;
  pub?: number;
}

const Search = ({ pub, handleSearch }: ISearch) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };
  return (
    <S.Search>
      <header>
        <h2>Publicações</h2>
        <span>
          {pub} {pub === 1 ? "publicação" : "publicações"}
        </span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        onKeyPress={handleKeyDown}
      />
    </S.Search>
  );
};

export default Search;
