import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
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
    password: string;
}

const initialValues: LoginFormInfo = {
    id: "",
    password: "",
};

export interface Props {
}

const LoginForm: React.FC<Props> = (props: Props) => {
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            id: Yup.string().required("이메일을 입력해주세요").email("잘못된 이메일 형식입니다"),
            password: Yup.string()
                .required("비밀번호를 입력해주세요")
                .matches(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$"), "비밀번호는 8자리 이상이며 영문, 숫자, 특수문자를 포함해야 합니다")
        })
    });

    return (
        <FormContainer>
            <form onSubmit={formik.handleSubmit}>
                <LoginInputContainer>
                    <InputLabel htmlFor="id">아이디</InputLabel>
                    <Input id="id" type="email" placeholder="이메일" {...formik.getFieldProps('id')} />
                    {formik.touched.id && formik.errors.id &&
                    <ValidateMessage message={formik.errors.id}/>
                    }
                </LoginInputContainer>
                <LoginInputContainer>
                    <InputLabel htmlFor="password">비밀번호</InputLabel>
                    <Input id="password" type="password" placeholder="비밀번호" {...formik.getFieldProps('password')}/>
                    {formik.touched.password && formik.errors.password &&
                    <ValidateMessage message={formik.errors.password}/>
                    }
                </LoginInputContainer>
                <LoginButtonContainer>
                    <BlockBlackBigButton type="submit">
                        로그인
                    </BlockBlackBigButton>
                </LoginButtonContainer>
                <LoginMenuContainer>
                    <div>
                        <FindButton type="button">아이디 찾기</FindButton> | <FindButton type="button">비밀번호 찾기</FindButton>
                    </div>
                    <div>
                        <BigTextButton type="button" underlined>회원가입</BigTextButton>
                    </div>
                </LoginMenuContainer>
            </form>
        </FormContainer>
    );
};

LoginForm.defaultProps = {};

export default LoginForm;
