import { QuestionOutlined,SmileOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"

const MyIcon = styled(SmileOutlined)`
    font-size: 100px;
    color: yellow;
    background-color: skyblue;
`

export default function LibraryIconPage(){
    
    return (
    <>
    <QuestionOutlined />
    <MyIcon />
    </>
    )
}