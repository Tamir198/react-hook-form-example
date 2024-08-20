import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  firstName: string;
  optionalField: number;
  ta: string;
};

export const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Using only the library basic stuff</h2>
      <input
        type='text'
        placeholder='First name'
        {...register('firstName', {
          required: 'First name is required',
          maxLength: {
            value: 80,
            message: 'First name cannot exceed 80 characters',
          },
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input
        type='number'
        placeholder='Optional field'
        {...register('optionalField', {
          required: 'This is must have',
          min: { value: 40, message: 'Value must be at least 40' },
          max: { value: 50, message: 'Value cannot exceed 50' },
        })}
      />
      {errors.optionalField && <p>{errors.optionalField.message}</p>}

      <input
        type='text'
        placeholder='Ta'
        {...register('ta', { required: 'Ta is required' })}
      />
      {errors.ta && <p>{errors.ta.message}</p>}

      <input type='submit' />
    </form>
  );
};
