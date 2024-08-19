import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  age: number;
  email: string;
  startDate: string;
  endDate: string;
  birthDate: string;
  gender: string;
  agreeToTerms: boolean;
};

export const ComplexForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  // Custom validation functions
  const validateFirstName = (value: string) => {
    if (!value) return "First name is required";
    if (value.length < 2) return "First name must be at least 2 characters";
    return true;
  };

  const validateAge = (value: number) => {
    if (!value) return "Age is required";
    if (isNaN(value)) return "Age must be a number";
    if (value <= 0) return "Age must be a positive number";
    return true;
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Invalid email format";
    return true;
  };

  const validateStartDate = (value: string) => {
    const date = new Date(value);
    if (!value) return "Start Date is required";
    if (isNaN(date.getTime())) return "Invalid date format";
    if (date > new Date()) return "Start Date cannot be in the future";
    return true;
  };

  const validateEndDate = (value: string) => {
    const date = new Date(value);
    if (!value) return "End Date is required";
    if (isNaN(date.getTime())) return "Invalid date format";
    if (date < new Date()) return "End Date cannot be in the past";
    return true;
  };

  const validateBirthDate = (value: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!value) return "Birth Date is required";
    if (!regex.test(value)) return "Date must be in YYYY-MM-DD format";
    return true;
  };

  const validateGender = (value: string) => {
    if (!value) return "Gender is required";
    return true;
  };

  const validateAgreeToTerms = (value: boolean) => {
    if (!value) return "You must agree to the terms";
    return true;
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>
      <h2>Comprehensive Form with Custom Validations</h2>
      
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName", {
          validate: validateFirstName,
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input
        type="number"
        placeholder="Age"
        {...register("age", {
          validate: validateAge,
        })}
      />
      {errors.age && <p>{errors.age.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          validate: validateEmail,
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="date"
        placeholder="Start Date"
        {...register("startDate", {
          validate: validateStartDate,
        })}
      />
      {errors.startDate && <p>{errors.startDate.message}</p>}

      <input
        type="date"
        placeholder="End Date"
        {...register("endDate", {
          validate: validateEndDate,
        })}
      />
      {errors.endDate && <p>{errors.endDate.message}</p>}

      <input
        type="text"
        placeholder="Birth Date (YYYY-MM-DD)"
        {...register("birthDate", {
          validate: validateBirthDate,
        })}
      />
      {errors.birthDate && <p>{errors.birthDate.message}</p>}

      <select {...register("gender", {
        validate: validateGender,
      })}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <p>{errors.gender.message}</p>}

      <label>
        <input
          type="checkbox"
          {...register("agreeToTerms", {
            validate: validateAgreeToTerms,
          })}
        />
        Agree to Terms
      </label>
      {errors.agreeToTerms && <p>{errors.agreeToTerms.message}</p>}

      <input type="submit" />
    </form>
  );
};
