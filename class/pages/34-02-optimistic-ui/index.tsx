import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: "61babc03717be5002baa75aa",
      },
    }
  );

  const onClickOptimisticUI = async () => {
    //   좋아요 증가 mutation
    const result = await likeBoard({
      variables: {
        boardId: "61babc03717be5002baa75aa",
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "61babc03717be5002baa75aa",
      //       },
      //     },
      //   ], 리페치 될때까지 기다려야한다
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      // 가짜로 한 라이크 카운트를 옵티미스틱으로
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61babc03717be5002baa75aa" },
          data: {
            fetchBoard: {
              _id: "61babc03717be5002baa75aa",
              __typename: "Board",
              // 아이디와 타입네임은 필수, 기존거랑 똑같이 매칭, 아폴로의 룰
              likeCount: data?.likeBoard,
              // optimistic 과 진짜 해서 총 2번 업데이트
            },
          },
        });
      },
      // 진짜로 한 걸로 수정
    });
  };
  return (
    <>
      <div>좋아요 개수: {data?.fetchBoard?.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기!!</button>
    </>
  );
}
