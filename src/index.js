import React from 'react';
import ReactDOM from 'react-dom';
import CeasarDecrypt from "./components/ceasar-decrypt";
import './style.css'


class App extends React.Component {
    render(){
        return(
            <div>
                <CeasarDecrypt />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));