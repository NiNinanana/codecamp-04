import { useEffect, useState } from "react";
import { database } from "../_app";

export default function ChattingPage() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setName(prompt("이름을 입력하세요"));
  }, []);

  return (
    <>
      <div>asdf</div>
    </>
  );
}
