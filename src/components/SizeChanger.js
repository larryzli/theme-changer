import React, { Component } from "react";

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }
  // MOUNTING
  // constructor (props) {}
  // componentWillMount () {}
  // render
  // componentDidMount () {}

  // UPDATING
  // componentWillReceiveProps (nextProps) {}
  // shouldComponentUpdate (nextProps, nextState) {}
  // componentWillUpdate () {}
  // render
  // componentDidUpdate(prevProps, prevState) {}

  // UNMOUNTING
  // componentWillUnmount () {}

  // ERROR HANDLING
  // componentDidCatch () {}

  componentWillReceiveProps(nextProps) {
    this.setState({
      allowEdit: nextProps.allowEdit
    });
  }

  render() {
    return (
      <select
        className="dropDownContainer"
        onChange={e => this.props.update(parseInt(e.target.value, 10))}
        disabled={this.state.allowEdit === "false"}
      >
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
