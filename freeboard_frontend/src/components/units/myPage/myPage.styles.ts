import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
`;
export const MyName = styled.div`
  font-size: 30px;
`;

export const MyAmount = styled.div`
  font-size: 20px;
`;

export const ItemsIBoughtList = styled.div`
  overflow: auto;
  height: 500px;
`;

export const ItemsISoldList = styled.div`
  overflow: auto;
  height: 500px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  margin-bottom: 10px;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ItemName = styled.div``;

export const ItemPrice = styled.div`
  font-weight: bold;
`;

export const ItemSoldAt = styled.div``;

export const ItemSmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemIsSoldOut = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  background-color: ${(props) => (props.isSoldOut ? "lightgrey" : "grey")};
  color: ${(props) => (props.isSoldOut ? "black" : "white")};
  padding: 3px;
  margin-bottom: 5px;
  margin-right: 5px;
  width: 60px;
  height: 30px;
  text-align: center;
`;
