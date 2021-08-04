import React from 'react';
import Image from '../../elements/Image';
import { imageUrl } from "../../routes/urls";
import { Container } from '../../styles/GlobalStyles';
import LoginForm from "../../components/LoginForm";

export interface Props {

}

const Login: React.FC<Props> = (props: Props) => {
    return(
        <React.Fragment>
            <Container>
                <Image type='default' margin='74px auto 0px auto' src={imageUrl.logo_image} />
                <LoginForm/>
            </Container>
        </React.Fragment>
    )
}

export default Login;