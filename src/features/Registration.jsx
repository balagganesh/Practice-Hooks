// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch,useSelector } from "react-redux";
// import { Adduser } from "./Registrationslice";

// const Registration = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//     },
//   });

//   const dispatch = useDispatch();

//   const [user,setuser] = useState();
//   const users = useSelector((state) => state.Registration);


//   const onSubmit = (data) => {
//     console.log(data);
//     setuser(data)
//     dispatch(Adduser(data));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="max-w-lg w-full">
//         <h1 className="text-blue-900 font-bold text-2xl mb-6">
//           User Registration
//         </h1>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <label htmlFor="firstname" className="block text-blue-900 font-medium">
//             First Name:
//             <input
//               {...register("firstname", { required: "First name is required" })}
//               type="text"
//               placeholder="Enter first name"
//               id="firstname"
//               name="firstname"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="given-name"
//               aria-invalid={errors.firstname ? "true" : "false"}
//               required
//             />
//             {errors.firstname && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.firstname.message}
//               </p>
//             )}
//           </label>
//           <label htmlFor="lastname" className="block text-blue-900 font-medium">
//             Last Name:
//             <input
//               {...register("lastname", {
//                 required: "Last name is required",
//                 minLength: { value: 1 },
//               })}
//               type="text"
//               placeholder="Enter last name"
//               id="lastname"
//               name="lastname"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="family-name"
//               aria-invalid={errors.lastname ? "true" : "false"}
//               required
//             />
//             {errors.lastname && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.lastname.message}
//               </p>
//             )}
//           </label>
//           <label htmlFor="email" className="block text-blue-900 font-medium">
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
//               id="email"
//               name="email"
//               className="mt-1 p-2 border border-blue-900 rounded w-full"
//               autoComplete="email"
//               aria-invalid={errors.email ? "true" : "false"}
//               required
//             />
//             {errors.email ? (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.email.message}
//               </p>
//             ) : null}
//           </label>
//           <button
//             type="submit"
//             className="bg-blue-900 text-white p-2 rounded w-full sm:w-auto sm:px-4 sm:py-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//       {
//         users.map((user,index)=>(
//             <li key={index}>
//                 {user.firstname} {user.lastname} {user.email}   
//             </li>
//         ))
//       }
//     </div>
//   );
// };

// export default Registration;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { Adduser } from "./Registrationslice";

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
  DateofBirth: yup
  .string()
  .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid Date format (YYYY-MM-DD)")
  .required("Date of Birth is required"),

});

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [user,setuser] = useState();

  const dispatch = useDispatch();

  const users = useSelector((state)=>state.Registration);


  const onSubmit = (data) => {
    console.log(data);
    setuser(data);
    dispatch(Adduser(data));
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
      <pre>{JSON.stringify(user)}</pre>
      {
        users.map((user,index)=>(
            <li key={index}>
                {user.firstname} {user.lastname} {user.email}   
            </li>
        ))
      }
    </div>
  );
};

export default Registration;

