import {Method, request} from "../../network/Request";

// const url = "http://20.41.102.169";

const LOGIN = '/apis/v1/user/sessions/me';

export function login(id: string, password: string) {
    return request({
        method: Method.POST,
        baseUrl: LOGIN,
        headers: {
            'content-type': 'application/json'
        },
        body: {
            "user_eml_addr": id,
            "pass": password,
            "fcm_tkn_val": "123456"
        }
    })
}

export function getUserInfo() {
    return request({
        method: Method.GET,
        baseUrl: LOGIN,
        headers: {
            'content-type': 'application/json',
        },
    });
}
