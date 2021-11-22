import * as S from "./BoardDetail.styles";
import { getDate, youtubeUrl } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { AimOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          주소뜨게 하고 그 주소로 지도 링크 연결하기!
        </a>
      </Menu.Item>
    </Menu>
  );

  const dataTitle = props.dataTitle;
  // const dataTitleLength = dataTitle.length;
  // console.log(dataTitle.length);
  // function onClickTitle() {
  //   if (dataTitleLength > 31) {
  //     console.log("dataTitle");
  //     console.log(dataTitle);
  //     console.log(props.dataTitle);

  //     dataTitle = props.dataTitle;
  //     alert("Asdf");
  //   }
  // }

  // if (dataTitleLength > 31) {
  //   dataTitle = dataTitle.slice(0, 31) + "...";
  // }

  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        {/* <FreeBoard>자유게시판</FreeBoard> */}
        {/* <Title>{data ? data.fetchBoard.title : "잠시만 기다려주세요"}</Title> */}
        <S.Title>{dataTitle}</S.Title>
        <S.WriterWrapper>
          <S.Writer>{props.dataWriter}</S.Writer>
          <S.WriteDate>{getDate(props.create)}</S.WriteDate>
        </S.WriterWrapper>
        <S.Contents>
          <S.ContentsText>
            <S.ContentsWrite>- Contents -</S.ContentsWrite>
            {props.dataContents}
            {/* 리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서[2] 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다.[3][4][5]

리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다. 대규모 또는 복잡한 리액트 애플리케이션 개발에는 보통 라우팅, API통신 등의 기능이 요구되는데 리액트에는 기본적으로 제공되지 않기 때문에 추가 라이브러리를 사용해야 한다.[6][7] */}
          </S.ContentsText>
          <S.ImageWrapper>
            <S.ContentsWrite>- Image -</S.ContentsWrite>
            <S.Image src="../../../images/아이유 딸기달.png" />
          </S.ImageWrapper>
          <S.YoutubeWrapper>
            <S.ContentsWrite>- Video -</S.ContentsWrite>
            {props.fff && (
              <S.Youtube src={youtubeUrl(props.dataYoutube)}></S.Youtube>
            )}
            {!props.fff && (
              <S.Youtube src="../../../videos/아이유 딸기달.mp4"></S.Youtube>
            )}
          </S.YoutubeWrapper>
        </S.Contents>
        <S.LikeWrapper>
          <S.PreviousButton onClick={props.previous}>이전글</S.PreviousButton>
          <S.LikeCountButton onClick={props.likeCount}>
            <S.LikeImg src="../../../images/upArrow.png" />
          </S.LikeCountButton>
          <S.Count>{props.like - props.dislike}</S.Count>
          <S.DislikeCountButton onClick={props.dislikeCount}>
            <S.DislikeImg src="../../../images/downArrow.png" />
          </S.DislikeCountButton>
          <S.NextButton onClick={props.next}>다음글&nbsp;</S.NextButton>
        </S.LikeWrapper>
        <S.RemoteControler>
          <S.List onClick={props.list}>&nbsp;목록</S.List>
          <S.Update onClick={props.update}>수정</S.Update>
          <S.Delete onClick={props.delete}>삭제</S.Delete>
        </S.RemoteControler>
        <S.AddressId>
          <S.Address>
            <Dropdown overlay={menu}>
              <AimOutlined />
            </Dropdown>
          </S.Address>
          <S.ThisAddress>글 아이디 : {props.dataId}</S.ThisAddress>
        </S.AddressId>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
