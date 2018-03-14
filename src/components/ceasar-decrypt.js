import React from 'react';
import ReactDOM from 'react-dom';

class CeasarDecrypt extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            activeShift: 1,
            sentence: '',
            result: ''
        }
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.encrypt = this.encrypt.bind(this);
    }

    handleInput(event) {
        console.log(event);
        this.setState({
            sentence: event.target.value
        });
    }

    handleSelect(event){
        this.setState({
            activeShift: event.target.value
        });
    }

    encrypt(event){
        const loopAlphabet = (counter, shift, alphabet) =>{
            if ((counter + shift)<alphabet.length) {
                return alphabet[counter+shift];
            }else {
                return alphabet[counter+shift-alphabet.length];
            }
        }
        event.preventDefault();
        let sentence = this.state.sentence.toLocaleLowerCase();
        let shift = + this.state.activeShift;
        let alphabet = this.state.alphabet;

        let sentenceArray = sentence.split('');
        let result = [];
        console.log(sentenceArray);
        for (var i = 0; i<sentenceArray.length; i++) {
            for (var j = 0; j < alphabet.length; j++) {
                if (sentenceArray[i] == alphabet[j]){
                    result.push(loopAlphabet(j,shift,alphabet))
                    break;
                }else{
                    if (alphabet.length-1 == j) { result.push(sentenceArray[i]) }
                }
            }
        }

        this.setState({
            result: result.toString().replace(/,/g, "")
        });
    }

    render(){
        return(
            <div>
              <form onSubmit={this.encrypt}>
                    <textarea row="5" value={this.state.sentence} onChange={this.handleInput} className="input" placeholder="Enter sentence to encrypt" />
                    <select onChange={this.handleSelect}>
                    {this.state.alphabet.map( (letter, i) => { return <option > {i+1} </option>})}
                    </select>
                    <input type="submit" value="Submit" className="btn-submit" />
                    <textarea row="5" value={this.state.result}  className="input" placeholder="Result will be here" />
                </form>
            </div>
        );
    }
}

export default CeasarDecrypt;