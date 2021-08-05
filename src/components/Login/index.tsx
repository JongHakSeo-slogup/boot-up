import React from 'react';

import logoImage from '../../imgs/logo.png';
import {Container, LookAroundButtonContainer} from './styles';
import {BigTextButton} from "../Button/styles";
import {LogoFigure, LogoImage} from "./styles";

import LoginForm from "../LoginForm";
import {useHistory} from "react-router";
import URLS from "../../routes/urls";

export interface Props {}

const Login: React.FC<Props> = (props: Props) => {
    const history = useHistory();

    const lookAround = () => {
        history.push(URLS.MAIN_PAGE);
    }

    return (
        <Container>
            <LogoFigure>
                <LogoImage src={logoImage} alt="로고 이미지"/>
            </LogoFigure>
            <LoginForm />
            <LookAroundButtonContainer>
                <BigTextButton underlined onClick={lookAround}>앱 둘러보기</BigTextButton>
            </LookAroundButtonContainer>
        </Container>
    );
};

Login.defaultProps = {};
export default Login;