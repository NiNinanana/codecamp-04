import { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function TestPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [myId, setMyId] = useState("");
  const [myPw, setMyPw] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);

  const cId = (event) => {
    setMyId(event.target.value);
  };
  const cPw = (event) => {
    setMyPw(event.target.value);
  };
  const onClickLoginButton = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: myId,
          password: myPw,
        },
      });
      console.log(result);
      localStorage.setItem("refreshToken", "true");
      setAccessToken?.(result.data?.loginUser.accessToken || "");
      alert("로그인 성공");
    } catch (error) {
      alert("로그인 실패");
      if (error instanceof Error) console.log(error.message);
    }
  };
  const dlehd = () => {
    router.push(`/testLog`);
  };

  return (
    <>
      <input type="text" onChange={cId} />
      <input type="text" onChange={cPw} />
      <button onClick={onClickLoginButton}>로그인</button>
      <button onClick={dlehd}>이동</button>
    </>
  );
}
