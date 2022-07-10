import { configureStore } from "@reduxjs/toolkit";
import { jsonsApi } from "./reducers/jsonsApi";
import userReducer from "./reducers/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    [jsonsApi.reducerPath]: jsonsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonsApi.middleware)
})