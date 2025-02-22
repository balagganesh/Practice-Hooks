// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const SurveyForm = () => {
//   const { register, handleSubmit, unregister } = useForm();
//   const [showAdditionalFields, setShowAdditionalFields] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const handleToggleFields = (e) => {
//     if (e.target.value === "no") {
//       unregister(["feedback", "rating"]); // Unregister fields when hidden
//       setShowAdditionalFields(false);
//     } else {
//       setShowAdditionalFields(true);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         Are you satisfied with our service?
//         <select onChange={handleToggleFields}>
//           <option value="yes">Yes</option>
//           <option value="no">No</option>
//         </select>
//       </label>

//       {showAdditionalFields && (
//         <>
//           <input {...register("feedback")} placeholder="Your feedback" />
//           <input {...register("rating")} placeholder="Rating (1-5)" />
//         </>
//       )}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SurveyForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SurveyForm = () => {
  const { register, handleSubmit, unregister } = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    unregister(["street", "city"]); // Unregister address fields
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 ? (
        <>
          <input {...register("name")} placeholder="Name" />
          <input {...register("email")} placeholder="Email" />
          <button type="button" onClick={handleNextStep}>
            Next
          </button>
        </>
      ) : null}

      {step === 2 && (
        <>
          <input {...register("street")} placeholder="Street" />
          <input {...register("city")} placeholder="City" />
          <button type="button" onClick={handlePreviousStep}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default SurveyForm;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const SurveyForm = () => {
//   const { register, handleSubmit, unregister } = useForm();
//   const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const handleToggleSection = () => {
//     if (showAdditionalInfo) {
//       unregister(["hobbies", "comments"]); // Unregister fields when section is hidden
//     }
//     setShowAdditionalInfo(!showAdditionalInfo);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("name")} placeholder="Name" />
//       <input {...register("email")} placeholder="Email" />

//       <button type="button" onClick={handleToggleSection}>
//         {showAdditionalInfo ? "Hide Additional Info" : "Show Additional Info"}
//       </button>

//       {showAdditionalInfo && (
//         <>
//           <input {...register("hobbies")} placeholder="Hobbies" />
//           <input {...register("comments")} placeholder="Comments" />
//         </>
//       )}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SurveyForm;