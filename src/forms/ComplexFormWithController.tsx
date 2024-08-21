import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import CustomSelect from "./CustomSelect";
import CustomRange from "./CustomRange";
import CustomRadio from "./CustomRadio";
import CustomMuiCheckbox from "./CustomMuiCheckbox";

type FormValues = {
  firstName: string;
  agreeToTerms: boolean;
  age: number;
  email: string;
  startDate: string;
  endDate: string;
  birthDate: string;
  gender: string;
  range: number;
  color: string;
  radioOption: string;
};

export const ComplexFormWithController = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [rangeValue, setRangeValue] = useState<number>(50);
  const [colorValue, setColorValue] = useState<string>("#000000");

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Comprehensive Form with Controller</h2>

      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            if (!value) return "First name is required";
            if (value.length < 2)
              return "First name must be at least 2 characters";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            placeholder="First Name"
            type="text"
            error={errors.firstName?.message}
          />
        )}
      />

      <Controller
        name="age"
        control={control}
        rules={{
          validate: (value) => {
            if (!value) return "Age is required";
            if (isNaN(value)) return "Age must be a number";
            if (value <= 0) return "Age must be a positive number";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            placeholder="Age"
            type="number"
            error={errors.age?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) return "Email is required";
            if (!emailRegex.test(value)) return "Invalid email format";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            placeholder="Email"
            type="email"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="startDate"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            const date = new Date(value);
            if (!value) return "Start Date is required";
            if (isNaN(date.getTime())) return "Invalid date format";
            if (date > new Date()) return "Start Date cannot be in the future";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            placeholder="Start Date"
            type="date"
            error={errors.startDate?.message}
          />
        )}
      />

      <Controller
        name="endDate"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            const date = new Date(value);
            if (!value) return "End Date is required";
            if (isNaN(date.getTime())) return "Invalid date format";
            if (date < new Date()) return "End Date cannot be in the past";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            placeholder="End Date"
            type="date"
            error={errors.endDate?.message}
          />
        )}
      />

      <Controller
        name="birthDate"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            if (!value) return "Birth Date is required";
            if (!regex.test(value)) return "Date must be in YYYY-MM-DD format";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomInput
            {...field}
            placeholder="Birth Date (YYYY-MM-DD)"
            type="text"
            error={errors.birthDate?.message}
          />
        )}
      />

      <Controller
        name="gender"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            if (!value) return "Gender is required";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomSelect
            {...field}
            options={[
              { label: "Select Gender", value: "" },
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            error={errors.gender?.message}
          />
        )}
      />

      <Controller
        name="agreeToTerms"
        control={control}
        defaultValue={false}
        rules={{
          validate: (value) => {
            if (!value) return "You must agree to the terms and conditions";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomCheckbox
            checked={false}
            {...field}
            label="Agree to Terms"
            error={errors.agreeToTerms?.message}
          />
        )}
      />

      <Controller
        name="range"
        control={control}
        defaultValue={rangeValue}
        rules={{
          validate: (value) => {
            if (value < 0 || value > 100)
              return "Value must be between 0 and 100";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomRange
            {...field}
            min={0}
            max={100}
            error={errors.range?.message}
            onChange={(e) => {
              setRangeValue(Number(e.target.value));
              field.onChange(e);
            }}
          />
        )}
      />

      <Controller
        name="color"
        control={control}
        defaultValue={colorValue}
        render={({ field }) => (
          <CustomInput
            {...field}
            type="color"
            error={errors.color?.message}
            onChange={(e) => {
              setColorValue(e.target.value);
              field.onChange(e);
            }}
          />
        )}
      />

      <Controller
        name="radioOption"
        control={control}
        defaultValue=""
        rules={{
          validate: (value) => {
            if (!value) return "Select an option";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomRadio
            {...field}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
            error={errors.radioOption?.message}
          />
        )}
      />

      <Controller
        name="agreeToTerms"
        control={control}
        rules={{
          validate: (value) => {
            if (!value) return "You must agree to the terms and conditions";
            return true;
          },
        }}
        render={({ field }) => (
          <CustomMuiCheckbox
            {...field}
            label="Agree to Terms"
            error={errors.agreeToTerms?.message}
          />
        )}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
