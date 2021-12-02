import MyformUI from "./Myform.presenter";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useForm } from "react-hook-form";
import { FormValues } from "./Myform.types";
import { schema } from "./Myform.validations";

export default function Myform() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    console.log(data);
  }
  return (
    <MyformUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
