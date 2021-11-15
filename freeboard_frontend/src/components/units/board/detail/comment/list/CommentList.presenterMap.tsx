import CommentListUIItem from "./CommentList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../../BoardDetail.queries";
import { useRouter } from "next/router";

export default function CommentListUI(props) {
  const router = useRouter();
  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.myId,
      page: 1,
    },
  });

  return (
    <>
      {commentData?.fetchBoardComments.map((el: any) => (
        <CommentListUIItem
          commentData={props.commentData}
          updateComment={props.onClickUpdateComment}
          deleteComment={props.onClickDeleteComment}
          isEdit={props.isEdit}
          key={el._id}
          el={el}
        />
      ))}
    </>
  );
}
