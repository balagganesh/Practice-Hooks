import React from "react";
import { useForm } from "react-hook-form";

const Getvalue = () => {
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      quantity: 1, // Default quantity
    },
  });

  const unitPrice = 30; // Price per unit

  const onSubmit = () => {
    const formValues = getValues(); // Get the current form values
    const totalPrice = formValues.quantity * unitPrice; // Calculate total price
    console.log("Form Values:", formValues);
    console.log("Total Price:", totalPrice);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg w-full">
        <h1 className="text-blue-900 font-bold text-2xl mb-6">Shopping Cart</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label htmlFor="quantity" className="block text-blue-900 font-medium">
            Quantity:
            <input
              {...register("quantity", { valueAsNumber: true })}
              type="number"
              placeholder="Enter quantity"
              id="quantity"
              className="mt-1 p-2 border border-blue-900 rounded w-full"
              min="1"
            />
          </label>
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

export default Getvalue;
