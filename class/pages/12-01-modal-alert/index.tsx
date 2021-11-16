import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSuccess() {
    Modal.success({
      content: "성공👍",
    });
  }

  function onClickFail() {
    Modal.error({
      content: "실패😢",
    });
  }

  return (
    <>
      <button onClick={onClickSuccess}>
        알림창 나타나기!!!!!(성공했을 때 메시지)
      </button>
      <button onClick={onClickFail}>
        알림창 나타나기!!!(실패했을 때 메시지)
      </button>
    </>
  );
}
