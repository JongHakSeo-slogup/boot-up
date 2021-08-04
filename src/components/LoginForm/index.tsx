import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./style";
import TextInput from "../TextInput";
import Button from "../Button";

export interface LoginFormInfo {
  id: string;
  pw: string;
}
const initialValues: LoginFormInfo = {
  id: "",
  pw: "",
};

export interface Props {}

const LoginForm: React.FC<Props> = (props: Props) => {
    const [disabled, setDisabled] = useState(false);

    const validationSchema = Yup.object().shape({
        id: Yup.string().required('이메일을 입력해주세요.').email('잘못된 이메일 형식입니다.'),
        pw: Yup.string().required('비밀번호를 입력해주세요.').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
            '비밀번호 형식이 맞지않습니다.(문자, 숫자, 특수문자 조합)'
        )
    });

    const formik = useFormik({
        initialValues,
        onSubmit:()=>{
            console.log('submit')
        },
        validationSchema,
        validateOnChange: false
   });

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
      <styles.LoginFormLayout onSubmit={formik.handleSubmit}>
          <TextInput
              name="id"
              type="emil"
              placeholder="이메일"
              value={formik.values.id}
              {...(formik.errors.id && { message: {type: 'error', text: formik.errors.id} })}
              onChange={formik.handleChange} />
          <TextInput
              name="pw"
              type="password"
              placeholder="비밀번호"
              value={formik.values.pw}
              {...(formik.errors.pw && { message: {type: 'error', text: formik.errors.pw} })}
              onChange={formik.handleChange} />
          <Button type="submit" text="로그인" disable={disabled} isFull />
      </styles.LoginFormLayout>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
