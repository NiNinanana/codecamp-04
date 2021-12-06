import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./listItem.styles";

export default function ListItemUI(props) {
  return (
    <S.Wrapper>
      <S.List onClick={props.list}>상품 목록</S.List>
      <S.InputWrapper>
        <S.SearchInput
          type="text"
          placeholder="상품명을 입력하세요"
          onChange={props.searchContents}
        />
        <S.SearchButton onClick={props.search}>검색</S.SearchButton>
        <S.CreateButton onClick={props.create}>상품 등록하기</S.CreateButton>
        <S.BasketButton onClick={props.basket}>장바구니</S.BasketButton>
      </S.InputWrapper>
      <S.ListWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {!props.isSearch &&
            props.data?.fetchUseditems.map((el) => (
              <S.ItemWrapper key={uuidv4}>
                {el.images?.[0] && (
                  <S.ItemImage
                    onClick={props.onClickDetail(el)}
                    id={el._id}
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  />
                )}
                {!el.images?.[0] && (
                  <S.ItemImage
                    src={`/images/고앵이.gif`}
                    onClick={props.onClickDetail(el)}
                    id={el._id}
                  />
                )}
                <S.ItemTextWrapper>
                  <S.ItemName onClick={props.onClickDetail(el)} id={el._id}>
                    {el.name}
                  </S.ItemName>
                  <S.ItemGreyWrapper>
                    <S.ItemRemarks>{el.remarks} •</S.ItemRemarks>
                    <S.ItemCreatedAt>{getDate(el.createdAt)}</S.ItemCreatedAt>
                  </S.ItemGreyWrapper>
                  <S.ItemPrice>
                    {el.price === 0 && "무료나눔💚"}
                    {el.price > 0 && <>{el.price.toLocaleString("ko-KR")}원</>}
                  </S.ItemPrice>
                </S.ItemTextWrapper>
              </S.ItemWrapper>
            ))}
        </InfiniteScroll>
        <S.ListWrapper>
          <div>aaaa</div>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMoreSearch}
            hasMore={true}
            useWindow={false}
          >
            {props.isSearch &&
              props.searchData?.fetchUseditems.map((el) => (
                <S.ItemWrapper key={uuidv4}>
                  {el.images?.[0] && (
                    <S.ItemImage
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    />
                  )}
                  {!el.images?.[0] && (
                    <S.ItemImage src={`/images/고앵이.gif`} />
                  )}
                  <S.ItemTextWrapper>
                    <S.ItemName onClick={props.onClickDetail} id={el._id}>
                      {el.name}
                    </S.ItemName>
                    <S.ItemGreyWrapper>
                      <S.ItemRemarks>{el.remarks} •</S.ItemRemarks>
                      <S.ItemCreatedAt>{getDate(el.createdAt)}</S.ItemCreatedAt>
                    </S.ItemGreyWrapper>
                    <S.ItemPrice>{el.price}원</S.ItemPrice>
                  </S.ItemTextWrapper>
                </S.ItemWrapper>
              ))}
          </InfiniteScroll>
        </S.ListWrapper>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
