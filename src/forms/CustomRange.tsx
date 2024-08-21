import React from "react";

interface CustomRangeProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  error?: string;
}

const CustomRange: React.FC<CustomRangeProps> = ({
  value,
  onChange,
  min,
  max,
  error,
}) => (
  <div>
    <input type="range" min={min} max={max} value={value} onChange={onChange} />
    <p>Range value: {value}</p>
    {error && <p>{error}</p>}
  </div>
);

export default CustomRange;
