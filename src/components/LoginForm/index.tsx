import React from "react";
import { useFormik } from "formik";
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
      <styles.LoginFormLayout>
          <TextInput type="text" placeholder="이메일" />
          <TextInput type="text" placeholder="비밀번호" />
          <Button text="로그인" isFull />
      </styles.LoginFormLayout>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
