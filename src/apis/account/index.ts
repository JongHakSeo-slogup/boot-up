import { Method, request } from "../../network/Request";

const url = "https://jsonplaceholder.typicode.com/posts";

export function Login() {}

export function getSession() {
  return request({
    method: Method.GET,
    baseUrl: url,
  });
}
