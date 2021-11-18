import { gql, useQuery } from "@apollo/client";
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

export default function EventBubblingPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page: 1,
      },
    }
  );

  const onClickRow = (event) => {
    console.log(event.currentTarget.id);
  };

  return (
    <>
      <h1>이벤트버블링</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id} id={el._id} onClick={onClickRow}>
            <span>작성자: {el.title}</span>
            <span> 제목: {el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}
