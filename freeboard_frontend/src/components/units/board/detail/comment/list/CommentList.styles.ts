import styled from "@emotion/styled";

export const Wrapper = styled.div`
  // margin-bottom: 48px;
  padding-bottom: 90px;
`;
export const CommentWrapper = styled.div`
  width: 860px;
  border-top: 1px solid #d4f4fa;
  margin-left: 100px;
  margin-bottom: 9px;
  // padding-bottom: 50px;
  padding-top: 9px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  // border: 1px solid black;
  text-align: center;
  width: 860px;
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
  width: 135px;
`;

export const CommentContents = styled.td`
  width: 630px;
  text-align: left;
  margin-left: 27px;
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
