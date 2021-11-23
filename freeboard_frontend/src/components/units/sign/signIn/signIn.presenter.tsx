import { Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import * as S from "./signIn.styles";
import { ISignInUIProps } from "./signIn.types";

export default function SignInUI(props: ISignInUIProps) {
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <div>ID 로그인</div>
        <Input
          style={{ width: "300px", height: "40px" }}
          placeholder="이메일"
          onChange={props.myIdChange}
          prefix={<UserOutlined />}
        />
        <Input.Password
          style={{ width: "300px", height: "40px" }}
          placeholder="비밀번호"
          onChange={props.myPasswordChange}
          prefix={<LockOutlined />}
        />
        <Checkbox>로그인 상태 유지</Checkbox>
        <S.ErrorText>{props.errorText}</S.ErrorText>
        <S.LoginButton onClick={props.loginButton}>로그인</S.LoginButton>
      </S.LoginWrapper>
      <S.LinkWrapper>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit">비밀번호 찾기</Link>
          <Link color="inherit">아이디 찾기</Link>
          <Link color="inherit" onClick={props.signUp}>
            회원가입
          </Link>
        </Breadcrumbs>
      </S.LinkWrapper>
    </S.Wrapper>
  );
}
