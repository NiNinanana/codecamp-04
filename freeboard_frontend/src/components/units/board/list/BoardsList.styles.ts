import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: yellow;
    width: 1000px;
    margin-left: 30px;
    margin-top: 30px;
`

export const List = styled.div`
    font-size: 40px;
`
export const BoardsWrapper = styled.div`
    width: 920px;
    
    // background-color: blue;
    display: flex;
    justify-content: space-around;
`

export const SearchBoards = styled.div`
    width: 715px;
    display: flex;
    justify-content: space-between;
`

export const WriteButton = styled.button`
    height: 30px;
    font-size: 13px;
    background-color: black;
    color: white;
    :hover{
        text-decoration: underline;
    }
`

export const SearchBox = styled.input`
    width: 600px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid black;
    padding-left: 10px;
`

export const SearchButton = styled.button`
    height: 30px;
    font-size: 13px;
`

export const BestBoards = styled.div`
    // background-color: skyblue;
`

export const Best = styled.div`

`

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
    background-color: #FFEBFE;
`
export const BestContentsButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    :hover {
        color: #DBC000;
        text-decoration: underline;
    }
`
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
`
export const BestTitle = styled.div`
    font-size: 20px;
`

export const BestWriter = styled.div`
    font-size: 15px;
    color: black;
`

export const TitleWriterCreatedAt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 8px;
`

export const BestCreatedAt = styled.div`
    font-size: 12px;
    color: #bdbdbd;
`

export const BestLikeCount = styled.div`
    padding-top: 25px;
    color: black;
`




export const LatestBoards = styled.div`
    // background-color: skyblue;
    height: 340px;
`

export const Latest = styled.div`
    
`

export const LatestContents = styled.table`
    width: 390px;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    // border-width: 1px 0px 1px 0px;
`
export const LatestContentsBack = styled.div`
    height: 340px;
    width: 400px;
    background-color: #BDBDBD;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 10px;
    justify-content: center;
    background-color: #FFEBFE;
`

export const Row = styled.tr`
    display: flex;
    flex-direction: row;
    // border: 1px solid black;
    text-align: center;
    
    
`

export const Column = styled.td`
    width: 20%;
    // border-bottom: 1px solid black;
    font-size: 10px;

    
`
export const CheckBox = styled.td`
    width: 30px;
    // border-bottom: 1px solid black;
`

export const Lating = styled.td`
    width: 50px;
    font-size: 10px;
    // border-bottom: 1px solid black;
`
export const LatestTitle=styled.td`
    // border-bottom: 1px solid black;
    width: 130px;
    font-size: 15px;
`
export const Title = styled.td`
    width: 130px;
    font-size: 12px;
    // border: 1px solid black;
`

export const TitleButton = styled.button`
    background-color: transparent;
    // border-width: 1px 0px 0px 1px;
    border: none;
    width: 130px;
    cursor: pointer;
    :hover {
        color: #DBC000;
        text-decoration: underline;
    };
`

export const LatestDate = styled.td`
    width: 160px;
    // border-bottom: 1px solid black;
    font-size: 15px;
    // padding-top: 3px;
`

export const Date = styled.td`
    width: 160px;
    // border: 0px solid black;
    // border-width: 1px 0px 1px 0px;
    font-size: 10px;
    padding-top: 5px;
`

export const LatestDelete = styled.td`
    width: 20%;
    // border: 1px solid black;
    font-size: 15px;
    // padding-top: 3px;
    border-left: none;
    border-right: none;
`
export const RowA = styled.tr`
    border: 0px solid black;
    border-width: 0px 0px 1px 0px;
    display: flex;
    flex-direction: row;
    text-align: center;
    
    
`

export const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 12px;
    padding-top: 4px;
    cursor: pointer;
    :hover{
        color: #DBC000;
        text-decoration: underline;
    }
`

export const PageIndex = styled.div`
    width: 170px;    
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`

export const PageIndexButton = styled.button`
    background-color: transparent;
    border: none;
    // font-size: 10px;
    cursor: pointer;
    color: grey;
    :hover {
        color: black;
    }
`
    
export const PageIndexButton1 = styled.button`
    background-color: transparent;
    border: none;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;

`