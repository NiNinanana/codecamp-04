import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-left: 48px;
  margin-top: 48px;
  margin-bottom: 48px;
  width: 960px;
`;

export const ContentsWrapper = styled.div`
  width: 960px;
  height: 1280px;
  border: 1px solid black;
  padding: 4px;
  background-color: #ffebfe;
  font-family: Helvetica;
  box-shadow: 5px 5px 20px grey;
  margin-bottom: 50px;
`;

export const FreeBoard = styled.div`
  font-size: 29px;
  font-weight: bold;
  font-family: Gowun Batang;
  // text-align: center;
  // border-bottom: 1px solid blue;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: 넥슨Lv1고딕 OTF;
  background-color: #ffff6c;
  color: black;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  border-top: 1px solid #878787;
  border-bottom: 1px solid #878787;
  background-color: #d4f4fa;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
export const Writer = styled.div`
  font-size: 25px;
  color: grey;
  border-right: 1px solid #6c6c6c;
  padding-right: 8px;
`;

export const WriteDate = styled.div`
  font-size: 24px;
  color: grey;
  padding-left: 8px;
  padding-top: 3px;
`;

export const Contents = styled.div`
  width: 880px;
  height: 1000px;
  margin-left: 32px;
  margin-top: 24px;
  padding: 16px;
  padding-top: 24px;
  border-radius: 16px;
  border: 1px solid #c8aaaa;
  font-size: 16px;
  background-color: white;
  font-family: Helvetica;
`;

export const ContentsText = styled.div`
  width: 848px;
  height: 360px;
  border: 1px dotted #ffb2d9;
  border-radius: 8px;
  margin-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ContentsWrite = styled.div`
  color: grey;
  padding-bottom: 8px;
  padding-top: 8px;
`;

export const ImageWrapper = styled.div`
  border: 1px dotted #ffb2d9;
  border-radius: 8px;
  margin-bottom: 8px;
  height: 247px;
  padding-left: 16px;
  width: 848px;
`;
export const Image = styled.img`
  width: 346px;
  height: 195px;
  background-color: yellow;
`;
export const YoutubeWrapper = styled.div`
  border: 1px dotted #ffb2d9;
  border-radius: 8px;
  height: 320px;
  width: 848px;
  padding-left: 16px;
`;

export const Youtube = styled.iframe`
  width: 474px;
  height: 267px;
  background-color: green;
`;

export const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-right: 344px;
  margin-left: 344px;
  border-radius: 16px;
  background-color: white;
`;

export const LikeCountButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    background-color: yellow;
  }
`;

export const LikeImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const DislikeCountButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    background-color: yellow;
  }
`;

export const DislikeImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const Count = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 4px;
`;

export const ThisAddress = styled.div`
  font-size: 12px;
  text-align: right;
  margin-right: 32px;
  background-color: white;
  margin-left: 688px;
  border-radius: 8px;
  margin-top: 16px;
  padding-right: 8px;
`;

export const PreviousButton = styled.button`
  background-color: white;
  border: none;
  // border-right: 1px solid #909090;
  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
  width: 80px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
`;

export const NextButton = styled.button`
  background-color: white;
  border: none;
  // border-right: 1px solid black;
  cursor: pointer;
  width: 80px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
  border-radius: 0px 8px 8px 0px;
`;

export const RemoteControler = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 32px;
  padding-top: 8px;
`;

export const List = styled.button`
  background-color: white;
  border: none;
  width: 56px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
  border-radius: 8px 0px 0px 8px;
`;
export const Update = styled.button`
  background-color: white;
  border: none;
  width: 56px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
`;
export const Delete = styled.button`
  background-color: white;
  border: none;
  border-radius: 0px 8px 8px 0px;
  width: 56px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
`;

export const CommentWrapper = styled.table`
  width: 960px;
  border-top: 1px solid #d4f4fa;
`;

export const Row = styled.tr`
  display: flex;
  flex-direction: row;
  // border: 1px solid black;
  text-align: center;
  width: 960px;
  border-bottom: 1px solid #c0c0c0;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const CommentDelete = styled.td`
  width: 120px;
  // border-bottom: 1px solid black;
  font-size: 10px;
`;

export const Date = styled.td`
  width: 160px;
  // border: 0px solid black;
  // border-width: 1px 0px 1px 0px;
  font-size: 10px;
  padding-top: 5px;
`;
export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 12px;
  padding-top: 4px;
  cursor: pointer;
  :hover {
    color: #dbc000;
    text-decoration: underline;
  }
`;

export const CommentWriter = styled.td`
  // border-right: 1px solid black;
  width: 100px;
`;

export const CommentContents = styled.td`
  width: 700px;
  text-align: left;
  margin-left: 30px;
`;

export const CommentCreateWrapper = styled.div`\
  display:flex;
  justify-content: space-between;
  padding-bottom: 20px;
  
`;

export const CommentCreateWriterInput = styled.input`
  width: 150px;
  height: 30px;
  margin-bottom: 10px;
  padding-left: 5px;
`;
export const CommentCreatePasswordInput = styled.input`
  width: 150px;
  height: 30px;
  padding-left: 5px;
`;

export const CommentCreateContentsInput = styled.input`
  width: 800px;
  height: 100px;
  margin-bottom: 10px;
  padding-bottom: 60px;
  padding-left: 10px;
`;
export const CommentCreateButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  background-color: #ffebfe;
`;
export const CommentCreateFirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentCreateSecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
