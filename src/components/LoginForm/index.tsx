import React from "react";
import { Wrap, Form } from './style';
import Input from "../../elements/Input";
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

  return (
      <React.Fragment>
          <Wrap>
              <Form>
                  <Input type='email' name='email' placeholder='이메일' auth/>
              </Form>
          </Wrap>
      </React.Fragment>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
