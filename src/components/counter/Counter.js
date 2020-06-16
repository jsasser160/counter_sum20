import React from 'react';
class Counter extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { countValue: 0 }
  //   this.inc = this.inc.bind(this)
  // }
  state = { countValue: 0 }
  // inc() {
  //   // this.state.countValue++
  //   this.setState({ countValue: this.state.countValue + 1 })
  // }
  inc = () => {
    this.setState({ countValue: this.state.countValue + 1 })
  }
  dec = () => {
    this.setState({ countValue: this.state.countValue - 1 })
  }
  render() {
    return(
      <div style={{ backgroundColor: this.props.counterName }}>
        <h1>{ this.props.counterName }</h1>
        <h1>Counter App</h1>
        <p>
          { this.state.countValue }
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}
export default Counter;