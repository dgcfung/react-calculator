import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({

    })
  }
  render() {
    return (
      <div id="input-container">
        <form>
          <div>
            <input className="input-fields" type="text" placeholder="#" name="value1" />
            <input className="input-fields" type="text" placeholder="#" name="value2" />
          </div>
          <div>
            <button>ADD</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
