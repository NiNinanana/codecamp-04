import {
    LoginInput,
    SmallText,
    DeleteButton,
    MenuBar,
    MenuButton,
    KakaoLoginButton,
    LoginButton,
    Title,
    RoadIcon,
    All,
    Wrapper,
    HeadWrapper,
    KakaoIcon,
    EmailWrapper,
    PasswordWrapper,
    SeparateBar
} from "../../../styles/login"

export default function Login() {

    return (
        <All>
            <Wrapper>
                <HeadWrapper>
                    <RoadIcon src="../../../images/roadicon.png" />
                    <Title>잇츠로드</Title>
                </HeadWrapper>
                <EmailWrapper>
                    <LoginInput type="text" placeholder="이메일을 입력하세요." />
                    <DeleteButton src="../../../images/deleteicon.png" />
                </EmailWrapper>
                    <SmallText></SmallText>
                <PasswordWrapper>
                    <LoginInput type="password" placeholder="비밀번호를 입력하세요." />
                    <DeleteButton src="../../../images/deleteicon.png" />
                </PasswordWrapper>
                    <SmallText></SmallText>
                <LoginButton>로그인</LoginButton>
                <MenuBar>
                    <MenuButton>이메일 찾기</MenuButton>
                    <SeparateBar></SeparateBar>
                    <MenuButton>비밀번호 찾기</MenuButton>
                    <SeparateBar></SeparateBar>
                    <MenuButton>회원가입 찾기</MenuButton>
                </MenuBar>
                <KakaoLoginButton>
                    <KakaoIcon src="../../../images/kakaoicon.png" />
                    <div>
                        카카오톡으로 로그인
                    </div>
                </KakaoLoginButton>
            </Wrapper>
        </All>
    )

}