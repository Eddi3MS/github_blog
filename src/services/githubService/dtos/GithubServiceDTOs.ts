export interface IUserDTO {
  login: string;
  id: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

type IReactions = {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
};

export interface IIssue {
  id: number;
  number: number;
  title: string;
  html_url: string;
  user: IUserDTO;
  labels: {
    id: number;
    name: string;
  }[];
  comments: 0;
  created_at: string;
  body: string;
  reactions: IReactions;
}

export interface IIssuesListDTO {
  total_count: number;
  items: IIssue[];
}

export interface ISingleIssueDTO {
  url: string;
  repository_url: string;
  html_url: string;
  id: number;
  number: number;
  title: string;
  comments: number;
  user: {
    login: string;
    id: number;
    avatar_url: string;

    html_url: string;
  };
  labels: {
    id: number;
    name: string;
  }[];
  created_at: string;
  body: string;
  reactions: IReactions;
}
