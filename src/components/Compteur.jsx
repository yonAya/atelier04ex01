import { Component } from 'react'
import Valeur from './Valeur'

class Compteur extends Component {
  constructor(props) {
    super(props)
    this.state = {
      compteur: 0,
      pasI: 1,
      pasD: 1,
    }
    this.incrementer = this.incrementer.bind(this)
    this.decrementer = this.decrementer.bind(this)
  }
  incrementer = () => {
    this.setState({ compteur: this.state.compteur + this.state.pasI })
  }
  decrementer = () => {
    this.setState({ compteur: this.state.compteur - this.state.pasD })
  }
  render() {
    return (
      <div className="container">
        <Valeur val={this.state.compteur} />
        <div className="buttons">
          <button onClick={this.incrementer}>Incrementer</button>
          <button onClick={this.decrementer}>Decrementer</button>
          <button
            onClick={() => {
              this.setState({ compteur: 0, pasI: 1, pasD: 1 })
            }}
          >
            Initialiser
          </button>
        </div>
        <fieldset>
          <legend>Pas d'incrementation </legend>
          <div className="buttons">
            <button
              onClick={() => {
                this.setState({ pasI: 1 })
              }}
              disabled={this.state.pasI === 1}
            >
              1
            </button>
            <button
              onClick={() => {
                this.setState({ pasI: 2 })
              }}
              disabled={this.state.pasI === 2}
            >
              2
            </button>
            <button
              onClick={() => {
                this.setState({ pasI: 3 })
              }}
              disabled={this.state.pasI === 3}
            >
              3
            </button>
            <button
              onClick={() => {
                this.setState({ pasI: 4 })
              }}
              disabled={this.state.pasI === 4}
            >
              4
            </button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Pas d'incrementation </legend>
          <div className="buttons">
            <button
              onClick={() => {
                this.setState({ pasD: 1 })
              }}
              disabled={this.state.pasD === 1}
            >
              1
            </button>
            <button
              onClick={() => {
                this.setState({ pasD: 2 })
              }}
              disabled={this.state.pasD === 2}
            >
              2
            </button>
            <button
              onClick={() => {
                this.setState({ pasD: 3 })
              }}
              disabled={this.state.pasD === 3}
            >
              3
            </button>
            <button
              onClick={() => {
                this.setState({ pasD: 4 })
              }}
              disabled={this.state.pasD === 4}
            >
              4
            </button>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default Compteur
