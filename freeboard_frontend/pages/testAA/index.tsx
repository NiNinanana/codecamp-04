import { Modal } from "antd";
import styled from "@emotion/styled";

const OneWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
`;
const MyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

const ClassDiv = styled.div`
  font-size: 30px;
`;
const ClassDivA = styled.div`
  font-size: 20px;
  color: grey;
`;

const AmountDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
`;

const CountDiv = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const Jumun = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const ABCWrapper = styled.div`
  display: flex;
`;

const MyMyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ABB = styled.div`
  display: flex;
`;

const AAA = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function TestAAPage() {
  return (
    <>
      <Modal visible={true} title="결제하기">
        <MyWrapper>
          <StyleWrapper>
            <OneWrapper>
              <Jumun>주문정보</Jumun>
              <ABCWrapper>
                <Image src="/images/고앵이.gif" />
                <div>
                  <ClassDiv>관악 체험 마카롱</ClassDiv>
                  <ClassDivA>2021-12-19 1600~1800</ClassDivA>
                  <ClassDivA>수강신청 인원: 2명</ClassDivA>
                </div>
              </ABCWrapper>
            </OneWrapper>
            <MyMyWrapper>
              <div>신청자 정보</div>
              <div>이름</div>
              <input type="text" />
              <div>휴대폰 번호</div>
              <input type="number" />
              <div>이메일 주소</div>
              <ABB>
                <input type="text" />
                <select>
                  <option>naver.com</option>
                  <option>gmail.com</option>
                  <option>hanmail.net</option>
                  <option>kakao.com</option>
                </select>
              </ABB>
            </MyMyWrapper>
          </StyleWrapper>
          <AAA>
            <AmountDiv>결제금액</AmountDiv>
            <CountDiv>78,000원</CountDiv>
          </AAA>
        </MyWrapper>
      </Modal>
    </>
  );
}
