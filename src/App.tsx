import { useState } from "react";
import { SimpleForm } from "./forms/SimpleForm";
import { FormWithCustomValidation } from "./forms/FormWithCustomValidation";
import "./App.css";
import { FormWithDate } from "./forms/FormsWithDates";
import { ComplexForm } from "./forms/ComplexForm";
import { TestForm } from "./forms/testForm";
import { FormWithCustomInput } from "./forms/FormWithCustomInput";
import { ComplexFormWithController } from "./forms/ComplexFormWithController";

const components = [
  { name: "SimpleForm", component: SimpleForm },
  { name: "FormWithCustomValidation", component: FormWithCustomValidation },
  { name: "FromWithDates", component: FormWithDate },
  { name: "ComplexForm", component: ComplexForm },
  { name: "TestForm", component: TestForm },
  { name: "FormWithCustomInput", component: FormWithCustomInput },
  { name: "ComplexFormWithController  ", component: ComplexFormWithController },
];

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setCurrentComponentIndex(index);
  };

  const CurrentComponent = components[currentComponentIndex].component;

  return (
    <div style={{ padding: "20px" }}>
      <p>Check console after submitting data</p>
      <div style={{ marginBottom: "20px" }}>
        {components.map((comp, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            style={{ marginRight: "10px" }}
          >
            {comp.name}
          </button>
        ))}
      </div>
      <CurrentComponent />
    </div>
  );
}

export default App;
