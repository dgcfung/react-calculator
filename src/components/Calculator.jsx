import React, {useState} from 'react';


function Calculator (props) {
  
  const[num1, setNum1]= useState(0);
  const [num2, setNum2]= useState(0);

  function handleOnClick(event){
    event.preventDefault();

    
console.log(event)
console.log()

  }

 


    return (
      <div id="input-container">
        <form>
          <div>
            <input className="input-fields" type="text" placeholder="#" name="value1" onChange={(event)=> {
              console.log(event.currentTarget.value) 
              setNum1(event.currentTarget.value)}} />

            <input className="input-fields" type="text" placeholder="#" name="value2" onChange= {(event) => {
              console.log(event.currentTarget.value)
              setNum2(event.currentTarget.value)}} />
          </div>

          {/* inputs, track state */}
          <div>
            <button >ADD</button>
          </div>
        </form>
      </div>
    );
}

export default Calculator;
