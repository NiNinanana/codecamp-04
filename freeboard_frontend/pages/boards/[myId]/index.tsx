import { gql, useQuery, useMutation } from "@apollo/client";

// import { YoutubeWrapper } from "../../../styles/boardsNew";

// const LIKE_BOARD = gql`
//     mutation likeBoard($boardId: ID!){
//         likeBoard(boardId: $boardId)
//     }

// `

import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentList from "../../../src/components/units/board/detail/comment/list/CommentList.container";
import CommentWrite from "../../../src/components/units/board/detail/comment/write/CommentWrite.container";

export default function MutationFreeboardPage() {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
