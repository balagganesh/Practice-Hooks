import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';

const Controller = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="example"
        control={control}
        defaultValue=""
        render={({ field }) => <Input {...field} placeholder="Example" />}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default Controller;
