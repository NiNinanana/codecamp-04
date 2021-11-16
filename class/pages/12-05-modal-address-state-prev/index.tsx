import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  // const showModal = () => {
  //   setIsOpen((prev) => !prev); // 원래 false인데 그것의 역을 가져온다
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>주소 검색</Button>
      {isOpen && (
        <Modal
          // title=""
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* <div>주소 : {myAddress}</div> */}
      <div>
        주소 : <input type="text" defaultValue={myAddress} readOnly />
      </div>
      <div>우편번호 : {myZonecode}</div>
    </>
  );
}
