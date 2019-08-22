import React, { Component } from "react";
import "./main.css";
import Button from "../../components/button/Button.js";

const initialState = {
  estado: false,
  chutes: 150,
  numChutes: 1,
  min: 0,
  max: 300,
  acertou: false
};
export default class Main extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.iniciarJogo = this.iniciarJogo.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.menor = this.menor.bind(this);
    this.maior = this.maior.bind(this);
    this.acertou = this.acertou.bind(this);
  }

  renderButton() {
    if (this.state.estado === false && this.state.acertou === false) {
      return <Button label="Entrar" click={this.iniciarJogo} />;
    } else if (this.state.estado === true && this.state.acertou === false) {
      return [
        <h3>Seu numero é {this.state.chutes} ?</h3>,
        <p>
          Min: {this.state.min} max: {this.state.max}
        </p>,
        <p>qtd de chutes {this.state.numChutes}</p>,
        <Button label="Menor" click={this.menor} />,
        <Button label="Acertou" click={this.acertou} />,
        <Button label="Maior" click={this.maior} />
      ];
    } else if (this.state.acertou === true) {
      return [
        <h3>Acertou!!!</h3>,
        <p>Numero correto: {this.state.chutes}</p>,
        <p>Numero de tentativas: {this.state.numChutes}</p>
      ];
    }
  }

  componentDidMount() {
    this.renderButton();
  }

  iniciarJogo() {
    this.setState({ estado: true });
  }

  menor() {
    if (
      (this.state.max === 0 && this.state.min === 0) ||
      this.state.max === this.state.min
    ) {
      return this.setState({ acertou: true });
    }
    const proxChute =
      parseInt((this.state.chutes - this.state.min) / 2) + this.state.min;
    this.setState({
      max: this.state.chutes,
      chutes: proxChute,
      numChutes: this.state.numChutes + 1
    });
  }

  maior() {
    if (
      (this.state.max === 0 && this.state.min === 0) ||
      this.state.max === this.state.min
    ) {
      return this.setState({ acertou: true });
    }
    const proxChute =
      parseInt((this.state.max - this.state.chutes) / 2) + this.state.chutes;
    this.setState({
      min: this.state.chutes,
      chutes: proxChute,
      numChutes: this.state.numChutes + 1
    });
  }

  acertou() {
    this.setState({ acertou: true });
  }

  render() {
    return (
      <div>
        <h3>Game Adivinha meu numero.</h3>
        {this.renderButton()}
      </div>
    );
  }
}
