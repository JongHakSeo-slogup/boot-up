import React from "react";
import { useFormik } from "formik";

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

  return <div />;
};

LoginForm.defaultProps = {};

export default LoginForm;
