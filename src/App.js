
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Photo from './component/Photo'
import Albom from './component/Albom';
import Mouse from './RenderProps/Mouse';
import ThemeButton from './ThemeButton/ThemeButton';
import { ThemeContext } from './ThemeButton/Theme';
import { useState } from 'react';



function App() {
  const [theme, setTheme] = useState('light')
 

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <ThemeContext.Provider  value={{ theme, setTheme: onChangeTheme }}>
        <ThemeButton/>
      </ThemeContext.Provider>
      <Routes>
        <Route path='/' element={<Albom />} />
        <Route path='/:albumId' element={<Photo />} />
        <Route path='/mouse' element={<Mouse />} />
      </Routes>
    </div>
  );
}

export default App;
