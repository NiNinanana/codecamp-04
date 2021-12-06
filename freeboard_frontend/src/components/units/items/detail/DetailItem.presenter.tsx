import * as S from "./DetailItem.styles";
import { IDetailItemUIProps } from "./DetailItem.types";

export default function DetailItemUI(props: IDetailItemUIProps) {
  return (
    <S.Wrapper>
      {props.image && (
        <S.ItemImage
          src={`https://storage.googleapis.com/${props.image?.[0]}`}
        />
      )}
      {!props.image && <S.ItemImage src={`/images/고앵이.gif`} />}
      {/* <div>{props.seller}</div> */}
      <S.ItemName>{props.name}</S.ItemName>
      <S.ItemRemarks>한줄: {props.remarks}</S.ItemRemarks>
      {/* <S.ItemCreatedAt>{props.createdAt}</S.ItemCreatedAt> */}
      <S.ItemContents>{props.contents}</S.ItemContents>
      <S.ItemPrice>{Number(props.price).toLocaleString("ko-KR")}원</S.ItemPrice>
      <button onClick={props.basket}>장바구니</button>
      <S.UpdateButton onClick={props.update}>수정</S.UpdateButton>
      <S.ListButton onClick={props.list}>목록</S.ListButton>
      <S.DeleteButton onClick={props.delete}>삭제</S.DeleteButton>
    </S.Wrapper>
  );
}
