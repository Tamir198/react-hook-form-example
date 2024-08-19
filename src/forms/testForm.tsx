import { useForm } from "react-hook-form";

export const TestForm = () => {
  type FormState = {
  name: string;
};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const onSubmit = (data:FormState) => {console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>}
      
      <input type="submit" />
    </form>
  );
};
