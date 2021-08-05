import React from 'react';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
import URLS, { imageUrl } from "../../routes/urls";
import { Container } from '../../styles/GlobalStyles';
import LoginForm from "../../components/LoginForm";
import { HelpLogin, FindUserInfo, TourAppBtn } from "./style";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getCookie} from "../../shared/Cookie";
import {history} from "../../redux/reducers";
export interface Props {

}

const Login: React.FC<Props> = (props: Props) => {


    const user_info = useSelector((state: RootState) => state.user.user);
    const token = getCookie('x-auth-token');


    React.useEffect(() => {
        if(token && user_info) {
            window.alert('이미 로그인 상태입니다.');
            history.push(URLS.MAIN_PAGE);
        }
    }, [user_info, token]);

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
                    <Button onClick={() => {history.push(URLS.MAIN_PAGE)}}underline>
                        앱 둘러보기
                    </Button>
                </TourAppBtn>
            </Container>
        </React.Fragment>
    )
}

export default Login;