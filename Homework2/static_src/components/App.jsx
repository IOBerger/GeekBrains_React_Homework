import React from 'react';

export default class App extends React.Component{
    state ={
        text: 'Hello world!'
    };
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => this.setState({'text': 'Hello world! new'}),1000);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
   render(){
        return <h1> {this.state.text} </h1>
   }

}