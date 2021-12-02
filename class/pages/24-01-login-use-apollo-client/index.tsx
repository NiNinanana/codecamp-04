import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient();

  const onChangeMyEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setMyEmail(event.target.value);
  };

  const onChangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      localStorage.setItem("accessToken", accessToken || "");
      setAccessToken?.(accessToken || "");
      // 여기서 글로벌 스테이트에 넣을 setAccessToken 필요

      // const result = await axios.get(`koreanjosn.com/posts/1`)
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      });

      setUserInfo?.(resultUserInfo.data?.fetchUserLoggedIn);

      console.log("asdf", resultUserInfo.data?.fetchUserLoggedIn);
      router.push(`/24-02-login-success`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      이메일:{" "}
      <input
        type="text"
        onChange={onChangeMyEmail}
        placeholder="이메일을 입력하세요"
      />{" "}
      <br />
      비밀번호:{" "}
      <input
        type="password"
        onChange={onChangeMyPassword}
        placeholder="비밀번호를 입력하세요"
      />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
