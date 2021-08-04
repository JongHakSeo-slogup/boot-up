import React from "react";
import styles from "./style";
import LoginForm from "../LoginForm";

function Login() {
    return (
        <styles.LoginLayout>
            <styles.LogoArea>
                <img src="/images/logo_carpet_bk.png" alt={"asd"} />
            </styles.LogoArea>
            <LoginForm />
            <styles.LinkArea>
                <styles.FindArea>
                    <a href="/findid">아이디 찾기</a>
                    <a href="/findpwd">비밀번호 찾기</a>
                </styles.FindArea>
                <styles.JoinLink href="/signup">회원가입</styles.JoinLink>
            </styles.LinkArea>
            <styles.ButtonWrapper>
                <styles.AroundButton to="/home">앱 둘러보기</styles.AroundButton>
            </styles.ButtonWrapper>
        </styles.LoginLayout>
    )
};

export default Login;