import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
      contents
    }
  }
`;

export default function SearchPaginationDebouncePage() {
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  // const onClickSearch = () => {
  //   refetch({ search: mySearch, page: 1 });
  //   setMyKeyword(mySearch);
  // };
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // refetch({ search: e.target.value });
    // setMySearch(e.target.value);
    getDebounce(e.target.value);
  };
  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.target instanceof Element)
      refetch({ search: myKeyword, page: Number(e.target.id) });
  };

  return (
    <>
      <h1>검색 페이지</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={onChangeSearch}
      />{" "}
      <button>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>작성자: {el.writer}</span>
          <span style={{ paddingRight: "50px" }}>제목: {el.title}</span>
          <span style={{ paddingRight: "50px" }}>내용: {el.contents}</span>
          <span style={{ paddingRight: "50px" }}>작성날짜: {el.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
