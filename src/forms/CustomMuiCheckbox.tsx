import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CustomMuiCheckboxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CustomMuiCheckbox: React.FC<CustomMuiCheckboxProps> = ({
  label,
  onChange,
  error,
}) => (
  <div>
    <FormControlLabel
      control={<Checkbox onChange={onChange} color="primary" />}
      label={label}
    />
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
);

export default CustomMuiCheckbox;
