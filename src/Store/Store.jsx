// import { configureStore } from "@reduxjs/toolkit";
// import { registrationReducer } from "../features/Registrationslice.jsx";

// export const store = configureStore({
//     reducer:{
//         Registration : registrationReducer,
//     }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { registrationReducer } from "../features/Registrationslice";


export const store = configureStore({
    reducer : {
        Registration : registrationReducer,
    }
})

export default store;