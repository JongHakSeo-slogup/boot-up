import { Method, request } from "../../network/Request";

const url = "https://jsonplaceholder.typicode.com/posts";

export function login() {
  return request({
    method: Method.POST,
    baseUrl: url,
  })
}

export function getSession() {
  return request({
    method: Method.GET,
    baseUrl: url,
  });
}
