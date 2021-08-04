import React from "react";
import { Wrap, Form } from "./style";
import Input from "../../elements/Input";
import { useFormik } from "formik";
import Button from "../../elements/Button";
import { emailCheck, pwdCheck } from "../../shared/validate";

// export interface LoginFormInfo {
//   email: string;
//   pw: string;
// }
// const initialValues: LoginFormInfo = {
//   email: "",
//   pw: "",
// };

export interface Props {}

const LoginForm: React.FC<Props> = (props: Props) => {
  // const formik = useFormik({
  //   initialValues,
  //     onSubmit:(values)=>{ console.log(values)},
  //     // validate,
  //     // validateOnChange
  // });

  /*
   * state method
   */
  const [email, setEmail] = React.useState<string>("");
  const [pwd, setPwd] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState<"password">("password");

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

  const submitHandler = () => {
    if (!emailCheck(email)) {
      return window.alert("email 형식이 유효하지 않습니다.");
    }
    if (!pwdCheck(pwd)) {
      return window.alert("비밀번호 형식이 유효하지 않습니다.");
    }

    return;
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  /*
   * render method
   */

  return (
    <React.Fragment>
      <Wrap>
        <Form onSubmit={submitHandler}>
          <Input
            validate={emailCheck(email)}
            onChange={handleEmail}
            type="email"
            name="email"
            placeholder="이메일"
            auth
          />
          <Input
            validate={pwdCheck(pwd)}
            onChange={handlePassword}
            type={isOpen}
            name="password"
            placeholder="비밀번호"
            margin="32px 0px 0px 0px"
            auth
          />
          <Button
            disabled={!emailCheck(email) || !pwdCheck(pwd)}
            type="submit"
            height="56px"
            margin="32px 0px 0px 0px"
          >
            로그인
          </Button>
        </Form>
      </Wrap>
    </React.Fragment>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
