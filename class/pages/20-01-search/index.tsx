import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
      createdAt
      contents
    }
  }
`;

export default function SearchPage() {
  const [mySearch, setMySearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickSearch = () => {
    refetch({ search: mySearch });
  };
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setMySearch(e.target.value);
  };

  return (
    <>
      <h1>검색 페이지</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={onChangeSearch}
      />{" "}
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>작성자: {el.writer}</span>
          <span style={{ paddingRight: "50px" }}>제목: {el.title}</span>
          <span style={{ paddingRight: "50px" }}>내용: {el.contents}</span>
          <span style={{ paddingRight: "50px" }}>작성날짜: {el.createdAt}</span>
        </div>
      ))}
    </>
  );
}
