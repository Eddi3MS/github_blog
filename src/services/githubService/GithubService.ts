import { AxiosResponse } from "axios";
import { api } from "../api";
import {
  IIssuesListDTO,
  ISingleIssueDTO,
  IUserDTO,
} from "./dtos/GithubServiceDTOs";

interface IRepoParams {
  query?: string;
  user: string;
  repo: string;
}

interface ISingleIssue {
  user: string;
  repo: string;
  id: number;
}

class GithubService {
  public static async getUserData(): Promise<AxiosResponse<IUserDTO>> {
    return await api.get<IUserDTO>(`/users/Eddi3MS`);
  }

  public static async getRepoIssues({
    query,
    user,
    repo,
  }: IRepoParams): Promise<AxiosResponse<IIssuesListDTO>> {
    return await api.get<IIssuesListDTO>(
      `/search/issues?q=${query}%20label:published%20repo:${user}/${repo}`
    );
  }

  public static async getSingleIssue({
    user,
    id,
    repo,
  }: ISingleIssue): Promise<AxiosResponse<ISingleIssueDTO>> {
    return await api.get<ISingleIssueDTO>(
      `/repos/${user}/${repo}/issues/${id}`
    );
  }
}

export { GithubService };
