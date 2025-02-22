import React from "react";
import { useForm } from "react-hook-form";

const FormState = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitted, submitCount },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
      )}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
        placeholder="Email"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}

      <button type="submit" disabled={!isValid || isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {isSubmitted && (
        <p className="text-green-500">Form submitted successfully!</p>
      )}

      <p>Form is {isDirty ? "dirty" : "pristine"}</p>
      <p>Submitted {submitCount} times</p>
    </form>
  );
};

export default FormState;