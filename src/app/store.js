import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "../feactures/languages/languageSlice"

export const store = configureStore({
  reducer: {
    language: languageReducer
  },
})