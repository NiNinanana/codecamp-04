import TextField from "@material-ui/core/TextField";
import * as S from "./signUp.styles";
import { ISignUpUIProps } from "./signUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <S.Wrapper>
      <S.WrapperSignUp>
        <div>회원가입</div>
        <TextField
          id="outlined-required"
          label="이름"
          variant="outlined"
          onChange={props.myNameChange}
        />
        <TextField
          id="outlined-required"
          label="이메일"
          variant="outlined"
          onChange={props.myEmailChange}
        />
        <TextField
          id="outlined-password-input"
          label="비밀번호"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={props.myPasswordChange}
        />
        <TextField
          id="outlined-password-input"
          label="확인"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={props.checkMyPasswordChange}
        />
        <S.ErrorText>{props.errorText}</S.ErrorText>
        <S.RegisterButton onClick={props.register}>회원가입</S.RegisterButton>
      </S.WrapperSignUp>
    </S.Wrapper>
  );
}
