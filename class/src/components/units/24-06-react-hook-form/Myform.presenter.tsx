import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/01/Input01";
import { IMyformUIProps } from "./Myform.types";

export default function MyformUI(props: IMyformUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      {/* 이메일: <input type="text" {...props.register("myEmail")} /> */}
      이메일: <Input01 type="text" register={props.register("myEmail")} />
      <br />
      <div>{props.formState.errors.myEmail?.message}</div>
      {/* 비밀번호: <input type="password" {...props.register("myPassword")} /> */}
      비밀번호:{" "}
      <Input01 type="password" register={props.register("myPassword")} />
      <br />
      <div>{props.formState.errors.myPassword?.message}</div>
      {/* <MyButton isValid={props.formState.isValid}>로그인하기</MyButton> */}
      <Button01
        type="submit"
        name="로그인하기"
        isValid={props.formState.isValid}
      />
      {/* button 타입 : submit(default), reset(인풋안에 있는 것들을 리셋), button(버튼의 함수만 실행) */}
      {/* <button onClick={onClickMove}>목록으로</button> */}
      {/* 위 버튼을 클릭하면 onClickMove함수도 실행되지만 submit이 디폴트이기에 로그인도 같이 되어버린다.
        따라서 type="button"을 추가하여 버튼만 되게 해야한다. */}
    </form>
  );
}
