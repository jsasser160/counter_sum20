import React, { Component } from 'react';
import Counter from './components/counter/Counter'

class App extends Component {

  render() {
    return( 
      <div>
        <Counter counterName='red' />
        <Counter counterName='blue' />
        <Counter counterName='pink' />
        <Counter counterName='purple' />
      </div>
    )
  }
}

export default App;
