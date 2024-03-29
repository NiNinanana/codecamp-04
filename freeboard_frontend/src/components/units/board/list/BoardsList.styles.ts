import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff2f2;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
  font-family: 넥슨Lv1고딕 OTF;
  color: #5d5d5d;
  border: 1px dotted black;
  padding-bottom: 100px;
  width: 860px;
  padding-top: 40px;
`;

export const List = styled.div`
  font-size: 40px;
  cursor: pointer;
`;
export const BoardsWrapper = styled.div`
  width: 850px;
  padding-top: 10px;
  /* padding-right: 5px;
  padding-left: 5px; */

  // background-color: blue;
  display: flex;
  justify-content: space-around;
`;

export const SearchBoards = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

export const DateSearch = styled.div``;

export const WriteButton = styled.button`
  width: 56px;
  height: 32px;
  font-size: 14px;
  color: black;
  margin-top: 20px;
  margin-left: 750px;
  border-radius: 5px;
  border: none;
  background-color: #c9ccd5;
  :hover {
    text-decoration: underline;
  }
`;

export const SearchBox = styled.input`
  width: 600px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid black;
  padding-left: 10px;
`;

export const SearchButton = styled.button`
  height: 30px;
  font-size: 13px;
  margin-top: 50px;
`;

export const BestBoards = styled.div`
  // background-color: skyblue;
`;

export const Best = styled.div``;

export const BestContents = styled.table`
  width: 400px;
  height: 340px;
  // table-layout: fixed;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffe3e3;
`;
export const BestContentsButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: #dbc000;
    text-decoration: underline;
  }
`;
export const BestContentsPop = styled.div`
  width: 350px;
  height: 70px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 25px;
`;
export const BestTitle = styled.div`
  font-size: 17px;
`;

export const BestWriter = styled.div`
  font-size: 12px;
  // color: black;
`;

export const TitleWriterCreatedAt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8px;
`;

export const BestCreatedAt = styled.div`
  font-size: 10px;
  color: #bdbdbd;
`;

export const BestLikeCount = styled.div`
  padding-top: 25px;
  // color: black;
  font-size: 15px;
`;

export const LatestBoards = styled.div`
  // background-color: skyblue;
  height: 340px;
`;

export const Latest = styled.div``;

export const LatestContents = styled.table`
  width: 360px;
  border: none;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  // border-width: 1px 0px 1px 0px;
`;
export const LatestContentsBack = styled.div`
  height: 340px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  justify-content: center;
  background-color: #ffe3e3;
`;

export const Row = styled.tr`
  display: flex;
  flex-direction: row;
  // border: 1px solid black;
  text-align: center;
`;

export const Column = styled.td`
  width: 60px;
  // border-bottom: 1px solid black;
  font-size: 10px;
`;
export const CheckBox = styled.td`
  width: 30px;
  // border-bottom: 1px solid black;
`;

export const Lating = styled.td`
  width: 50px;
  font-size: 10px;
  // border-bottom: 1px solid black;
`;
export const LatestTitle = styled.td`
  // border-bottom: 1px solid black;
  width: 130px;
  font-size: 13px;
`;
export const Title = styled.td`
  width: 130px;
  font-size: 10px;
  // border: 1px solid black;
`;

export const TitleButton = styled.button`
  background-color: transparent;
  // border-width: 1px 0px 0px 1px;
  border: none;
  width: 130px;
  cursor: pointer;
  :hover {
    color: #dbc000;
    text-decoration: underline;
  }
`;

export const LatestDate = styled.td`
  width: 160px;
  // border-bottom: 1px solid black;
  font-size: 13px;
  // padding-top: 3px;
`;

export const Date = styled.td`
  width: 160px;
  // border: 0px solid black;
  // border-width: 1px 0px 1px 0px;
  font-size: 10px;
  padding-top: 5px;
`;

export const LatestDelete = styled.td`
  width: 60px;
  // border: 1px solid black;
  font-size: 13px;
  // padding-top: 3px;
  border-left: none;
  border-right: none;
`;
export const RowA = styled.tr`
  border: 0px solid black;
  border-width: 0px 0px 1px 0px;
  display: flex;
  flex-direction: row;
  text-align: center;
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

export const PageIndex = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const PageIndexButton = styled.button`
  background-color: transparent;
  border: none;
  // font-size: 10px;
  cursor: pointer;
  color: grey;
  :hover {
    color: black;
    text-decoration: underline;
  }
`;

export const PageIndexButton1 = styled.button`
  background-color: transparent;
  border: none;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
`;
