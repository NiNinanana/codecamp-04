import { gql, useQuery, useMutation } from "@apollo/client";

// import { YoutubeWrapper } from "../../../styles/boardsNew";

// const LIKE_BOARD = gql`
//     mutation likeBoard($boardId: ID!){
//         likeBoard(boardId: $boardId)
//     }

// `

import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

export default function MutationFreeboardPage() {
  return (
    <>
      <BoardDetail />
    </>
  );
}
