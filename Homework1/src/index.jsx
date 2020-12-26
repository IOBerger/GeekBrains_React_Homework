import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const click = event => {
    messages[messages.length]="Нормально";
    ReactDOM.render(
        <MessageField messages={ messages } />,
        document.getElementById('root'),
     );
};

const MessageField = (props) => {
   let mass=props.messages.map(message => <MessageComponent text={ message } />);
   mass[mass.length]=<button onClick={click}>Нормально</button>;
    return mass;
};


//return <main onClick={click}><Message text="Some text1"/></main>;

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);