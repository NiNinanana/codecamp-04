import { MyInput, MyButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props){
    return(
        <>
        작성자: <MyInput type="text" onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer}/><br />
        {/* 작성자: <MyInput type="text" onChange={props.aaa} defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}/><br /> */}
        제목: <MyInput type="text" onChange={props.bbb} defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""} /><br />
        내용: <MyInput type="text" onChange={props.ccc} defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""} /><br />
        {/* <MyButton onClick={props.isEdit ? props.xxx : props.zzz} qqq={props.qqq}>게시물 {props.isEdit ? "수정" : "등록"}하기</MyButton> */}
        {!props.isEdit && <MyButton onClick={props.zzz} qqq={props.qqq}>게시물 등록하기</MyButton>}
        {props.isEdit &&<MyButton onClick={props.xxx} qqq={props.qqq}>게시물 수정하기</MyButton>}
        </>
    )
}