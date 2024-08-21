import React from "react";

type CustomInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CustomInput;
