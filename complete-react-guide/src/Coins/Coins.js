import React, { Component } from 'react'

class Coins extends Component {
    state = {
        dollars: 0
    }

    shouldComponentUpdate(props, state) {
        return state.dollars % 10 === 0;
    }

    handleChange = (e) => {
        this.setState({
            dollars: Number(e.target.value || 0)
        })
    }

    style = {
        backgroundColor: '#ccc',
        padding: '20px',
        margin: '10px auto',
        width: '300px'
    }

    resultStyle = {
        backgroundColor: 'orange',
        color: '#000',
        width: '150px',
        margin: '5px auto'
    }

    render() {
        return (
            <div style={this.style}>
            <h1>Buy Crypto Coins!</h1>
            <div className="question">
            <p>How much dollars do you have?</p>
            <p>
            <input type="text" placeholder="0" onChange={this.handleChange} />
            </p>
            </div>
            <div>Crypto Coin price: $10</div>
            <p style={this.resultStyle}>You have {(this.state.dollars) / 10} coins</p>
            </div>
        )
    }
}

export default Coins;