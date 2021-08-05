import {Method, request} from "../../network/Request";
import {RequestUser, User} from "../../InterfaceAndType/user";

const url = "/apis/v1/user/sessions/me";

export async function login(id: string, pw: string): Promise<RequestUser> {
    const body ={
        user_eml_addr:id,
        pass:pw,
        fcm_tkn_val:"123456"
    }
    const { data } = await request({
        method: Method.POST,
        baseUrl: url,
        body
    })
    return data
}

export function getSession() {
    return request({
        method: Method.GET,
        baseUrl: url,
    });
}
