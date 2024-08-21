import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  optionalField: number;
  ta: string;
};

export const FormWithCustomInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="First name"
        {...register("firstName", {
          required: "First name is required",
          maxLength: {
            value: 80,
            message: "First name cannot exceed 80 characters",
          },
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input type="submit" />
    </form>
  );
};
