import React from "react";
import { useForm } from "react-hook-form";

const UseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstname: "", 
      age: "",
      newsletter: false,
    },
  });

  const newsletterSubscribed = watch("newsletter",false);
  const emailwatch = watch("email");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg w-full">
        <h1 className="text-blue-900 font-bold text-2xl mb-6">
          User Registration
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label
            htmlFor="firstname"
            className="block text-blue-900 font-medium"
          >
            First Name :
            <input
              {...register("firstname", { required: "First name is required" })}
              type="text"
              placeholder="Enter first name"
              id="firstname"
              name="firstname"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              autoComplete="given-name"
              required
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstname.message}
              </p>
            )}
          </label>
          <label htmlFor="age" className="block text-blue-900 font-medium">
            Age :
            <input
              {...register("age", {
                required: "Age is required",
                valueAsNumber: true,
                validate: (value) => !isNaN(value) || "Age must be a number",
              })}
              type="number"
              placeholder="Enter your age"
              id="age"
              name="age"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              autoComplete="off"
              required
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
            )}
          </label>
          <label
            htmlFor="newsletter"
            className="block text-blue-900 font-medium"
          >
            Subscribe to Newsletter :
            <input
              {...register("newsletter")}
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className="mt-1 p-2 border border-blue-900 rounded"
            />
            {errors.newsletter && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newsletter.message}
              </p>
            )}
          </label>
          {newsletterSubscribed && (
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
                placeholder="Enter your email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-blue-900 rounded w-full"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </label>
          )}
          <button
            type="submit"
            className="bg-blue-900 text-white p-2 rounded w-full sm:w-auto sm:px-4 sm:py-2"
          >
            Submit
          </button>
        </form>
        <div className="mt-6">
          <h2>Watch Email Fields:</h2>
          <h1>{emailwatch}</h1>
        </div>
      </div>
    </div>
  );
};

export default UseForm;
