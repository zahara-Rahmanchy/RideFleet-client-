import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const RideForms = ({children, onSubmit}: TFormProps) => {
  console.log("children: ", children);
  const methods = useForm();
  const {handleSubmit} = methods;
  const Submit: SubmitHandler<FieldValues> = data => {
    console.log(data);
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(Submit)}>{children}</form>
    </FormProvider>
  );
};

export default RideForms;
