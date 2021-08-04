import React from "react";
import {useFormik} from "formik";
import {BigTextButton, BlockBlackBigButton} from "../Button/styles";
import {
    FormContainer,
    LoginInputContainer,
    InputLabel,
    Input,
    LoginButtonContainer,
    LoginMenuContainer,
    FindButton,
} from "./styles";
import ValidateMessage from '../ValidateMessage';

export interface LoginFormInfo {
    id: string;
    pw: string;
}

const initialValues: LoginFormInfo = {
    id: "",
    pw: "",
};

export interface Props {
}

const LoginForm: React.FC<Props> = (props: Props) => {
    // const formik = useFormik({
    //   initialValues,
    //     onSubmit:()=>{},
    //     // validate,
    //     // validateOnChange
    // });

    /*
     * state method
     */

    /*
     * custom hook
     */

    /*
     * private method
     */

    /*
     * effect cycle
     */

    /*
     * event handler
     */

    /*
     * render method
     */

    return (
        <FormContainer>
            <form>
                <LoginInputContainer>
                    <InputLabel htmlFor="id">아이디</InputLabel>
                    <Input id="id" type="email" placeholder="이메일"/>
                    <ValidateMessage/>
                </LoginInputContainer>
                <LoginInputContainer>
                    <InputLabel htmlFor="password">비밀번호</InputLabel>
                    <Input id="password" type="password" placeholder="비밀번호"/>
                    <ValidateMessage/>
                </LoginInputContainer>
                <LoginButtonContainer>
                    <BlockBlackBigButton disabled>
                        로그인
                    </BlockBlackBigButton>
                </LoginButtonContainer>
                <LoginMenuContainer>
                    <div>
                        <FindButton>아이디 찾기</FindButton> | <FindButton>비밀번호 찾기</FindButton>
                    </div>
                    <div>
                        <BigTextButton underlined>회원가입</BigTextButton>
                    </div>
                </LoginMenuContainer>
            </form>
        </FormContainer>
    );
};

LoginForm.defaultProps = {};

export default LoginForm;
