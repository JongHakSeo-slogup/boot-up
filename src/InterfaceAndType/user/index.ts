export interface User {
    row: string;
}

export interface UserRequest {
    data: {
        row: {
            user: {
                user_eml_addr: string
            }
        }
    }
}