import React, { Component } from 'react'
import axios from 'axios';
import './charts.css';
export class charts extends Component {
    state={
        advice:'',
    };
    componentDidMount(){
       this.fetchAdvice();
    }
    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice}=response.data.slip;
            this.setState({ advice });
    })
        .catch((error)=>
        {console.log(error);})
    }
    render() {
        return (
            <div className='cars'>
                <div className='wheels'>
               <h1> {this.state.advice} </h1>
               <button className='button' onClick={this.fetchAdvice}>Double click for Advice!!</button>
                </div>
            </div>
        )
    }
}

export default charts

