import { Method, request } from "../../network/Request";

const url = "http://20.41.102.169";

export function Login(email: string, password: string) {
  return request({
    method: Method.POST,
    baseUrl: "/apis/v1/user/sessions/me",
    body: {
      user_eml_addr: email,
      pass: password,
      fcm_tkn_val: "123456",
    },
  });
}

export function getSession() {
  return request({
    method: Method.GET,
    baseUrl: url,
  });
}
