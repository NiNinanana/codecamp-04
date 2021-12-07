import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* margin-left: 100px; */
  margin-top: 48px;
  margin-bottom: 80px;
  width: 860px;
  height: 1150px;
`;

export const ContentsWrapper = styled.div`
  width: 860px;
  height: 1180px;
  border: 1px solid black;
  padding: 4px;
  background-color: #ffe3e3;
  font-family: Helvetica;
  box-shadow: 5px 5px 20px grey;
  margin-bottom: 45px;
`;

export const FreeBoard = styled.div`
  font-size: 27px;
  font-weight: bold;
  font-family: Gowun Batang;
  // text-align: center;
  // border-bottom: 1px solid blue;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: 넥슨Lv1고딕 OTF;
  background-color: #c9ccd5;
  color: #5d5d5d;
  padding-left: 7px;
  padding-top: 7px;
  padding-bottom: 7px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  border-top: 1px solid #878787;
  border-bottom: 1px solid #878787;
  background-color: #e4d8dc;
  padding-left: 7px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const Writer = styled.div`
  font-size: 22px;
  color: grey;
  border-right: 1px solid #6c6c6c;
  padding-right: 8px;
`;

export const WriteDate = styled.div`
  font-size: 22px;
  color: grey;
  padding-left: 7px;
  padding-top: 3px;
`;

export const Contents = styled.div`
  width: 792px;
  height: 900px;
  margin-left: 29px;
  margin-top: 22px;
  padding: 15px;
  padding-top: 22px;
  border-radius: 15px;
  border: 1px solid #c8aaaa;
  font-size: 15px;
  background-color: white;
  font-family: Helvetica;
`;

export const ContentsText = styled.div`
  width: 763px;
  height: 324px;
  border: 1px dotted #ffb2d9;
  border-radius: 7px;
  margin-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ContentsWrite = styled.div`
  color: grey;
  padding-bottom: 7px;
  padding-top: 7px;
`;

export const ImageWrapper = styled.div`
  border: 1px dotted #ffb2d9;
  border-radius: 7px;
  margin-bottom: 7px;
  height: 223px;
  padding-left: 15px;
  width: 763px;
`;
export const Image = styled.img`
  width: 312px;
  height: 175px;
  background-color: yellow;
`;
export const YoutubeWrapper = styled.div`
  border: 1px dotted #ffb2d9;
  border-radius: 7px;
  height: 290px;
  width: 763px;
  padding-left: 15px;
`;

export const Youtube = styled.iframe`
  width: 427px;
  height: 241px;
  background-color: green;
`;

export const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-right: 305px;
  margin-left: 305px;
  border-radius: 15px;
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
  width: 29px;
  height: 29px;
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
  width: 29px;
  height: 29px;
`;

export const Count = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 4px;
`;

export const ThisAddress = styled.div`
  font-size: 11px;
  text-align: right;
  /* margin-right: 20px; */
  background-color: white;
  /* margin-left: 620px; */
  border-radius: 7px;
  margin-top: 15px;
  /* padding-right: 7px; */
`;

export const PreviousButton = styled.button`
  background-color: white;
  border: none;
  // border-right: 1px solid #909090;
  border-radius: 7px 0px 0px 7px;
  cursor: pointer;
  width: 83px;
  height: 40px;
  font-size: 14px;
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
  width: 83px;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
  border-radius: 0px 7px 7px 0px;
`;

export const RemoteControler = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 29px;
  padding-top: 7px;
`;

export const List = styled.button`
  background-color: white;
  border: none;
  width: 51px;
  height: 36px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
  border-radius: 7px 0px 0px 7px;
`;
export const Update = styled.button`
  background-color: white;
  border: none;
  width: 51px;
  height: 36px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
`;
export const Delete = styled.button`
  background-color: white;
  border: none;
  border-radius: 0px 7px 7px 0px;
  width: 51px;
  height: 36px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    background-color: yellow;
  }
`;

export const CommentWrapper = styled.table`
  width: 864px;
  border-top: 1px solid #d4f4fa;
`;

export const Row = styled.tr`
  display: flex;
  flex-direction: row;
  // border: 1px solid black;
  text-align: center;
  width: 864px;
  border-bottom: 1px solid #c0c0c0;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const CommentDelete = styled.td`
  width: 108px;
  // border-bottom: 1px solid black;
  font-size: 9px;
`;

export const Date = styled.td`
  width: 144px;
  // border: 0px solid black;
  // border-width: 1px 0px 1px 0px;
  font-size: 9px;
  padding-top: 5px;
`;
export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 11px;
  padding-top: 3px;
  cursor: pointer;
  :hover {
    color: #dbc000;
    text-decoration: underline;
  }
`;

export const CommentWriter = styled.td`
  // border-right: 1px solid black;
  width: 90px;
`;

export const CommentContents = styled.td`
  width: 630px;
  text-align: left;
  margin-left: 27px;
`;

export const CommentCreateWrapper = styled.div`\
  display:flex;
  justify-content: space-between;
  padding-bottom: 18px;
  width: 860px;
  
`;

export const CommentCreateWriterInput = styled.input`
  width: 135px;
  height: 27px;
  margin-bottom: 9px;
  padding-left: 5px;
`;
export const CommentCreatePasswordInput = styled.input`
  width: 135px;
  height: 27px;
  padding-left: 5px;
`;

export const CommentCreateContentsInput = styled.input`
  width: 720px;
  height: 90px;
  margin-bottom: 9px;
  padding-bottom: 54px;
  padding-left: 9px;
`;
export const CommentCreateButton = styled.button`
  width: 63px;
  height: 27px;
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

export const CommentUpdate = styled.td`
  width: 108px;
  // border-bottom: 1px solid black;
  font-size: 11px;
  padding-top: 3px;
  cursor: pointer;
  :hover {
    color: #dbc000;
    text-decoration: underline;
  }
`;

export const AddressId = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const Address = styled.div`
  margin-top: 12px;
  margin-right: 10px;
`;
