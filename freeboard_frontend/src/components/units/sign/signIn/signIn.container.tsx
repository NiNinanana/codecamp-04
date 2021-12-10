import { useMutation } from "@apollo/client";
import router from "next/router";
import { useState, ChangeEvent, useContext } from "react";
import SignInUI from "./signIn.presenter";
import { LOGIN_USER } from "./signIn.queries";
import { GlobalContext } from "../../../../../pages/_app";

export default function SignIn() {
  const { accessToken, setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeMyId = (event: ChangeEvent<HTMLInputElement>) => {
    setMyEmail(event.target.value);
  };
  const onChangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };
  const onClickLoginButton = async () => {
    console.log(myEmail);
    console.log(myPassword);
    if (myEmail === "") {
      setErrorText("이메일을 입력해 주세요.");
      return;
    } else if (myPassword === "") {
      setErrorText("비밀번호를 입력해 주세요.");
      return;
    }

    try {
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      console.log(result);
      localStorage.setItem(
        "accessToken",
        result.data?.loginUser.accessToken || ""
      );
      setAccessToken(result.data?.loginUser.accessToken);
      alert(accessToken);
      router.back();
    } catch (error) {
      setErrorText("이메일 또는 비밀번호가 잘못 입력 되었습니다.");
      // if (error instanceof Error) alert(error.message);
    }
  };

  const onClickResetPassword = () => {
    router.push(`/resetPassword`);
  };

  const onClickSignUp = () => {
    router.push(`/signUp`);
  };

  return (
    <SignInUI
      errorText={errorText}
      loginButton={onClickLoginButton}
      myIdChange={onChangeMyId}
      myPasswordChange={onChangeMyPassword}
      resetPassword={onClickResetPassword}
      signUP={onClickSignUp}
    />
  );
}
