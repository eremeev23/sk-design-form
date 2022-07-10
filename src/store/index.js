import { configureStore } from "@reduxjs/toolkit";
import { jsonsApi } from "./reducers/jsonsApi";
import { userApi } from "./reducers/userApi";
import userReducer from "./reducers/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    [jsonsApi.reducerPath]: jsonsApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonsApi.middleware, userApi.middleware)
})