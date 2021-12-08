import Head from "next/head";

export default function PaymentPage() {
  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp68443893");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "페레로로쉐",
        amount: 123,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "",
        // 모바일일 때는 아예 사이트가 넘어가 버리기 때문에 결제를 완료하면 다시 보내줄 url 을 써줘야 한다
        // m_redirect_url: """
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 성공

          console.log(rsp);
          // createPointTransactionOfLoading 뮤테이션 실행(impUid 넘기기)
        } else {
          // 실패
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        결제금액: <input type="number" />
      </div>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
