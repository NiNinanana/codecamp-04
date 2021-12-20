import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function TestLogPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <>
      <div>내 이메일: {data?.fetchUserLoggedIn?.email}</div>
      <div>내 이름: {data?.fetchUserLoggedIn?.name}</div>
    </>
  );
}
