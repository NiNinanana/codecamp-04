import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationLastPage() {
  const [startPage, setStartPage] = useState(91);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: startPage,
    },
  });

  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  };
  const onClickNextPage = () => {
    if (lastPage < startPage + 10) return;
    setStartPage((prev) => prev + 10);
  };

  // 1. 마지막 페이지 계산(전체 게시글 갯수)
  // 2. 마지막 페이지 이후로는 못넘어가게
  // 3. 이전페이지는 0보다 작으면 클릭 안되게

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <span
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {" "}
              {startPage + index}{" "}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
