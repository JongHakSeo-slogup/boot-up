import {Method, request} from "../../network/Request";
import {User} from "../../InterfaceAndType/user";

const url = "https://jsonplaceholder.typicode.com/posts";

export async function login(id: string, pw: string): Promise<User> {
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
    return data as User
}

export function getSession() {
    return request({
        method: Method.GET,
        baseUrl: url,
    });
}
