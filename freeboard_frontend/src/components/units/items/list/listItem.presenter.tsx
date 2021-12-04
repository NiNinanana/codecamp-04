import { v4 as uuidv4 } from "uuid";
import * as S from "./listItem.styles";

export default function ListItemUI(props) {
  return (
    <>
      <div>상품 목록</div>
      <button onClick={props.create}>상품 등록하기</button>
      <div>
        {props.data?.fetchUseditems.map((el) => (
          <S.ItemWrapper key={uuidv4}>
            <div onClick={props.onClickDetail} id={el._id}>
              상품명: {el.name}
            </div>
            <div>한줄: {el.remarks}</div>
            <div>가격: {el.price}</div>
            <div>날짜: {el.createdAt}</div>
          </S.ItemWrapper>
        ))}
      </div>
    </>
  );
}
