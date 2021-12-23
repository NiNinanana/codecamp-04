import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  padding-right: 30px;
  margin-right: 30px;
  margin-top: 50px;
`;

export const SideButton1 = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.whatView === 1 && "greenyellow"};
  :hover {
    cursor: pointer;
    color: greenyellow;
  }
  margin-bottom: 3px;
`;
export const SideButton2 = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.whatView === 2 && "greenyellow"};
  :hover {
    cursor: pointer;
    color: greenyellow;
  }
  margin-bottom: 3px;
`;
export const SideButton3 = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.whatView === 3 && "greenyellow"};
  :hover {
    cursor: pointer;
    color: greenyellow;
  }
  margin-bottom: 3px;
`;

export const BuyingWrapper = styled.div`
  /* overflow: auto; */
  width: 300px;
`;

export const SellingWrapper = styled.div`
  overflow: auto;
  width: 300px;
  height: 500px;
`;

export const LoadingWrapper = styled.div`
  overflow: auto;
  width: 300px;
  height: 500px;
`;

export const SmallWrapper = styled.div`
  /* display: flex; */
  overflow: auto;
  /* height: 500px; */
`;

export const InnerWrapper = styled.div`
  display: flex;
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

export const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;
