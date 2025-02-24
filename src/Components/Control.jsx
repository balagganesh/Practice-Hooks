import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Control = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="block text-blue-900 font-medium">
        Select an option:
        <Controller
          name="selectedOption"
          control={control}
          defaultValue=""
          rules={{ required: 'Option is required' }}
          render={({ field }) => (
            <>
              <label className="block">
                <input
                  type="radio"
                  value="option1"
                  {...field}
                  checked={field.value === 'option1'}
                />
                Option 1
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="option2"
                  {...field}
                  checked={field.value === 'option2'}
                />
                Option 2
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="option3"
                  {...field}
                  checked={field.value === 'option3'}
                />
                Option 3
              </label>
            </>
          )}
        />
        {errors.selectedOption && (
          <p className="text-red-500 text-sm mt-1">
            {errors.selectedOption.message}
          </p>
        )}
      </div>
      
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default Control;
