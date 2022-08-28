import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Header, HeroPost } from "../../components";
import { GithubService } from "../../services/githubService";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as S from "./post.styled";
import { useCallback, useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { ErrorModalContext } from "../../context/ErrorFeedbackContext";
import { ErrorHandling } from "../../errors/errorHandling/ErrorHandling";
import { ISingleIssueDTO } from "../../services/githubService/dtos/GithubServiceDTOs";
import { LoadingContext } from "../../context/LoadingContext";

const Post = () => {
  const [data, setData] = useState<ISingleIssueDTO>();
  const { id } = useParams<{ id: string }>();

  const setErrorModal = useContextSelector(
    ErrorModalContext,
    (state) => state.setErrorModal
  );
  const setLoading = useContextSelector(
    LoadingContext,
    (state) => state.setLoading
  );

  const getIssueData = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const { data } = await GithubService.getSingleIssue({
        id: id,
        user: "eddi3ms",
        repo: "github_blog",
      });

      setData(data);
    } catch (error) {
      const errorHandling = new ErrorHandling(error, "Algo deu errado .");
      setErrorModal(errorHandling.error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getIssueData(+id);
    }
  }, [getIssueData]);

  const customRenderers = {
    code(code: any) {
      const { className, children } = code;
      const language = className?.split("-")[1];
      return (
        <SyntaxHighlighter
          style={coldarkDark}
          language={language}
          children={children}
        />
      );
    },
  };

  if (!data) {
    return <p>Erro ao buscar post.</p>;
  }

  return (
    <>
      <Header />
      <HeroPost
        data={{
          issueURL: data.html_url,
          username: data.user.login,
          userURL: data.user.html_url,
          issueTitle: data.title,
          createdAt: data.created_at,
          commentsNumber: data.comments,
        }}
      />
      <S.Post className="post__wrapper">
        <ReactMarkdown components={customRenderers}>{data.body}</ReactMarkdown>
      </S.Post>
    </>
  );
};

export default Post;
