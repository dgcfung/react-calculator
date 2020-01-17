import React, {useState} from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Output from './components/Output';
import './App.css';

// hihihihhihihi

function App () {

  const[num, setNum]= useState ({
    value1: 0,
    value2: 0
  });
  const[totalNum, setTotalNum]=useState(0);

//   function handleOnClick(event){
//     event.preventDefault();

    
// console.log(event)
// console.log()

//   }

function stateOf(e){
  console.log(e.target)
  const name = e.target.name;
  const value = e.target.value
  setNum(pre => ({
    ...pre,
    [name]: value
  }))
}

  function addNumbers(event, string){
    event.preventDefault()
    const addedNum=(Number(num.value1)+Number(num.value2))
  
    setTotalNum(addedNum)
    console.log(addedNum)

  }
  function subNumbers(event, string){
    event.preventDefault()
    const addedNum=(Number(num.value1)-Number(num.value2))
  
    setTotalNum(addedNum)
    console.log(addedNum)

  }

  function multNumbers(event, string){
    event.preventDefault()
    const addedNum=(Number(num.value1)*Number(num.value2))
  
    setTotalNum(addedNum)
    console.log(addedNum)

  }
  function divNumbers(event, string){
    event.preventDefault()
    const addedNum=(Number(num.value1)/Number(num.value2))
  
    setTotalNum(addedNum)
    console.log(addedNum)

  }

  return (
    <div className="App">
      {console.log(totalNum)}
      <Header />
      <div id="calculator-container">
        <Calculator stateOf={stateOf} num={num} handleAdd={addNumbers} handleSubtract={subNumbers} handleMultiply={multNumbers} handleDivide={divNumbers}/>
        
        <Output output= {totalNum} />
      </div>
    </div>
  );
}

export default App;
