import React from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
//import { Radar } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions/bitcoinActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.bitcoin)
  const stateB = useSelector(state => state.brain)
  const [num, setNum] = React.useState(500);
    
  const fetchData = (time) => {
    //Fetch data from redux using time
    dispatch(getData({
      time: time,
      number: num,
    }))
  }

  return (
      <div className="App">
      <div className="navbar">
      <h1 style={{marginLeft:'13px', marginRight:'13px'}}>A.I. FAIR PRICE PREDICTER FUNCTION</h1>
      <h5 style={{marginLeft:'25px'}}>POWERED BY BRAIN.JS, CHART JS, REDUX AND REACT APP</h5>
      </div>
      <div className="title">
      <h1>ETH/USD Timeseries</h1>
      </div>
      <div className={"btns-wrapper"}>
            
        <button onClick={(() => {fetchData()})}>ONE TIME PROCESS IMMEDIATELY</button>
            
        {state.loading && <p>Loading...</p>}
      </div>
      <div className="info">
        <h4>Default Settings are 500 data points "INSERT DATA POINTS" start the interval of 1 minute</h4>
        <input onChange={e => setNum(e.target.value)} />
        <button onClick={() => setInterval(() => {fetchData("1min")}, 60100)}>INSERT DATA POINTS</button>
          <h4>Behind the scene brain js is setup to only use the data points specified for this training.</h4>
          <h4>Max dataset from Binance is 500 and for every interval of one minute the neural network's array is multiplied by 500</h4>
        <h4>Immediately the brain's result targets the asset price and diverges to its price</h4>
        <h4>We can then compare the asset price diffrence to the neural networks result</h4>
        <h4>Just like we can compare moving averages from one asset to an other we can now use the neural network in the same way. </h4>
      </div>
         <div className={"chart-wrapper"}>
      <Line
          data={state.data} options={{responsive: true}}
      /></div>

         <div className='container'>
         <div className='chartBarVol' style={{height:'80%', width:'80%'}}>
         <Bar
         data={stateB.dataC} options={{responsive: true}}
         /></div>

         <div className='chartBarLin' style={{height:'100%', width:'fit-content(100)'}}>
         <Line 
         data={stateB.dataD} options={{responsive: true}}
         /></div>
          </div>
          <h3 className= 'ticker-sym'> ETH/USD </h3>
           </div>
           );
          }
          export default App;
