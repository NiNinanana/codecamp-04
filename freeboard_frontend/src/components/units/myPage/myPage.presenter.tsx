import { useQuery } from "@apollo/client";
import { getDate } from "../../../commons/libraries/utils";
import { IQuery } from "../../../commons/types/generated/types";
import {
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_USER_LOGGED_IN,
} from "./myPage.queries";
import * as S from "./myPage.styles";

export default function MyPageUI(props) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const { data: buyData } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);

  console.log(buyData?.fetchUseditemsIBought);
  return (
    <S.Wrapper>
      <div>
        <S.MyName>{data?.fetchUserLoggedIn.name}님</S.MyName>
        <S.MyAmount>
          {data?.fetchUserLoggedIn?.userPoint?.amount} pt.
        </S.MyAmount>
        <button onClick={props.plus}>충전하기</button>
      </div>
      <div>
        <div>구매 목록</div>
        {buyData?.fetchUseditemsIBought?.map((el) => (
          <S.ItemWrapper key={el._id}>
            <div>
              <S.ItemImage
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onClick={props.detailItem(el)}
              ></S.ItemImage>
            </div>
            <div>
              <S.ItemName>{el.name}</S.ItemName>
              <S.ItemSoldAt>{getDate(el.soldAt)}</S.ItemSoldAt>
            </div>
            <S.ItemPrice>{el.price}</S.ItemPrice>
          </S.ItemWrapper>
        ))}
      </div>
    </S.Wrapper>
  );
}
