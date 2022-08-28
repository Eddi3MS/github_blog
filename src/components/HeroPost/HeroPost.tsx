import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { getPostTime } from "../../utils/getPostTime";
import * as S from "./heroPost.styled";

interface IHeroPost {
  data: {
    issueURL: string;
    username: string;
    userURL: string;
    issueTitle: string;
    createdAt: string;
    commentsNumber: number;
  };
}

const HeroPost = ({ data }: IHeroPost) => {
  return (
    <S.HeroPost>
      <header>
        <Link to="/" className="go_back">
          <FontAwesomeIcon icon={faChevronLeft as IconProp} /> Voltar
        </Link>
        <a
          href={data.issueURL}
          target="_blank"
          rel="noopener"
          className="go_to_issue"
        >
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare as IconProp} />
        </a>
      </header>

      <h1>{data.issueTitle}</h1>

      <div className="stats_wrapper">
        <a href={data.userURL} target="_blank" rel="noopener">
          <span>
            <FontAwesomeIcon icon={faGithub as IconProp} /> {data.username}
          </span>
        </a>
        <span>
          <FontAwesomeIcon icon={faCalendarDay as IconProp} />
          {getPostTime(data.createdAt)}
        </span>

        <span>
          <FontAwesomeIcon icon={faComment as IconProp} /> {data.commentsNumber}{" "}
          comentários
        </span>
      </div>
    </S.HeroPost>
  );
};

export default HeroPost;
