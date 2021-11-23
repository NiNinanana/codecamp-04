import { Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default function SignUpUI() {
  return (
    <>
      <div>회원가입</div>
      <TextField id="outlined-required" label="이메일" variant="outlined" />
      <TextField
        id="outlined-password-input"
        label="비밀번호"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
    </>
  );
}
