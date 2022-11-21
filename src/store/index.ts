import { combineReducers, configureStore } from "@reduxjs/toolkit"
import appSlice from "./redusers/appSlice";

const rootReducer = combineReducers({
  appSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
