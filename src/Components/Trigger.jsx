import React from "react";
import { useForm } from "react-hook-form";

const Trigger = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // Destructure trigger from useForm
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // Function to validate specific fields
  const validateFields = async () => {
    const result = await trigger(["firstName", "lastName"]); // Trigger validation for specific fields
    if (result) {
      console.log("All fields are valid!");
    } else {
      console.log("Some fields are invalid.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg w-full">
        <h1 className="text-blue-900 font-bold text-2xl mb-6">
          User Registration
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label
            htmlFor="firstName"
            className="block text-blue-900 font-medium"
          >
            First Name:
            <input
              {...register("firstName", { required: "First name is required" })}
              type="text"
              placeholder="Enter first name"
              id="firstName"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </label>

          <label htmlFor="lastName" className="block text-blue-900 font-medium">
            Last Name:
            <input
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              placeholder="Enter last name"
              id="lastName"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </label>

          <label htmlFor="email" className="block text-blue-900 font-medium">
            Email:
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter email"
              id="email"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </label>

          <button
            type="button" // Prevent form submission
            onClick={validateFields} // Trigger validation for specific fields
            className="bg-blue-900 text-white p-2 rounded w-full sm:w-auto sm:px-4 sm:py-2"
          >
            Validate Fields
          </button>

          <button
            type="submit"
            className="bg-blue-900 text-white p-2 rounded w-full sm:w-auto sm:px-4 sm:py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Trigger;