import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import Dompurify from "dompurify";
import { red } from "@material-ui/core/colors";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      youtubeUrl
      images
    }
  }
`;
export default function Aaa() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );
  return (
    <>
      작성자: <span style={{ color: "red" }}>{data?.fetchBoard.writer}</span>
      <br />
      제목:{" "}
      {process.browser ? (
        <span style={{ color: "green" }}>{data?.fetchBoard.title}</span>
      ) : (
        <span style={{ color: "green" }} />
      )}
      <br />
      {/* 내용: <span>{data?.fetchBoard.contents}</span> */}
      내용: <span style={{ color: "blue" }}> 반갑습니다</span>
      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      ) : (
        <div />
      )}
    </>
  );
}
