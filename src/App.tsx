import { useState } from 'react';
import { SimpleForm } from './forms/SimpleForm';
import { FormWithCustomValidation } from './forms/FormWithCustomValidation';
import './App.css';
import { FormWithDate } from './forms/FormsWithDates';

const components = [
  { name: 'SimpleForm', component: SimpleForm },
  { name: 'FormWithCustomValidation', component: FormWithCustomValidation },
  { name: 'FromWithDates', component: FormWithDate },
];

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setCurrentComponentIndex(index);
  };

  const CurrentComponent = components[currentComponentIndex].component;

  return (
    <div style={{ padding: '20px' }}>
      <p>Check console after submitting data</p>
      <div style={{ marginBottom: '20px' }}>
        {components.map((comp, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            style={{ marginRight: '10px' }}
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
