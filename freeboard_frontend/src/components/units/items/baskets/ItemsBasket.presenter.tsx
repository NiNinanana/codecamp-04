import { useState } from "react";
import * as S from "./ItemsBaskets.styles";

export default function ItemsBasketUI(props) {
  const [count, setCount] = useState(1);
  const aaa = (countA) => (event) => {
    setCount(Number(event.target.value));
  };

  return (
    <S.Wrapper>
      <S.Basket>장바구니</S.Basket>
      {props.basketItems.map((el, countA) => (
        <S.ItemWrapper key={el._id}>
          <S.ItemImage src="/images/고앵이.gif" />
          <S.ItemTextWrapper>
            <S.ItemName>{el.name}</S.ItemName>
            {/* <div>{el.createdAt}</div> */}
            <S.ItemCount>
              <button>-</button>
              <input type="number" defaultValue="1" onChange={aaa(countA)} />
              <button>+</button>
            </S.ItemCount>
            <S.ItemPrice>
              {(el.price * count).toLocaleString("ko-KR")}원
            </S.ItemPrice>
          </S.ItemTextWrapper>
          <S.ItemDeleteButton id={el._id} onClick={props.delete}>
            삭제
          </S.ItemDeleteButton>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
}
