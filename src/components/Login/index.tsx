import React from 'react';

import logoImage from '../../imgs/logo.png';
import {Container} from './styles';
import {BigTextButton, BlockBlackBiggerButton} from "../Button/styles";

export interface Props {}

const Login: React.FC<Props> = (props: Props) => {
    return (
        <Container>
            <figure>
                <img src={logoImage} alt="로고 이미지"/>
            </figure>
            <form>
                <label htmlFor="id">아이디</label>
                <input id="id" type="email" placeholder="이메일"/>
                <label htmlFor="id">패스워드</label>
                <input id="password" type="password" placeholder="비밀번호"/>
                <BlockBlackBiggerButton disabled>
                    로그인
                </BlockBlackBiggerButton>
                <div>
                    <div>
                        <BigTextButton>아이디 찾기</BigTextButton> | <BigTextButton>비밀번호 찾기</BigTextButton>
                    </div>
                    <div>
                        <BigTextButton underlined>회원가입</BigTextButton>
                    </div>
                </div>
                <BigTextButton underlined>앱 둘러보기</BigTextButton>
            </form>
        </Container>
    );
};

Login.defaultProps = {};

export default Login;