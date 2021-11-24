import { useMutation } from "@apollo/client";
import router from "next/router";
import { useState, ChangeEvent } from "react";
import SignUpUI from "./signUp.presenter";
import { CREATE_USER } from "./signUp.queries";

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [checkMyPassword, setCheckMyPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const onChangeMyName = (event: ChangeEvent<HTMLInputElement>) => {
    setMyName(event.target.value);
  };
  const onChangeMyEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setMyEmail(event.target.value);
  };
  const onChangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };
  const onChangeCheckMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckMyPassword(event.target.value);
  };

  const onClickRegister = async () => {
    if (myName === "") {
      setErrorText("이름을 입력해 주세요.");
      return;
    } else if (myEmail === "") {
      setErrorText("이메일을 입력해 주세요.");
      return;
    } else if (myPassword === "") {
      setErrorText("비밀번호를 입력해 주세요.");
      return;
    } else if (myPassword !== checkMyPassword) {
      setErrorText("비밀번호가 일치하지 않았습니다. 다시 시도해 보세요.");
      return;
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      console.log(result);
      alert("회원가입 되었습니다.");
      router.push(`/boards/list`);
    } catch (error) {
      if (error instanceof Error) setErrorText(error.message);
    }
  };

  return (
    <SignUpUI
      errorText={errorText}
      register={onClickRegister}
      myNameChange={onChangeMyName}
      myEmailChange={onChangeMyEmail}
      myPasswordChange={onChangeMyPassword}
      checkMyPasswordChange={onChangeCheckMyPassword}
    />
  );
}
