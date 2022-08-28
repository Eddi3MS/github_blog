import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { ErrorModalContext } from "../../context/ErrorFeedbackContext";
import { ErrorHandling } from "../../errors/errorHandling/ErrorHandling";
import { GithubService } from "../../services/githubService";
import Card from "../Card";
import Loading from "../Loading";
import Portal from "../Portal";
import Search from "../Search";
import * as S from "./posts.styled";

const Posts = () => {
  const [query, setQuery] = useState("");

  const setErrorModal = useContextSelector(
    ErrorModalContext,
    (state) => state.setErrorModal
  );

  const { data, refetch, error, isLoading } = useQuery(["issues"], async () => {
    const response = await GithubService.getRepoIssues({
      query,
      user: "eddi3ms",
      repo: "github_blog",
    });

    return response.data;
  });

  useEffect(() => {
    refetch();
  }, [query]);

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
    <>
      <Search pub={data?.total_count} handleSearch={setQuery} />

      <S.Posts>
        {data && data.items.length === 0 ? (
          <p className="no_content">Nenhum Post encontrado.</p>
        ) : (
          data?.items.map((item: any) => <Card post={item} key={item.id} />)
        )}
      </S.Posts>
    </>
  );
};

export default Posts;
