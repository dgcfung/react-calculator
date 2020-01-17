import React, {useState} from 'react';


function Calculator (props) {
  
//   const[num1, setNum1]= useState(0);
//   const [num2, setNum2]= useState(0);
//   const[totalNum, setTotalNum]=useState(0);

// //   function handleOnClick(event){
// //     event.preventDefault();

    
// // console.log(event)
// // console.log()

// //   }

//   function addNumbers(event){
//     event.preventDefault()
//     const addedNum=(Number(num1)+Number(num2))
//     setTotalNum(addedNum)
//     console.log(addedNum)

//   }


 


    return (
      <div id="input-container">
        <form onChange={props.stateOf}>
          <div>
            <input className="input-fields" type="text" placeholder="#" name="value1" value={props.num.value1}/>

            <input className="input-fields" type="text" placeholder="#" name="value2" value={props.num.value2}/>
          </div>

          {/* inputs, track state */}
          <div>
            <button onClick={props.handleAdd}>ADD</button>
            <button onClick={props.handleSubtract}>SUBTRACT</button>
            <button onClick={props.handleMultiply}>MULTIPLY</button>
            <button onClick={props.handleDivide}>DIVIDE</button>
          </div>
        </form>
      </div>
    );
}

export default Calculator;
