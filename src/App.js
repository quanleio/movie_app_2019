
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.warn(`hello`);
  }

  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }

  componentDidMount() {
    console.warn(`componentDidMount`)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.warn(`componentDidUpdate`);
  }

  componentWillUnmount() {
    console.warn(`componentWillUnmount`);
  }

  render() {
    console.warn(`render`)
    return(
        <div>
          <h1>The number is { this.state.count }</h1>
          <button onClick={ this.add }>Add</button>
          <button onClick={ this.minus }>Minus</button>
        </div>
    )
  }
}


export default App;
