import moment from "moment";

export function getPostTime(date: string) {
  return moment(date).fromNow();
}
