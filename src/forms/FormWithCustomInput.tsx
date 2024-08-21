import { useForm, Controller, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";

type FormValues = {
  firstName: string;
  optionalField: number;
  ta: string;
};

export const FormWithCustomInput = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Using Custom Input with Controller</h2>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{
          required: "First name is required",
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            placeholder="First name"
            error={errors.firstName?.message}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};
