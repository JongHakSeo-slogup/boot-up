import React from "react";
import styles from "./style";
import LoginForm from "../LoginForm";
import URLS from "../../routes/urls";
import { Link } from "react-router-dom";

function Login() {
    return (
        <styles.LoginLayout>
            <styles.LogoArea>
                <img src="/images/logo_carpet_bk.png" alt={"asd"} />
            </styles.LogoArea>
            <LoginForm />
            <styles.LinkArea>
                <styles.FindArea>
                    <Link to="/findid">아이디 찾기</Link>
                    <Link to="/findpwd">비밀번호 찾기</Link>
                </styles.FindArea>
                <styles.JoinLink to={URLS.SIGH_UP}>회원가입</styles.JoinLink>
            </styles.LinkArea>
            <styles.ButtonWrapper>
                <styles.AroundButton to={URLS.HOME}>앱 둘러보기</styles.AroundButton>
            </styles.ButtonWrapper>
        </styles.LoginLayout>
    )
};

export default Login;