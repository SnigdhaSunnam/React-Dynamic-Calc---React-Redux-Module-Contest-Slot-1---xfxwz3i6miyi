import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] =useState(0);

  const handleNum1Change = (e) => {
    setNum1{Number(e.target.value));
           };
    const handleNum2Change = (e) => {
      setNum2{Number(e.target.value));
             };
      const handleAddition = () => {
        setResult(num1 + num2);
      };

  return (
    <div id="main">
      <input id="input1" type="number1" value= {num1}  onChange={handleNum1Change}/>
       +
      <input id="input2"  type= "number2" value= {num2} onChange={handleNum2Change}/> 

    <button onClick = {handleAddition}>Add Numbers </button>
      
      <p id="result">Result: {result}</p>
    </div>
  );
};


export default App;
