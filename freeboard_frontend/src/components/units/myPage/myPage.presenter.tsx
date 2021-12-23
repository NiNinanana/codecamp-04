import { useQuery } from "@apollo/client";
import { getDate } from "../../../commons/libraries/utils";
import { IQuery } from "../../../commons/types/generated/types";
import {
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_USER_LOGGED_IN,
} from "./myPage.queries";
import * as S from "./myPage.styles";
import { IMyPageUIProps } from "./myPage.types";

export default function MyPageUI(props: IMyPageUIProps) {
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
        <button>포인트 내역</button>
      </div>
      <div>
        <div>구매 목록</div>
        <S.ItemsIBoughtList>
          {buyData?.fetchUseditemsIBought?.map((el: any) => (
            <S.ItemWrapper key={el._id}>
              <div>
                {el.images?.length >= 1 && (
                  <S.ItemImage
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
                {el.images?.length < 1 && (
                  <S.ItemImage
                    src={`/images/고앵이.gif`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
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
          {props.soldData?.fetchUseditemsISold?.map((el: any) => (
            <S.ItemWrapper key={el._id}>
              <div>
                {el.images?.length >= 1 && (
                  <S.ItemImage
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
                {el.images?.length < 1 && (
                  <S.ItemImage
                    src={`/images/고앵이.gif`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
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
        <div>
          <div>찜 목록</div>
          {props.pickData?.fetchUseditemsIPicked.map((el) => (
            <S.ItemWrapper key={el._id}>
              <div>
                {el.images?.length >= 1 && (
                  <S.ItemImage
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
                {el.images?.length < 1 && (
                  <S.ItemImage
                    src={`/images/고앵이.gif`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
              </div>
              <div>
                <S.ItemName>{el.name}</S.ItemName>
                <S.ItemSoldAt>{getDate(el.createdAt)}</S.ItemSoldAt>
                <S.ItemUnPickButton onClick={props.unPickItem(el)}>
                  삭제하기
                </S.ItemUnPickButton>
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
        </div>
      </div>
    </S.Wrapper>
  );
}
