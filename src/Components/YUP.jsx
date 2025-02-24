// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";

// const YUP = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     getValues,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//       phonenumber: "",
//       password: "",
//       confirmPassword: "",
//       age: "",
//       gender: "",
//       interest: [],
//       dateOfBirth: "",
//     },
//   });

//   const [value, setvalue] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phonenumber: "",
//     password: "",
//     confirmPassword: "",
//     age: "",
//     gender: "",
//     interest: [],
//     dateOfBirth: "",
//   });

//   const onSubmit = (data) => {
//     setvalue(data);
//     console.log(data);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-blue-900 font-bold text-2xl mb-6">
//           User Registration
//         </h1>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <label className="block text-blue-900 font-medium">
//             First Name:
//             <input
//               {...register("firstname", { required: "First name is required" })}
//               type="text"
//               placeholder="Enter first name"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="given-name"
//             />
//             {errors.firstname && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.firstname.message}
//               </p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Last Name:
//             <input
//               {...register("lastname", { required: "Last name is required" })}
//               type="text"
//               placeholder="Enter last name"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="family-name"
//             />
//             {errors.lastname && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.lastname.message}
//               </p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Email:
//             <input
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                   message: "Invalid email address",
//                 },
//               })}
//               type="email"
//               placeholder="Enter email"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Phone Number:
//             <input
//               {...register("phonenumber", {
//                 required: "Phone number is required",
//               })}
//               type="text"
//               placeholder="Enter Phone number"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="tel"
//             />
//             {errors.phonenumber && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.phonenumber.message}
//               </p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Password:
//             <input
//               {...register("password", { required: "Password is required" })}
//               type="password"
//               placeholder="Enter Password"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="new-password"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Confirm Password:
//             <input
//               {...register("confirmPassword", {
//                 required: "Confirm Password is required",
//                 validate: (value) =>
//                   value === getValues("password") || "Password did not match",
//               })}
//               type="password"
//               placeholder="Confirm Password"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="new-password"
//             />
//             {errors.confirmPassword ? (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.confirmPassword.message}
//               </p>
//             ) : null}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Age:
//             <input
//               {...register("age", { required: "Age is required" })}
//               type="number"
//               placeholder="Enter Age"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//             />
//             {errors.age && (
//               <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Date of Birth:
//             <input
//               {...register("dateOfBirth", {
//                 required: "Date of birth is required",
//               })}
//               type="date"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//             />
//             {errors.dateOfBirth && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.dateOfBirth.message}
//               </p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Gender:
//             <Controller
//               name="gender"
//               control={control}
//               rules={{ required: "Gender is required" }}
//               render={({ field }) => (
//                 <div className="flex space-x-4 mt-2">
//                   <label>
//                     <input type="radio" {...field} value="male" />
//                     Male
//                   </label>
//                   <label>
//                     <input type="radio" {...field} value="female" />
//                     Female
//                   </label>
//                   <label>
//                     <input type="radio" {...field} value="others" />
//                     Others
//                   </label>
//                 </div>
//               )}
//             />
//             {errors.gender && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.gender.message}
//               </p>
//             )}
//           </label>

//           <label className="block text-blue-900 font-medium">
//             Interests:
//             <Controller
//               name="interest"
//               control={control}
//               render={({ field }) => (
//                 <div className="flex flex-col space-y-2 mt-2">
//                   <label>
//                     <input
//                       type="checkbox"
//                       value="coding"
//                       checked={field.value.includes("coding")}
//                       onChange={(e) => {
//                         const value = e.target.value;
//                         field.onChange(
//                           field.value.includes(value)
//                             ? field.value.filter((v) => v !== value)
//                             : [...field.value, value]
//                         );
//                       }}
//                     />
//                     Coding
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       value="music"
//                       checked={field.value.includes("music")}
//                       onChange={(e) => {
//                         const value = e.target.value;
//                         field.onChange(
//                           field.value.includes(value)
//                             ? field.value.filter((v) => v !== value)
//                             : [...field.value, value]
//                         );
//                       }}
//                     />
//                     Music
//                   </label>
//                 </div>
//               )}
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-blue-900 text-white p-2 rounded w-full"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default YUP;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phonenumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  Age: yup.number().positive().integer().required("Age is required"),
  Gender: yup
    .string()
    .oneOf(["Male", "Female", "Other"], "Select a valid gender")
    .required("Gender is required"),
  Interest: yup.array().min(1, "Select at least one interest"),
  DateofBirth: yup.date().required("Date of Birth is required"),
});

const YUP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
          <label className="block text-blue-900 font-medium">
            First Name:
            <input
              {...register("firstname")}
              type="text"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstname.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Last Name:
            <input
              {...register("lastname")}
              type="text"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastname.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Email:
            <input
              {...register("email")}
              type="email"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Phone Number:
            <input
              {...register("phonenumber")}
              type="text"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.phonenumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phonenumber.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Password:
            <input
              {...register("password")}
              type="password"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Confirm Password:
            <input
              {...register("confirmPassword")}
              type="password"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Age:
            <input
              {...register("Age")}
              type="number"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.Age && (
              <p className="text-red-500 text-sm mt-1">{errors.Age.message}</p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Gender:
            <select
              {...register("Gender")}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.Gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Gender.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Interests:
            <select
              {...register("Interest")}
              multiple
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Reading">Reading</option>
              <option value="Gaming">Gaming</option>
            </select>
            {errors.Interest && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Interest.message}
              </p>
            )}
          </label>

          <label className="block text-blue-900 font-medium">
            Date of Birth:
            <input
              {...register("DateofBirth")}
              type="date"
              className="mt-1 p-2 border rounded w-full"
            />
            {errors.DateofBirth && (
              <p className="text-red-500 text-sm mt-1">
                {errors.DateofBirth.message}
              </p>
            )}
          </label>

          <button
            type="submit"
            className="bg-blue-900 text-white p-2 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default YUP;
