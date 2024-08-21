import React from "react";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
}) => (
  <div>
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
    {error && <p>{error}</p>}
  </div>
);

export default CustomCheckbox;
