import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ErrorHandling } from "../../errors/errorHandling/ErrorHandling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as S from "./hero.styled";
import { GithubService } from "../../services/githubService";
import { ErrorModalContext } from "../../context/ErrorFeedbackContext";
import { useContextSelector } from "use-context-selector";
import Portal from "../Portal";
import Loading from "../Loading";

const Hero = () => {
  const setErrorModal = useContextSelector(
    ErrorModalContext,
    (state) => state.setErrorModal
  );

  const { data, isLoading, error } = useQuery(["getStats"], async () => {
    const { data } = await GithubService.getUserData();
    return data;
  });

  useEffect(() => {
    if (error) {
      const errorHandling = new ErrorHandling(error, "Algo deu errado .");
      setErrorModal(errorHandling.error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <Portal show={!!isLoading}>
        <Loading />
      </Portal>
    );
  }

  return (
    <S.Hero>
      <div className="image__wrapper">
        <img src={data?.avatar_url} alt={`foto de perfil de ${data?.name}`} />
      </div>
      <div className="info__wrapper">
        <header>
          <h1>{data?.name}</h1>
          <a href={data?.html_url} target="_blank" rel="noopener">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare as IconProp} />
          </a>
        </header>

        <p>{data?.bio}</p>

        <div className="stats__wrapper">
          <span>
            <FontAwesomeIcon icon={faGithub as IconProp} /> {data?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding as IconProp} /> {data?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup as IconProp} /> {data?.followers}{" "}
            seguidores
          </span>
        </div>
      </div>
    </S.Hero>
  );
};

export default Hero;
