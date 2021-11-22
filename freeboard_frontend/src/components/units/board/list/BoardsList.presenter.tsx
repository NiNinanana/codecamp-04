import * as S from "./BoardsList.styles";
import { IBoardsListUIProps } from "./BoardsList.types";
import { Input, DatePicker } from "antd";
import BoardsListBestUIItem from "./BoardsListBestList.presenter.map";
import BoardsListLastUI from "./BoardsListLastList.presenter.map";
import BoardsListSearchUI from "./BoardsListSearchList.presenter";

export default function BoardsListUI(props: IBoardsListUIProps) {
  function enterkey() {
    if (window.event.keyCode === 13) {
      props.onSearch();
    }
  }

  const { Search } = Input;

  return (
    <S.Wrapper>
      {/* <S.List onClick={props.main}>게시글시게</S.List> */}
      <S.SearchBoards>
        <S.DateSearch>
          <Input.Group compact>
            {/* <Input style={{ width: "30%" }} defaultValue="input content" /> */}
            <DatePicker.RangePicker
              style={{ width: "250px" }}
              onChange={props.onChangeDate}
            />
          </Input.Group>
          <Search
            placeholder="제목을 입력하세요"
            onSearch={props.onSearch}
            onChange={props.onChangeSearchBox}
            // enterButton
            style={{ width: "700px" }}
            ref={props.inputRef}
          />
          {/* <S.SearchBox
            type="text"
            placeholder="제목을 입력하세요"
            onChange={props.searchBox}
            onKeyUp={enterkey}
          ></S.SearchBox> */}
        </S.DateSearch>
        {/* <S.SearchButton onClick={props.search}>검색</S.SearchButton> */}
      </S.SearchBoards>
      <S.BoardsWrapper>
        <S.BestBoards>
          <S.Best>베스트 게시글</S.Best>
          <S.BestContents>
            {props.data2?.fetchBoardsOfTheBest.map((el: any) => (
              <BoardsListBestUIItem
                el={el}
                key={el._id}
                bestContents={props.bestContents}
              />
            ))}
          </S.BestContents>
        </S.BestBoards>
        <S.LatestBoards>
          <S.Latest>{props.isList ? "최근 게시글" : "검색 결과"}</S.Latest>
          <S.LatestContentsBack>
            <S.LatestContents>
              <S.RowA>
                <S.CheckBox>
                  <input type="checkbox" />
                </S.CheckBox>
                <S.LatestTitle>제목</S.LatestTitle>
                {/* <S.Column>작성자</S.Column> */}
                <S.LatestDate>작성날짜</S.LatestDate>
                <S.LatestDelete>삭제하기</S.LatestDelete>
              </S.RowA>
              {props.isList ? (
                <div>
                  {props.data?.fetchBoards.map((el: any) => (
                    <BoardsListLastUI
                      el={el}
                      key={el._id}
                      justContents={props.justContents}
                      delete={props.delete}
                    />
                  ))}
                </div>
              ) : (
                <div>
                  {props.data3?.fetchBoards.map((el: any) => (
                    <BoardsListSearchUI
                      el={el}
                      key={el._id}
                      justContents={props.justContents}
                      delete={props.delete}
                    />
                  ))}
                </div>
              )}
            </S.LatestContents>
            <S.PageIndex>
              <S.PageIndexButton1 onClick={props.prevButton}>
                이전
              </S.PageIndexButton1>
              {new Array(5).fill(1).map(
                (el, index) =>
                  props.startPage + index <= props.lastPage && (
                    <S.PageIndexButton
                      onClick={props.list}
                      id={String(props.startPage + index)}
                    >
                      {props.startPage + index}
                    </S.PageIndexButton>
                  )
              )}
              <S.PageIndexButton1 onClick={props.nextButton}>
                다음
              </S.PageIndexButton1>
            </S.PageIndex>
          </S.LatestContentsBack>
        </S.LatestBoards>
      </S.BoardsWrapper>
      <S.WriteButton onClick={props.write}>글쓰기</S.WriteButton>
    </S.Wrapper>
  );
}
