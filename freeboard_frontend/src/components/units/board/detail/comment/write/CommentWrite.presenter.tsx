import * as S from "./CommentWrite.styles";
import { Rate } from "antd";
import { useState, ChangeEvent } from "react";
import {
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
} from "../../BoardDetail.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ICommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(0);
  const router = useRouter();
  // const { data } = useQuery(FETCH_BOARD_COMMENTS, {
  //   variables: {
  //     boardId: router.query.myId,
  //   },
  // });

  const desc = ["1/5", "2/5", "3/5", "4/5", "5/5"];
  function handleChange(value: number) {
    setValue(value);
  }
  function onChangeCommentWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangeCommentContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  function onChangeCommentPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  console.log(value);
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
            rating: value,
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
      if (error instanceof Error) alert(error.message);
    }
  }

  async function onClickUpdateComment() {
    // if (!writer || !password || !contents) {
    //   alert("다시 확인해주세요.");
    //   //   return;
    // }
    const myVariables = {
      updateBoardCommentInput: { rating: 1 },
      password: password,
      boardCommentId: props.el?._id,
    };
    try {
      if (contents !== "")
        myVariables.updateBoardCommentInput.contents = contents;
      await updateBoardComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.myId, page: 1 },
          },
        ],
      });
      alert("수정되었습니다.");
      // location.reload(); // 페이지 리로드
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  return (
    <>
      <S.CommentCreateWrapper>
        <S.CommentCreateFirstWrapper>
          <S.CommentCreateWriterInput
            type="text"
            placeholder="작성자"
            onChange={onChangeCommentWriter}
            defaultValue={props.el?.writer}
          ></S.CommentCreateWriterInput>
          <S.CommentCreatePasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={onChangeCommentPassword}
          ></S.CommentCreatePasswordInput>
          <S.CommentCreateRating>
            <Rate tooltips={desc} onChange={handleChange} value={value} />
            {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
          </S.CommentCreateRating>
        </S.CommentCreateFirstWrapper>
        <S.CommentCreateSecondWrapper>
          <S.CommentCreateContentsInput
            type="text"
            placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 제재를 받을 수 있습니다."
            onChange={onChangeCommentContents}
            defaultValue={props.el?.contents}
          ></S.CommentCreateContentsInput>
          {/* {props.isEdit || (
            <S.CommentCreateButton onClick={props.createComment}>
              등록하기
            </S.CommentCreateButton>
          )}
          {props.isEdit && (
            <S.CommentCreateButton onClick={props.updateComment}>
              수정하기
            </S.CommentCreateButton>
          )} */}
          <S.CommentCreateButton
            onClick={props.isEdit ? onClickUpdateComment : onClickCreateComment}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.CommentCreateButton>
        </S.CommentCreateSecondWrapper>
      </S.CommentCreateWrapper>
    </>
  );
}
