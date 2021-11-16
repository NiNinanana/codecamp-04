import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleComplete = (data: any) => {
    console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>주소 검색</Button>
      {isOpen && (
        <Modal
          // title=""
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
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
