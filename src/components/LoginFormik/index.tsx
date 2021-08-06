import React from "react";
import { Wrap, Form, Warn, PwdInput, Eye } from "./style";
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
import axios from "axios";
import URLS, { imageUrl } from "../../routes/urls";

export interface LoginFormInfo {
  email: string;
  pwd: string;
}
const initialValues: LoginFormInfo = {
  email: "",
  pwd: "",
};

export interface Props {}

const LoginFormik: React.FC<Props> = (props: Props) => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (!emailValid) {
        setDisableBtn(true);
        // window.alert('이메일 형식이 잘못되었습니다.')
        return;
      }
      if (!pwdValid) {
        setDisableBtn(true);
        // window.alert('비밀번호 형식이 잘못되었습니다.')
        return;
      }
      setDisableBtn(true);
      Login(values.email, values.pwd)
          .then((res) => {
            setCookie("x-auth-token", res.headers["x-auth-token"]);
            axios.defaults.headers.common["x-auth-token"] =
                getCookie("x-auth-token");
            dispatch(userSlice.actions.login());
            history.push(URLS.MAIN_PAGE);
          })
          .catch((err) => {
            if( axios.isCancel(err) ){
              console.log(err.message);
            } else {
              console.error(err)
              if(err.rawError){
                console.log(err.rawError.response.data.rows[0].msg);
                if(err.rawError.response.data.rows[0].msg === 'wrongIdOrPassword'){
                  window.alert('아이디 또는 비밀번호가 일치하지 않거나 존재하지 않는 아이디 입니다.')
                }
            }
            }

          }).finally(() => setDisableBtn(false));

    },
    validate: (values) => {
      setEmailValid(emailCheck(values.email))
      setPwdValid(pwdCheck(values.pwd));
      if(emailCheck(values.email) && pwdCheck(values.pwd)){
        setDisableBtn(false);
      }
    },
    validateOnChange: true,
  });

  /*
   * state method
   */
  const [emailValid, setEmailValid] = React.useState<boolean>(false);
  const [pwdValid, setPwdValid] = React.useState<boolean>(false);
  // const [isEmailFocused, setEmailFocused] = React.useState<boolean>(false);
  // const [isPwdFocused, setPwdFocused] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<"password" | "text">("password");
  const [disable_btn, setDisableBtn] = React.useState<boolean>(false);

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

  const eyeHandler = () => {
    if (isOpen === "password") {
      setIsOpen("text");
    } else {
      setIsOpen("password");
    }
  };

  /*
   * render method
   *
   */

  return (
    <React.Fragment>
      <Wrap>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            validate={emailValid || !disable_btn}
            onChange={formik.handleChange}
            type="text"
            name="email"
            placeholder="이메일"
            text="아이디"
            label={emailValid  ? true : false}
            value={formik.values.email}
            auth
            // onFocus={() => {setEmailFocused(true)}}
            // onBlur={() => {setEmailFocused(false)}}
          />
          {!emailValid && formik.values.email && disable_btn ? (
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
          <PwdInput>
            <Input
              validate={pwdValid || !disable_btn}
              onChange={formik.handleChange}
              type={isOpen}
              name='pwd'
              placeholder="비밀번호"
              text="비밀번호"
              label={pwdValid ? true : false}
              value={formik.values.pwd}
              auth
              // onFocus={() => {setPwdFocused(true)}}
              // onBlur={() => {setPwdFocused(false)}}
            />
            <Eye
              src={
                isOpen === "text"
                  ? imageUrl.eye_toggle_image
                  : imageUrl.eye_close_image
              }
              onClick={eyeHandler}
            />
          </PwdInput>
          {!pwdValid  && formik.values.pwd && disable_btn ? (
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

LoginFormik.defaultProps = {};
export default LoginFormik;
