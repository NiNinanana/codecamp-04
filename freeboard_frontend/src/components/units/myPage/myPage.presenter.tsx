import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import {
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_USER_LOGGED_IN,
} from "./myPage.queries";
import * as S from "./myPage.styles";

export default function MyPageUI() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const { data: buyData } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);

  console.log(data?.fetchUserLoggedIn);
  return (
    <>
      <S.MyName>{data?.fetchUserLoggedIn.email}님</S.MyName>
      <S.MyAmount>{data?.fetchUserLoggedIn?.userPoint?.amount} pt.</S.MyAmount>
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
