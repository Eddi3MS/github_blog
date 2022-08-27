import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Card from "../Card";
import Search from "../Search";
import * as S from "./posts.styled";

const Posts = () => {
  const { data } = useQuery(["issues"], async () => {
    const response = await axios.get(`https://api.github.com/search/issues`, {
      params: {
        q: "repo:eddi3ms/github_blog",
      },
    });

    return response.data;
  });
  console.log(
    "🚀 ~ file: App.tsx ~ line 37 ~ const{data}=useQuery ~ data",
    data
  );

  return (
    <>
      <Search pub={data?.total_count} />
      <S.Posts>
        {data?.items.map((item: any) => (
          <Card post={item} key={item.id} />
        ))}
      </S.Posts>
    </>
  );
};

export default Posts;
