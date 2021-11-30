import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      <h1>로그인에 성공하였습니다!</h1>
      <h2>{data?.fetchUserLoggedIn.email}</h2>
      <h2>{data?.fetchUserLoggedIn.name}님</h2>
    </>
  );
}
