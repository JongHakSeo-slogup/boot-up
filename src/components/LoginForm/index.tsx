import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./style";
import TextInput from "../TextInput";
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {userSlice, UserState} from "../../redux/slices/user";
import {RootState} from "../../redux/reducers";
import Loading from "../Loading";
import {WRONG_ID_OR_PASSWORD} from "../../network/HttpError";
import {toastSlice} from "../../redux/slices/toast";

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
    /*
   * state method
   */
    const { isLoading, error } = useSelector<RootState, UserState>(state => state.user);
    const [disabled, setDisabled] = useState(false);
    const [onValidate, setOnValidate] = useState(false);

    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        id: Yup.string().required('이메일을 입력해주세요.').email('잘못된 이메일 형식입니다.'),
        pw: Yup.string().required('비밀번호를 입력해주세요.').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
            '비밀번호 형식이 맞지않습니다.(문자, 숫자, 특수문자 조합)'
        ),
    });

    const onSubmit = () => {
        if(disabled) return;
        setOnValidate(false);
        dispatch(userSlice.actions.login({id: formik.values.id, pw: formik.values.pw}));
    }

    /*
  * custom hook
  */
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validate: ()=> setOnValidate(true),
        validateOnChange: onValidate,
   });

  /*
   * private method
   */

  /*
   * effect cycle
   */
    useEffect(() => {
        if(formik.isValid) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [formik.isValid]);

    useEffect(() => {
        if(error) {
            let errorMessage = '';
            switch(error.message) {
                case WRONG_ID_OR_PASSWORD:
                    errorMessage = '아이디 또는 비밀번호가 일치하지 않습니다. 5회 이상 틀릴 경우 로그인이 제한됩니다.';
                    break;
                default:
                    break;
            }

            dispatch(toastSlice.actions.putToast({message: errorMessage, type: 'error'}));
        }
    }, [error]);

  /*
   * event handler
   */

  /*
   * render method
   */
  return (
      <>
          {isLoading && <Loading />}
          <styles.LoginFormLayout  onSubmit={formik.handleSubmit}>
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
              <Button
                  type="submit"
                  text="로그인"
                  disable={disabled}
                  isFull />
          </styles.LoginFormLayout>
      </>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
