import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component{
    state={
        messages: [{author: "Я", text: "Привет!"},{author: "Я", text: "Как дела?"}],
    };

    handleClick = () => {
        this.setState({messages:[...this.state.messages,{author: "Я", text: "Нормально"}]});
    };

    componentDidUpdate(){
        console.log("Update");
        if(this.state.messages.length %2 === 1)
            setTimeout(()=>this.setState({messages:[...this.state.messages,{author: "Робот", text: "Я робот"}]}),1000);
    }

    render(){
        console.log("Render");

        const messageElements = this.state.messages.map((text,index)=>(<Message key={index} author={text.author} text={text.text}/>));

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>
                Отправить сообщение
            </button>
        </div>
    }
}