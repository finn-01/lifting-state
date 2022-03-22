import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

function Boil(props) {
  if (props.c >= 100) {
    return <p>Boil</p>;
  }
  return <p>Not boil</p>;
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: ""
    };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <fieldset>
        <legend>Enter temperature: </legend>
        <input value={temperature} onChange={this.handleChange} />
        <Boil c={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);
