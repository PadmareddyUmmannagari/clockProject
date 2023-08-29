import { Component } from 'react'
import './index.css'

class ClockComponent extends Component{
    constructor(props){
        super(props)
        this.state={date: new Date()}
    }

    componentDidMount(){
        this.timerID=setInterval(this.tick,1000);
    }
    
    componentWillUnmount(){
        console.log('componentWillUmount is triggerd')
        clearInterval(this.timerID);
    }

    tick=()=>{
        this.setState({date:new Date()})
    }

    render(){
        const {date}=this.state
        return (
            <div className='card-container'>
               <h1>Clock</h1>
              <p className='time'>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default ClockComponent