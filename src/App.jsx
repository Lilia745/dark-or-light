import { createContext } from 'react';
import './App.css';
import Component from './Components/Context';

export const ThemContext = createContext("light")

function App() {
  return (
    <div className="App" >
      <ThemContext.Provider>
        <Component/>
      </ThemContext.Provider>
    </div>
  );
}

export default App;
