import React, { useState } from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState('');
  const [equation,setEquation] = useState('');

  const handleClick = (e) =>{
    if(e.target.textContent==='C'){
      setEquation('');
      setResult('');
    }
    else if(e.target.textContent==='='){
      if(equation==='')
        setResult('Error');
      else
        setResult(eval(equation));
    }
    else
      setEquation((prevState)=>prevState + e.target.textContent);
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type='text' readOnly value={equation}/>
      <div>{result}</div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'350px',height:'350px'}}>
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button onClick={handleClick}>+</button>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button onClick={handleClick}>-</button>
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button onClick={handleClick}>*</button>
          <button onClick={handleClick}>C</button>
          <button onClick={handleClick}>0</button>
          <button onClick={handleClick}>=</button>
          <button onClick={handleClick}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
