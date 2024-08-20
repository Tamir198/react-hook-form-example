import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  startDate: string;
  endDate: string;
  birthDate: string;
};

export const FormWithDate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const validateStartDate = (value: string) => {
    const date = new Date(value);
    if (!value) return 'Start Date is required';
    if (isNaN(date.getTime())) return 'Invalid date format';
    if (date > new Date()) return 'Start Date cannot be in the future';
    return true;
  };

  const validateEndDate = (value: string) => {
    const date = new Date(value);
    if (!value) return 'End Date is required';
    if (isNaN(date.getTime())) return 'Invalid date format';
    if (date < new Date()) return 'End Date cannot be in the past';
    return true;
  };

  const validateBirthDate = (value: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!value) return 'Birth Date is required';
    if (!regex.test(value)) return 'Date must be in YYYY-MM-DD format';
    return true;
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Form with Multiple Date Validations</h2>

      <input
        type='date'
        placeholder='Start Date'
        {...register('startDate', {
          validate: validateStartDate,
        })}
      />
      {errors.startDate && <p>{errors.startDate.message}</p>}

      <input
        type='date'
        placeholder='End Date'
        {...register('endDate', {
          validate: validateEndDate,
        })}
      />
      {errors.endDate && <p>{errors.endDate.message}</p>}

      <input
        type='text'
        placeholder='Birth Date (YYYY-MM-DD)'
        {...register('birthDate', {
          validate: validateBirthDate,
        })}
      />
      {errors.birthDate && <p>{errors.birthDate.message}</p>}

      <input type='submit' />
    </form>
  );
};
