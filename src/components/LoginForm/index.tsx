import React from "react";
import { Wrap, Form } from './style';
import Input from "../../elements/Input";
import { useFormik } from "formik";
import Button from "../../elements/Button";

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
                  <Input type='password' name='password' placeholder='비밀번호' margin='32px 0px 0px 0px' auth/>
                  <Button height='56px' margin='32px 0px 0px 0px'>로그인</Button>
              </Form>
          </Wrap>
      </React.Fragment>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
