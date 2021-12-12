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
        <S.ItemsIBoughtList>
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
              <S.ItemPrice>
                {el.price ? `${el.price}원` : "무료나눔"}
              </S.ItemPrice>
            </S.ItemWrapper>
          ))}
        </S.ItemsIBoughtList>
      </div>
      <div>
        <div>판매 목록</div>
        <S.ItemsISoldList>
          {props.soldData?.fetchUseditemsISold?.map((el) => (
            <S.ItemWrapper key={el._id}>
              <div>
                <S.ItemImage
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onClick={props.detailItem(el)}
                ></S.ItemImage>
              </div>
              <div>
                <S.ItemName>{el.name}</S.ItemName>
                <S.ItemSoldAt>{getDate(el.createdAt)}</S.ItemSoldAt>
              </div>
              <S.ItemSmallWrapper>
                <S.ItemPrice>
                  {el.price ? `${el.price}원` : "무료나눔"}
                </S.ItemPrice>
                <S.ItemIsSoldOut isSoldOut={el.buyer?.name.length >= 1}>
                  {el.buyer?.name ? "판매완료" : "판매중"}
                </S.ItemIsSoldOut>
              </S.ItemSmallWrapper>
            </S.ItemWrapper>
          ))}
        </S.ItemsISoldList>
      </div>
    </S.Wrapper>
  );
}
