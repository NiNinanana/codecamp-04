import styled from "@emotion/styled";

export const Wrapper = styled.div`
  // margin-bottom: 48px;
  padding-bottom: 100px;
`;
export const CommentWrapper = styled.div`
  width: 960px;
  border-top: 1px solid #d4f4fa;
  margin-left: 48px;
  margin-bottom: 10px;
  // padding-bottom: 50px;
  padding-top: 10px;
`;

export const Row = styled.div`
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
  padding-top: 3px;
  cursor: pointer;
  :hover {
    color: #dbc000;
    text-decoration: underline;
  }
`;

export const CommentWriter = styled.td`
  // border-right: 1px solid black;
  width: 150px;
`;

export const CommentContents = styled.td`
  width: 700px;
  text-align: left;
  margin-left: 30px;
`;

export const CommentUpdate = styled.td`
  width: 120px;
  // border-bottom: 1px solid black;
  font-size: 12px;
  padding-top: 3px;
  cursor: pointer;
  :hover {
    color: #dbc000;
    text-decoration: underline;
  }
`;
