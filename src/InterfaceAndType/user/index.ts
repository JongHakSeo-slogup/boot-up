export interface User {
  name: string | null;
}

export interface RequestUser {
  row: {
    user: {
      user_eml_addr: string
    }
  }
}