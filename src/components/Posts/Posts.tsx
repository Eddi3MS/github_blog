import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { GithubService } from "../../services/githubService";
import Card from "../Card";
import Search from "../Search";
import * as S from "./posts.styled";

const Posts = () => {
  const [query, setQuery] = useState("");

  const { data, refetch } = useQuery(["issues"], async () => {
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
