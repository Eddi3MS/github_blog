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
  reactions: {
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
}

export interface IIssuesListDTO {
  total_count: number;
  items: IIssue[];
}
