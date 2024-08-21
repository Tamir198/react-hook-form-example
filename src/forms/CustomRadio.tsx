import React from "react";

interface CustomRadioProps {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  options,
  value,
  onChange,
  error,
}) => (
  <fieldset>
    <legend>Select an Option</legend>
    {options.map((option) => (
      <label key={option.value}>
        <input
          type="radio"
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
        />
        {option.label}
      </label>
    ))}
    {error && <p>{error}</p>}
  </fieldset>
);

export default CustomRadio;
