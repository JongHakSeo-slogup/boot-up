import React from 'react';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
import { imageUrl } from "../../routes/urls";
import { Container } from '../../styles/GlobalStyles';
import LoginForm from "../../components/LoginForm";
import { HelpLogin, FindUserInfo, TourAppBtn } from "./style";
export interface Props {

}

const Login: React.FC<Props> = (props: Props) => {
    return(
        <React.Fragment>
            <Container>
                <Image type='default' margin='74px auto 0px auto' src={imageUrl.logo_image} />
                <LoginForm/>
                <HelpLogin>
                    <span>
                        <FindUserInfo>
                            아이디찾기
                        </FindUserInfo>
                        |
                        <FindUserInfo>
                            비밀번호 찾기
                        </FindUserInfo>
                    </span>
                    <Button underline>
                        회원가입
                    </Button>
                </HelpLogin>
                <TourAppBtn>
                    <Button underline>
                        앱 둘러보기
                    </Button>
                </TourAppBtn>
            </Container>
        </React.Fragment>
    )
}

export default Login;