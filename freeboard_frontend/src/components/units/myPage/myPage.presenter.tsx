import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      userPoint {
        amount
      }
    }
  }
`;

const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought {
    fetchUseditemsIBought {
      _id
      name
      price
    }
  }
`;

export default function MyPageUI() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const { data: buyData } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);

  console.log(data?.fetchUserLoggedIn);
  return (
    <>
      <div>닉네임</div>
      <div>{data?.fetchUserLoggedIn.email}</div>
      <div>내돈! {data?.fetchUserLoggedIn?.userPoint?.amount}</div>
      <div>내가 산거</div>
      {buyData?.fetchUseditemsIBought?.map((el) => (
        <>
          <div>{el.name}</div>
          <div>{el.price}</div>
        </>
      ))}
    </>
  );
}
