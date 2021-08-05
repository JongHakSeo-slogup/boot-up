import React from "react";
import { Wrap, Form, Warn } from "./style";
import Input from "../../elements/Input";
import { useFormik } from "formik";
import Button from "../../elements/Button";
import Image from "../../elements/Image";
import { emailCheck, pwdCheck } from "../../shared/validate";
import { Login } from "../../apis/account";
import { userSlice } from "../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../redux/reducers";
import { setCookie, getCookie } from "../../shared/Cookie";
import * as userSaga from "../../redux/sagas/user";
import axios from "axios";
import { RootState } from "../../redux/store";
import URLS, { imageUrl } from "../../routes/urls";

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
  const [disable_btn, setDisableBtn] = React.useState<boolean>(false);


  /*
   * custom hook
   */
  const dispatch = useDispatch();
  // const emailInput = React.useRef<HTMLInputElement>(null);
  // const pwdInput = React.useRef<HTMLInputElement>(null);
  /*
   * private method
   */

  /*
   * effect cycle
   */

  /*
   * event handler
   */

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailCheck(email)) {
      setDisableBtn(true);
      return ;
    }
    if (!pwdCheck(pwd)) {
      setDisableBtn(true);
      return ;
    }
    Login(email, pwd)
      .then((res) => {
        setCookie("x-auth-token", res.headers["x-auth-token"]);
        axios.defaults.headers.common["x-auth-token"] =
          getCookie("x-auth-token");
        dispatch(userSlice.actions.login());
        history.push(URLS.MAIN_PAGE);
      })
      .catch((err) => console.error(err));

    return;
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if(emailCheck(e.target.value) && pwdCheck(pwd)){
      setDisableBtn(false);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
    if(pwdCheck(e.target.value) && emailCheck(email)){
      setDisableBtn(false);
    }
  };

  /*
   * render method
   *
   */


  return (
    <React.Fragment>
      <Wrap>
        <Form onSubmit={submitHandler}>
          <Input
            validate={emailCheck(email) || !disable_btn}
            onChange={handleEmail}
            type="email"
            name="email"
            placeholder="이메일"
            text='아이디'
            label={email !== '' ? true: false}
            auth
          />
          {!emailCheck(email) && email && disable_btn? (
            <>
              <Warn>
                <Image
                  type="default"
                  max_width="16px"
                  max_height="16px"
                  margin="0px 4px 0px 0px"
                  src={imageUrl.warn_image}
                />
                <span>잘못된 이메일 형식입니다.</span>
              </Warn>
            </>
          ) : (
            ""
          )}
          <Input
            validate={pwdCheck(pwd) || !disable_btn}
            onChange={handlePassword}
            type={isOpen}
            name="password"
            placeholder="비밀번호"
            text='비밀번호'
            label={pwd !== '' ? true: false}
            margin='32px 0px 0px 0px'
            auth
          />
          {!pwdCheck(pwd) && pwd && disable_btn? (
            <>
              <Warn>
                <Image
                  type="default"
                  max_width="16px"
                  max_height="16px"
                  margin="0px 4px 0px 0px"
                  src={imageUrl.warn_image}
                />
                <span>8~16자리의 영문, 숫자, 특수문자를 포함해야 합니다.</span>
              </Warn>
            </>
          ) : (
            ""
          )}
          <Button
            disabled={disable_btn}
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
