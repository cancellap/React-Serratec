
import React, { Component } from "react";

export default class AppClasse extends Component {
  constructor(props) {
    console.log("Construtor");
    super(props);
    this.state = {
      dia: "Segunda-Feira",
      hora: "00:00:00",
    };
  }

  componentDidMount() {
    console.log("Did Mount!");
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("DidUpdate");
  }

  componentWillUnmount() {
    console.log("WillUnmount");
  }

  render() {
    return (
      <div>
        <h1>Componente de Classe</h1>
        <h2>{this.props.curso}</h2>
        <h2>{this.state.dia}</h2>
        <h2>{this.state.hora}</h2>
      </div>
    );
  }
}
