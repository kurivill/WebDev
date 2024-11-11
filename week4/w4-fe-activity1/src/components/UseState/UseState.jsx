import './UseState.css';
import { useState } from 'react';

const UseState = () => {
  console.log(useState('light'));
  const [count, setCount] = useState(0);
  console.log(useState(count));
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  
  
  
  
  


  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick= {() => setTheme('dark')}>Dark</button>
      <button onClick= {() => setTheme('light')}>Light</button>
      <h2>{ count }</h2>
      <button onClick= {() => setCount(prevCount => prevCount + 1)} >
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>

      <button onClick= {() => toggleTheme()}>
        Toggle Theme
      </button>
    </div>
  );
};


export default UseState;
