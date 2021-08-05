import React, {useEffect, useState} from "react";
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
    const [disabled, setDisabled] = useState(false);
    const [validationOn, setValidationOn] = useState(false);
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validate: () => {
            setValidationOn(true);
        },
        validationSchema: Yup.object({
            id: Yup.string().required("이메일을 입력해주세요").email("잘못된 이메일 형식입니다"),
            password: Yup.string()
                .required("비밀번호를 입력해주세요")
                .matches(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$"), "비밀번호는 8자리 이상이며 영문, 숫자, 특수문자를 포함해야 합니다")
        }),
        validateOnChange: validationOn,
    });

    useEffect(() => {
        console.log(formik.isValid, formik.errors);
        if (formik.isValid) {
            console.log('활성화')
            setDisabled(false);
        } else {
            console.log('비활성화')
            setDisabled(true);
        }
    }, [formik.isValid])

    return (
        <FormContainer>
            <form onSubmit={formik.handleSubmit}>
                <LoginInputContainer>
                    <InputLabel htmlFor="id">아이디</InputLabel>
                    <Input id="id" name="id" type="email" placeholder="이메일" onChange={formik.handleChange} value={formik.values.id}/>
                    {formik.touched.id && formik.errors.id &&
                    <ValidateMessage message={formik.errors.id}/>
                    }
                </LoginInputContainer>
                <LoginInputContainer>
                    <InputLabel htmlFor="password">비밀번호</InputLabel>
                    <Input id="password" name="password" type="password" placeholder="비밀번호" onChange={formik.handleChange} value={formik.values.password}/>
                    {formik.touched.password && formik.errors.password &&
                    <ValidateMessage message={formik.errors.password}/>
                    }
                </LoginInputContainer>
                <LoginButtonContainer>
                    {
                        !disabled ? (
                            <BlockBlackBigButton type="submit">
                                로그인
                            </BlockBlackBigButton>
                        ) : (
                            <BlockBlackBigButton disabled type="submit">
                                로그인
                            </BlockBlackBigButton>
                        )
                    }
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
