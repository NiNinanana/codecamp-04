import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./MyPoint.styles";

export default function MyPointUI(props) {
  return (
    <S.Wrapper>
      <S.SideWrapper>
        <div>
          내 포인트 &#91;{props.userData?.fetchUserLoggedIn?.userPoint?.amount}
          &#93;
        </div>
        <S.SideButton1 onClick={props.buy} whatView={props.whatView}>
          구매내역
        </S.SideButton1>
        <S.SideButton2 onClick={props.sell} whatView={props.whatView}>
          판매내역
        </S.SideButton2>
        <S.SideButton3 onClick={props.load} whatView={props.whatView}>
          결제내역
        </S.SideButton3>
      </S.SideWrapper>
      {props.whatView === 1 && (
        <S.BuyingWrapper>
          <S.Title>
            구매내역 &#40;
            {props.countBuyingData?.fetchPointTransactionsCountOfBuying}&#41;
          </S.Title>
          <S.SmallWrapper>
            {props.buyingData?.fetchPointTransactionsOfBuying?.map((el) => (
              <div key={el._id}>
                <div>
                  {el.useditem.images?.length >= 1 && (
                    <S.ItemImage
                      src={`https://storage.googleapis.com/${el.useditem.images?.[0]}`}
                      onClick={props.detailItem(el)}
                    ></S.ItemImage>
                  )}
                  {el.useditem.images?.length < 1 && (
                    <S.ItemImage
                      src={`/images/고앵이.gif`}
                      onClick={props.detailItem(el)}
                    ></S.ItemImage>
                  )}
                </div>
                <div>
                  <S.ItemName>{el.useditem.name}</S.ItemName>
                  <S.ItemSoldAt>{getDate(el.createdAt)}</S.ItemSoldAt>
                </div>
                <S.ItemPrice>
                  {el.amount ? `${el.amount}원` : "무료나눔"}
                </S.ItemPrice>
              </div>
            ))}
          </S.SmallWrapper>
        </S.BuyingWrapper>
      )}
      {props.whatView === 2 && (
        <S.SellingWrapper>
          <S.Title>
            판매내역 &#40;
            {props.countSellingData?.fetchPointTransactionsCountOfSelling}&#41;
          </S.Title>
          {props.sellingData?.fetchPointTransactionsOfSelling?.map((el) => (
            <S.SmallWrapper key={el._id}>
              <div>
                {el.useditem.images?.length >= 1 && (
                  <S.ItemImage
                    src={`https://storage.googleapis.com/${el.useditem.images?.[0]}`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
                {el.useditem.images?.length < 1 && (
                  <S.ItemImage
                    src={`/images/고앵이.gif`}
                    onClick={props.detailItem(el)}
                  ></S.ItemImage>
                )}
              </div>
              <div>
                <S.ItemName>{el.useditem.name}</S.ItemName>
                <S.ItemSoldAt>{getDate(el.createdAt)}</S.ItemSoldAt>
              </div>
              <S.ItemPrice>
                {el.amount ? `${el.amount}원` : "무료나눔"}
              </S.ItemPrice>
            </S.SmallWrapper>
          ))}
        </S.SellingWrapper>
      )}
      {props.whatView === 3 && (
        <S.LoadingWrapper>
          <S.Title>
            결제내역 &#40;
            {props.countLoadingData?.fetchPointTransactionsCountOfLoading}&#41;
          </S.Title>
          {props.loadingData?.fetchPointTransactionsOfLoading?.map((el) => (
            <S.SmallWrapper key={el._id}>{el.amount}</S.SmallWrapper>
          ))}
        </S.LoadingWrapper>
      )}
    </S.Wrapper>
  );
}
