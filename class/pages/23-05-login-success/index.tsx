import { useContext } from "react";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../_app";

function LoginSuccessPage() {
  const { userInfo } = useContext(GlobalContext);
  return (
    <>
      <h1>로그인에 성공하였습니다!</h1>
      <h2>{userInfo?.email}</h2>
      <h2>{userInfo?.name}님</h2>
    </>
  );
}

export default withAuth(LoginSuccessPage);
