import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  optionalField: number;
  ta: string;
};

export const FormWithCustomValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  // Custom validation functions
  
  const validateFirstName = (value: string) => {
    if (!value.trim()) return "First name is required";
    if (value.length > 80) return "First name cannot exceed 80 characters";
    return true;
  };

  const validateOptionalField = (value: number) => {
    if (value < 40) return "Value must be at least 40";
    if (value > 50) return "Value cannot exceed 50";
    return true;
  };

  const validateTaField = (value: string) => {
    if (!value.trim()) return "Ta is required";
    return true;
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>
        <h2>Custom validation function</h2>
      <input
        type="text"
        placeholder="First name"
        {...register("firstName", {
          validate: validateFirstName,
            
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <input
        type="number"
        placeholder="Optional field"
        {...register("optionalField", {
          validate: validateOptionalField,
        })}
      />
      {errors.optionalField && <p>{errors.optionalField.message}</p>}
      <input
        type="text"
        placeholder="Ta"
        {...register("ta", {
          validate: validateTaField,
        })}
      />
      {errors.ta && <p>{errors.ta.message}</p>}
      <input type="submit" />
    </form>
  );
};
