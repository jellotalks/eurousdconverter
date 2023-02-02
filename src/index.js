import React, {useState} from 'react'
import ReactDom from 'react-dom/client'
//import ConvertModal from './components/convertform'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    onSubmit = () => {
        this.state = {
            answerValue: 100
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Euro/USD Converter</h1>
                </header>
                <form onSubmit={this.onSubmit}>
                    <label>Type of amount to convert:</label>
                    <select>
                        <option>EURO</option>
                        <option>USD</option>
                    </select>
                    <br></br>
                    <label>Amount:</label>
                    <input id='amount'></input>
                    <br></br>
                    <label>Conversion Rate:</label>
                    <input id='conversionRate' value={1.1}></input>
                    <br></br>
                    <button type="submit">Convert</button>
                </form>
                <Answer />
            </div>
        )
    }
}

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: 0
        }
    }

    render() {
        return (
            <h1>
                {this.state.answer}
            </h1>
        )
    }
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)