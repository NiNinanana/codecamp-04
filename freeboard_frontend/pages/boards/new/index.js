import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ErrorText, SettingInputWrapper, FootButton, HeadTitle, PhoWrapper, PhotoWrapper, YoutubeWrapper, AddressWrapperTwo, ContentWrapper, TitleWrapper, AddressWrapper, UserWrapper, NameWrapper, PasswordWrapper, BodyWrapper, UploadButton, SmallText,SmallInput, MediumInput, BigInput, Address, SearchButton, YoutubeInput, PhotoButton, SettingInput } from "../../../styles/boardsNew";

export default function BoardsNew() {

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [errorWriter, setErrorWriter] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorTitle, setErrorTitle] = useState("")
    const [errorContent, setErrorContent] = useState("")


    function first(event){
        setWriter(event.target.value)
    }
    function second(event){
        setPassword(event.target.value)
    }
    function third(event){
        setTitle(event.target.value)
    }
    function fourth(event){
        setContent(event.target.value)
    }

    function upload(){
        console.log(writer)
        console.log(password)
        console.log(title)
        console.log(content)

        if(writer.length < 1){
            setErrorWriter("작성자를 입력하세요.")
        }
        if(password.length < 1){
            setErrorPassword("비밀번호를 입력하세요.")
        }
        if(title.length < 1){
            setErrorTitle("제목을 입력하세요.")
        }
        if(content.length < 1){
            setErrorContent("내용을 입력하세요.")
        }
    }

    return (
        <>
            <HeadTitle>게시물 등록</HeadTitle>
            <BodyWrapper>
                <UserWrapper>
                    <NameWrapper>
                        <SmallText>작성자</SmallText>
                        <SmallInput type="text" placeholder="이름을 적어주세요." onChange={first} />
                        <ErrorText>{errorWriter}</ErrorText>
                    </NameWrapper>
                    <PasswordWrapper>
                        <SmallText>비밀번호</SmallText>
                        <SmallInput type="password" placeholder="비밀번호를 입력해주세요." onChange={second} />
                        <ErrorText>{errorPassword}</ErrorText>
                    </PasswordWrapper>
                </UserWrapper>
                <TitleWrapper>
                    <SmallText>제목</SmallText>
                    <MediumInput type="text" placeholder="제목을 작성해주세요." onChange={third} />
                    <ErrorText>{errorTitle}</ErrorText>
                </TitleWrapper>
                <ContentWrapper>
                    <SmallText>내용</SmallText>
                    <BigInput type="text" placeholder="내용을 작성해주세요." onChange={fourth} />
                    <ErrorText>{errorContent}</ErrorText>
                </ContentWrapper>
                <div>
                    <SmallText>주소</SmallText>
                    <AddressWrapper>
                        <Address type="text" placeholder="07250" />
                        <SearchButton>우편번호 검색</SearchButton>
                    </AddressWrapper>
                    <MediumInput type="text" />
                    <AddressWrapperTwo>
                        <MediumInput type="text" />
                    </AddressWrapperTwo>
                </div>
                <YoutubeWrapper>
                    <SmallText>유튜브</SmallText>
                    <YoutubeInput type="text" placeholder="링크를 복사해주세요." />
                </YoutubeWrapper>
                <PhotoWrapper>
                    <SmallText>사진 첨부</SmallText>
                    <PhoWrapper>
                        <PhotoButton></PhotoButton>
                        <PhotoButton></PhotoButton>
                        <PhotoButton></PhotoButton>
                    </PhoWrapper>
                </PhotoWrapper>
                <div>
                    <SmallText>메인 설정</SmallText>
                    <SettingInputWrapper>
                        <SettingInput type="radio" name="setting" />유튜브
                        <SettingInput type="radio" name="setting" />사진
                    </SettingInputWrapper>
                </div>
            </BodyWrapper>
            <FootButton>
                <UploadButton onClick={upload} >등록하기</UploadButton>
            </FootButton>

        </>
    )
}