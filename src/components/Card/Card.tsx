import React from "react";
import ReactMarkdown from "react-markdown";
import * as S from "./card.styled";

const Card = ({ post }: any) => {
  return (
    <S.Card>
      <header>
        <h3>{post.title}</h3> <span>há 1 dia</span>
      </header>
      <div className="body__wrapper">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </S.Card>
  );
};

export default Card;
