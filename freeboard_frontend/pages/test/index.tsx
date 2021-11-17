import { Calendar } from "antd";
import { useState } from "react";
import { Modal, Button } from "antd";
import moment from "moment";
import styled from "@emotion/styled";

export default function CalendarTestPage() {
  const [myDate, setMyDate] = useState("");
  // function onPanelChange(value, mode) {
  //   alert(value);
  // }

  let mymydate = "";

  function okCalender(value) {
    alert(value);
    mymydate = value;
    console.log(value);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function dateGo() {
    alert(mymydate);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="site-calendar-demo-card">
          <Calendar
            fullscreen={false}
            // onPanelChange={onPanelChange}
            // onClick={onClickCalender}
            onSelect={okCalender}
          />
        </div>
        mountNode
      </Modal>
      <button onClick={dateGo}>실행</button>
      <div>날짜 : {mymydate}</div>
    </>
  );
}
