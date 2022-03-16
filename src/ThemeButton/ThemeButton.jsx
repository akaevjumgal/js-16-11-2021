import { Children, useContext } from "react";
import { ThemeContext } from "./Theme";


export default function ThemeButton (){

  const {theme , setTheme} = useContext(ThemeContext)
  

  const styles = {
    light: {
      background: 'orange',
      color: 'black',
    },
    dark: {
      background: 'black',
      color: 'white',
    }
  }

  return (
    <div>
      <button 
      style={styles[theme]}
      onClick={setTheme}
      >
       Mode
      </button>
    </div>
  )
}