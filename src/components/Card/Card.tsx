import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { IIssue } from "../../services/githubService/dtos/GithubServiceDTOs";
import { getPostTime } from "../../utils/getPostTime";
import * as S from "./card.styled";

interface ICard {
  post: IIssue;
}

const Card = ({ post }: ICard) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/post/${post.number}`);
  };

  return (
    <S.Card onClick={handleNavigate}>
      <header>
        <h3>{post.title}</h3> <span>{getPostTime(post.created_at)}</span>
      </header>
      <div className="body__wrapper">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </S.Card>
  );
};

export default Card;
