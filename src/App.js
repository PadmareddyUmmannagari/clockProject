import { Component } from 'react';
import ClockComponent  from './components/Clock';
import './App.css';



class App extends Component{
    state={
        status:false,
      }

    onClickBtn=()=>{
        const {status}=this.state
        this.setState({status:!status});
    }

   render(){
    const {status}=this.state
    return (
        <div className='container'>
            <div>
                <button onClick={this.onClickBtn} className='btn'>
                    {status ?'Hide Clock':'Show Clock'}
                </button>
            </div>
            {status && <ClockComponent/>} 
        </div>
    )
   } 
}


export default App;
