import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
import App from './App';   

class RefSample extends Component{
    input= React.createRef();
}

handleFocus = () => {
    this. input.current.focus();
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')  
);
 