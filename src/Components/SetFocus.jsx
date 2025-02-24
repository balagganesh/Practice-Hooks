import React from "react";
import { useForm } from "react-hook-form";

const SetFocus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, touchedFields },
    getFieldState,
    watch,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchallstate = watch();

  function handlecheckfieldstate() {
    const fieldStatus = {};
    for (const fieldname in watchallstate) {
      fieldStatus[fieldname] = getFieldState(fieldname);
    }
    console.log("Field Status:", fieldStatus); // Log the field status
  }

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
            First Name:
            <input
              {...register("firstname", { required: "First name is required" })}
              type="text"
              placeholder="Enter first name"
              id="firstname"
              name="firstname"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              autoComplete="given-name"
              aria-invalid={errors.firstname ? "true" : "false"}
              required
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstname.message}
              </p>
            )}
          </label>
          <label htmlFor="lastname" className="block text-blue-900 font-medium">
            Last Name:
            <input
              {...register("lastname", {
                required: "Last name is required",
                minLength: { value: 1 },
              })}
              type="text"
              placeholder="Enter last name"
              id="lastname"
              name="lastname"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              autoComplete="family-name"
              aria-invalid={errors.lastname ? "true" : "false"}
              required
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastname.message}
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
              name="email"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              required
            />
            {errors.email ? (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            ) : null}
          </label>
          <button
            onClick={handlecheckfieldstate}
            type="button" // Change type to "button" to prevent form submission
            className="bg-blue-900 text-white p-2 rounded w-full sm:w-auto sm:px-4 sm:py-2"
          >
            Get Field State
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white p-2 rounded w-full sm:w-auto sm:px-4 sm:py-2 ml-4"
          >
            Submit
          </button>
          
        </form>
        <pre>{JSON.stringify(watchallstate)}</pre>
      </div>
    </div>
    
  );
};

export default SetFocus;