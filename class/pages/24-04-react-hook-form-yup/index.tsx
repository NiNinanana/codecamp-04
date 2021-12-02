import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const schema = yup.object().shape({
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

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myEmail")} />
      <br />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="password" {...register("myPassword")} />
      <br />
      <div>{formState.errors.myPassword?.message}</div>
      <button>로그인하기</button>
    </form>
  );
}
