import CommentWriteUI from "./CommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "../../BoardDetail.queries";
import CommentListUI from "../list/CommentList.presenter";
import CommentListUIItem from "../list/CommentList.presenter";

export default function CommentWrite(props) {
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function onChangeCommentWriter(event: any) {
    setWriter(event.target.value);
  }
  function onChangeCommentContents(event: any) {
    setContents(event.target.value);
  }
  function onChangeCommentPassword(event: any) {
    setPassword(event.target.value);
  }

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  async function onClickCreateComment() {
    if (!writer || !password || !contents) {
      alert("다시 확인해주세요.");
      //   return;
    }
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: 1,
          },
          boardId: router.query.myId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.myId },
          },
        ],
      });
      alert("등록되었습니다.");
      location.reload(); // 페이지 리로드
    } catch (error) {
      alert(error.message);
    }
    alert("Asdf");
  }

  async function onClickUpdateComment() {
    // if (!writer || !password || !contents) {
    //   alert("다시 확인해주세요.");
    //   //   return;
    // }
    // try {
    //   await updateBoardComment({
    //     variables: {
    //       updateBoardCommentInput: {
    //         contents: contents,
    //         rating: 1,
    //       },
    //       password: password,
    //       boardCommentId: "11",
    //     },
    //     refetchQueries: [
    //       {
    //         query: FETCH_BOARD_COMMENTS,
    //         variables: { boardId: router.query.myId },
    //       },
    //     ],
    //   });
    //   alert("등록되었습니다.");
    //   props.location.reload(); // 페이지 리로드
    // } catch (error) {
    //   alert(error.message);
    // }
    alert("asdfasdfdsafsdfads");
  }

  return (
    <>
      <CommentWriteUI
        createComment={onClickCreateComment}
        commentWriter={onChangeCommentWriter}
        commentContents={onChangeCommentContents}
        commentPassword={onChangeCommentPassword}
        updateComment={onClickUpdateComment}
        isEdit={props.isEdit}
        test={"test"}
        writer={writer}
        password={password}
        contents={contents}
      />
      {/* <CommentListUIItem
        createComment={onClickCreateComment}
        commentWriter={onChangeCommentWriter}
        commentContents={onChangeCommentContents}
        commentPassword={onChangeCommentPassword}
        updateComment={onClickUpdateComment}
        isEdit={props.isEdit}
        test={"test"}
      /> */}
    </>
  );
}
