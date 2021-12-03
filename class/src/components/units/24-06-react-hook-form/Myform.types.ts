export interface FormValues {
  myEmail: string;
  myPassword: string;
}

export interface IMyformUIProps {
  handleSubmit: any;
  register: any;
  formState: any;
  onClickLogin: (data: FormValues) => void;
}
