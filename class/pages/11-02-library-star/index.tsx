import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(0);
  // const desc = ["매우나쁨", "나쁨", "보통", "좋음", "매우좋음"];

  function handleChange(value: number) {
    setValue(value);
  }

  return (
    <>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={value} />
        {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
      </span>
    </>
  );
}
