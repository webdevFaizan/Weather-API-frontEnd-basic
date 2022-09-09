import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios';

export default class Weather extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }
    constructor(){
        super();
        this.state ={
            weather : 'No weather request yet.'
        }
        this.getLondonWeatherDetails = this.getLondonWeatherDetails.bind(this);
        this.getParisWeatherDetails = this.getParisWeatherDetails.bind(this);
    }

    getLondonWeatherDetails(){
        axios.get('/getLondonWeatherDetails').then((res)=>{
            console.log(res.data.temp);            
            this.setState({
                weather: res.data.temp
            })
        });
    }

    getParisWeatherDetails(){
        axios.get('/getParisWeatherDetails').then((res)=>{
            console.log(res.data.temp);            
            this.setState({
                weather: res.data.temp
            })
        });
    }

  render() {
    return (
      <div >
        <button onClick={this.getLondonWeatherDetails}>Get London Weather details</button>
        <button onClick={this.getParisWeatherDetails}>Get Paris Weather details</button>
        <h1>The details of weather is : {this.state.weather}</h1>
      </div>
    )
  }
}
