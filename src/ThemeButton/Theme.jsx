import { createContext } from "react"

const initialState = {
  theme : 'light',
  setTheme: () => null
}

export const ThemeContext = createContext(initialState)