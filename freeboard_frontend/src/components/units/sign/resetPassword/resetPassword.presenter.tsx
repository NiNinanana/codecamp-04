import TextField from "@material-ui/core/TextField";

export default function ResetPasswordUI() {
  return (
    <>
      <div>비밀번호 재설정</div>
      <TextField
        id="outlined-required"
        label="새로운 비밀번호"
        variant="outlined"
      />
      <TextField
        id="outlined-required"
        label="새로운 비밀번호 확인"
        variant="outlined"
      />
      <div>asdf</div>
    </>
  );
}
