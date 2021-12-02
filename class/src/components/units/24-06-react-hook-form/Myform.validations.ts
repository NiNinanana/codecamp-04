import * as yup from "yup";

export const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일을 입력해주세요."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 4자리 이상입니다.")
    .max(15, "비밀번호는 15자리 이하입니다.")
    .required("비밀번호를 입력해주세요."),
});
