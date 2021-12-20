import * as S from "./DetailItem.styles";
import { IDetailItemUIProps } from "./DetailItem.types";
import Head from "next/head";
import Slider from "react-slick";

export default function DetailItemUI(props: IDetailItemUIProps) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Wrapper>
        {props.image?.length >= 1 && (
          <>
            {/* <S.ItemImage
              src={`https://storage.googleapis.com/${props.image?.[0]}`}
            />
            {props.image?.[1]?.length > 1 && (
              <S.ItemImage
                src={`https://storage.googleapis.com/${props.image?.[1]}`}
              />
            )}
            {props.image?.[2]?.length > 1 && (
              <S.ItemImage
                src={`https://storage.googleapis.com/${props.image?.[2]}`}
              />
            )} */}
            <Slider {...settings}>
              {props.image.map((_, index) => (
                <S.ItemImage
                  src={`https://storage.googleapis.com/${props.image?.[index]}`}
                  key={index}
                />
              ))}
            </Slider>
          </>
        )}
        {props.image?.length < 1 && <S.ItemImage src={`/images/고앵이.gif`} />}
        {/* <div>{props.seller}</div> */}
        <S.ItemName>{props.name}</S.ItemName>
        <div>
          <S.ItemRemarks>
            {props.remarks} ; {props.address} ; {props.tags}
          </S.ItemRemarks>
        </div>
        {/* <S.ItemCreatedAt>{props.createdAt}</S.ItemCreatedAt> */}
        <S.ItemContents>{props.contents}</S.ItemContents>
        <S.ItemPrice>
          {Number(props.price).toLocaleString("ko-KR")}원
        </S.ItemPrice>
        <div>
          {props.sellerName !== props.userData?.fetchUserLoggedIn.name && (
            <>
              {!props.buyerName && (
                <>
                  <S.NavButton onClick={props.buy}>구매하기</S.NavButton>
                  <S.NavButton onClick={props.basket}>장바구니</S.NavButton>
                  <S.NavButton onClick={props.pick}>찜하기</S.NavButton>
                </>
              )}
            </>
          )}
          {props.sellerName === props.userData?.fetchUserLoggedIn.name && (
            <S.NavButton onClick={props.update}>수정</S.NavButton>
          )}
          {props.sellerName === props.userData?.fetchUserLoggedIn.name && (
            <S.NavButton onClick={props.delete}>삭제</S.NavButton>
          )}
          <S.NavButton onClick={props.list}>목록으로</S.NavButton>
        </div>
      </S.Wrapper>
    </>
  );
}
