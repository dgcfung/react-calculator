import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props) 
    this.state = ({
      
    })
}
  render() {
    return (
      <div className="container">
        <form className="add">
          <input type="text" placeholder="First Number..." name="value1" />
          <input type="text" placeholder="Second Number..." name="value2" />
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
