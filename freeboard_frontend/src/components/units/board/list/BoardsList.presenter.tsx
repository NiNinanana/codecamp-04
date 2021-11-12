import * as S from "./BoardsList.styles"
import { getDate } from "../../../../commons/libraries/utils"
import { IBoardsListUIProps } from "./BoardsList.types"

export default function BoardsListUI(props: IBoardsListUIProps){

    return(
        <S.Wrapper>
            <S.List>게시글시게</S.List>
            <S.SearchBoards>
                <S.SearchBox type="text" placeholder="검색어를 입력하세요"></S.SearchBox>
                <S.SearchButton onClick={props.search}>검색</S.SearchButton>
                <S.WriteButton onClick={props.write}>글쓰기</S.WriteButton>
            </S.SearchBoards>
            <S.BoardsWrapper>
                <S.BestBoards>
                    <S.Best>
                        베스트 게시글
                    </S.Best>
                    <S.BestContents>
                        {props.data2?.fetchBoardsOfTheBest.map((el:any) => (
                        <S.BestContentsButton id={el._id} onClick={props.bestContents}>
                            <S.BestContentsPop>
                                <S.TitleWriterCreatedAt>
                                    <S.BestTitle>{el.title}</S.BestTitle>
                                    <S.BestWriter>{el.writer}</S.BestWriter>
                                    <S.BestCreatedAt>{getDate(el.createdAt)}</S.BestCreatedAt>
                                </S.TitleWriterCreatedAt>
                                <S.BestLikeCount>👍 {el.likeCount-el.dislikeCount}</S.BestLikeCount>
                            </S.BestContentsPop>
                        </S.BestContentsButton>
                        ))}
                        {/* <S.Row> */}
                            {/* <S.CheckBox><input type="checkbox" /></S.CheckBox> */}
                            {/* <S.Title>제목</S.Title> */}
                            {/* <S.Column>작성자</S.Column> */}
                            {/* <S.Lating>평가</S.Lating> */}
                            {/* <S.Date>작성날짜</S.Date> */}
                            {/* <S.Column>삭제하기</S.Column> */}
                        {/* </S.Row> */}
                        {/* {props.data2?.fetchBoardsOfTheBest.map((el, index) => ( */}
                        {/* <S.Row key={el._id}> */}
                        {/* unique한 키값을 넣어주고 체크박스를 체크한 후 삭제하면 체크박스 체크 해제됨 */}
                        {/* <S.CheckBox><input type="checkbox" /></S.CheckBox> */}
                        {/* <S.Column>{index+1}</S.Column> */}
                        {/* <S.Title>{el.title}</S.Title> */}
                        {/* <S.Column>{el.writer}</S.Column> */}
                        {/* <S.Lating>{el.likeCount-el.dislikeCount}</S.Lating> */}
                        {/* <S.Date>{el.createdAt}</S.Date>  */}
                        {/* el과 props같이 쓰는 법 생각해보자 */}
                        {/* <S.Column> */}
                            {/* <button id={el._id} onClick={props.deleteBest}>삭제하기</button> */}
                        {/* </S.Column> */}
                        {/* </S.Row> */}
                        {/* ))} */}
                    </S.BestContents>
                </S.BestBoards>
                <S.LatestBoards>
                    <S.Latest>
                        {props.isList ? "최근 게시글" : "검색 결과"}
                    </S.Latest>
                    <S.LatestContentsBack>
                        <S.LatestContents>
                            <S.RowA>
                                <S.CheckBox><input type="checkbox" /></S.CheckBox>
                                <S.LatestTitle>제목</S.LatestTitle>
                                {/* <S.Column>작성자</S.Column> */}
                                <S.LatestDate>작성날짜</S.LatestDate>
                                <S.LatestDelete>삭제하기</S.LatestDelete>
                            </S.RowA>
                            {props.isList ? 
                                <div>
                                    {props.data?.fetchBoards.map((el:any) => (
                                    <S.Row key={el._id}>
                                    {/* unique한 키값을 넣어주고 체크박스를 체크한 후 삭제하면 체크박스 체크 해제됨 */}
                                    <S.CheckBox><input type="checkbox" /></S.CheckBox>
                                    {/* <S.Column>{index+1}</S.Column> */}
                                    <S.TitleButton id={el._id} onClick={props.justContents}>
                                        <S.Title>{el.title}</S.Title>
                                    </S.TitleButton>
                                    {/* <S.Column>{el.writer}</S.Column> */}
                                    <S.Date>{getDate(el.createdAt)}</S.Date>
                                    <S.Column>
                                        <S.DeleteButton id={el._id} onClick={props.delete}>삭제</S.DeleteButton>
                                    </S.Column>
                                    </S.Row>
                                    ))}
                                </div>
                                :
                                <div>
                                    {props.data3?.fetchBoards.map((el:any) => (
                                    <S.Row key={el._id}>
                                    {/* unique한 키값을 넣어주고 체크박스를 체크한 후 삭제하면 체크박스 체크 해제됨 */}
                                    <S.CheckBox><input type="checkbox" /></S.CheckBox>
                                    {/* <S.Column>{index+1}</S.Column> */}
                                    <S.TitleButton id={el._id} onClick={props.justContents}>
                                        <S.Title>{el.title}</S.Title>
                                    </S.TitleButton>
                                    {/* <S.Column>{el.writer}</S.Column> */}
                                    <S.Date>{getDate(el.createdAt)}</S.Date>
                                    <S.Column>
                                        <S.DeleteButton id={el._id} onClick={props.delete}>삭제</S.DeleteButton>
                                    </S.Column>
                                    </S.Row>
                                    ))}
                                </div>
                                }
                            
                        </S.LatestContents>
                        <S.PageIndex>
                            <S.PageIndexButton1>이전</S.PageIndexButton1>
                            <S.PageIndexButton>1</S.PageIndexButton>
                            <S.PageIndexButton>2</S.PageIndexButton>
                            <S.PageIndexButton>3</S.PageIndexButton>
                            <S.PageIndexButton>4</S.PageIndexButton>
                            <S.PageIndexButton>5</S.PageIndexButton>
                            <S.PageIndexButton1>다음</S.PageIndexButton1>
                        </S.PageIndex>
                    </S.LatestContentsBack>
                </S.LatestBoards>
            </S.BoardsWrapper>
        </S.Wrapper>
    )
}