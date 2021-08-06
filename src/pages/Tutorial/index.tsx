import React from 'react';
import { Container } from '../../styles/GlobalStyles'
import { TitleBox, Title, Explain, DotQueue, Dots, SelectedDot } from './style';
import Image from '../../elements/Image';
import Button from "../../elements/Button";
import {history} from "../../redux/reducers";
import { useSelector } from "react-redux";
import URLS, { imageUrl } from "../../routes/urls";
import {RootState} from "../../redux/store";

export interface Props {}

const Tutorial: React.FC<Props> = (props: Props) => {

    const isLogin = useSelector((state:RootState) => state.user.isLogin);

    const gotoMain = () => {
        if(isLogin) {
            history.push(URLS.MAIN_PAGE);
        } else {
            history.push(URLS.LOGIN_PAGE);
        }
    }

    return(
        <React.Fragment>
                <Container>
                    <TitleBox>
                        <Title>
                            모바일 정비명세서
                        </Title>
                        <Explain>
                            정비 받은 명세서를 쉽고 간편하게 모바일로 관리해보세요.
                        </Explain>
                    </TitleBox>
                    <div style={{height:'385px'}}>
                        <Image max_width='308px' margin='48px auto 0px auto' type='gradient' src={imageUrl.tutorial_image}/>
                    </div>
                    <DotQueue>
                        <Dots/>
                        <Dots/>
                        <SelectedDot/>
                    </DotQueue>
                    <Button onClick={gotoMain} width='320px' height='56px' margin='32px 0px 0px 0px'>카펫 시작하기</Button>
                </Container>
        </React.Fragment>
    )
}

export default Tutorial;