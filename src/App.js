import React from 'react';
import {Chart} from 'chart.js';
//import { Linking } from 'react-native';
import './App.css';
import { Line } from 'react-chartjs-2';
//import { Radar } from 'react-chartjs-2';
//import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions/bitcoinActions";
//import 'chartjs-adapter-luxon';
//import background from "./gallery/High_resolution.jpeg";
import ChartStreaming from 'chartjs-plugin-streaming';
Chart.register(ChartStreaming);
function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.bitcoin)
  const stateB = useSelector(state => state.brain)
  const [num] = React.useState(500);
  const [mom] = React.useState(0.1); 
    
  const fetchData = (time) => {
    //Fetch data from redux using time
    dispatch(getData({
      time: time,
      number: num,
      momentum: mom,
    }))
  }
///<input onChange={e => setNum(e.target.value)} />https://ipfs.io/ipfs/QmeMgBEWFGgQKjmz8CvVLGQuU32rT9zEykhiY4AfhEpckB?filename=Eye-Dragon-Wing2.png
return (
  <div className="App">
    <div className="toppageNav">
      <br />
      <img align="left" src ={'https://ipfs.io/ipfs/QmeMgBEWFGgQKjmz8CvVLGQuU32rT9zEykhiY4AfhEpckB?filename=Eye-Dragon-Wing2.png'}  marginLeft={"200px"} style={{ width: '475px', height: '450px', color: "#black"}} alt="adam" press here/>
      <h1 align="left">A.I.🤖 vs Binance exchange BTC/USDT Timeseries</h1>
      <h2 align="center" style={{marginLeft:'10px', marginRight:'13px'}}>NEURAL NETWORK BRAIN FUNCTION</h2>
      <img align="right" src ={'https://ipfs.io/ipfs/QmaUWksQmDUHhEEzctWU5kxJ7siXLjRUdM7CozDt4fLe2D?filename=The-Minter.png'} href={'https://ipfs.io/ipfs/QmWRdonnmgFYUZEUUAQzenp2jeCyRiVkq8Ryp5H49mFrpz'} marginLeft={"200px"} style={{ width: '475px', height: '450px' }} alt="adam"/>
  <h5 align="center" style={{marginLeft:'25px'}}>POWERED BY BRAIN.JS, CHART JS, REDUX AND REACT APP</h5>
      <br />
    </div>
  <div className="navbar">
  </div>

  <div className="info" align = "center">

  <h1>◻️Introduction◻️</h1>
    <h4>This project is build out of passion for big Data analytic</h4>
    <h4>In other words extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions.</h4>
    <h4>This is were the experimental part comes in.</h4>
    <h4>The question is when to execute trigger(s) speculating an up trend or speculating a down trend.</h4>
    <h4>Is it 🧂salt or is it 🌶️pepper?</h4>  
  <h1>◻️Word from the developer◻️</h1>
    <h4>This is were the magic🪄 begins, using brain.js neural network to predict trends📈. But truly were to start?🤔</h4>
    <h4>Working with brain js teleported me back 44 years ago, when I could just understand that mixing lots of colors together equals black.</h4> 
    <h4>I was a kid😛 playing with water colors. And we all know that observation, is the child's secret, mixing all thoses colors and learning in the process.</h4>
    <h3 align="center">‼️ BOUYA ‼️ 🤣 ‼️ I WAS REAL GOOD AT MAKING BLACK ‼️ 🤣 ‼️</h3>
    <h5>‼️ ⚠️ ‼️ ADVISERY ‼️ ⚠️ ‼️ NO FINANCIAL ‼️ ⚠️ ‼️ ADVISERY ‼️ ⚠️ ‼️</h5>
    <h1>💝‼️ WELCOME ‼️ 📈📉 ‼️ WELCOME ‼️ 📈📉 ‼️ WELCOME ‼️💝</h1>
    
  </div>

        <div className={"btns-wrapper"}>
        <div className="info">
        <div className="title">
          
  </div>
  <div className="interval-button">
    <br/>
  <h2>🏁Start binance exchange BTC/USDT timeseries session.</h2>
  <h5>
      <p>
      By starting the one minute interval a snapshot📸 of 500 pieces of data is introduces as a singular force train session into the neural network.
      This happens singularly every minute.
      </p>
 </h5>
 <p></p>
  <h5>
      <p>
      This particular code solution is structured with 4 neural networks. One for the Open, the High, the Low and the Close. (OHLC KLine). 
      As a developer we require an output response as a prediction from these 4 instances. But from the brain's perspective the output is a target.
      This is how the bias of the brain is calibrated. 
      If open is the target then this data image must = the bias data image and the open, high, close data image.
      If not ajust the bias to what ever the default setting it is ex: 0.3 and recycle till this x factor has atteined 0.005 for example and spit out what ever output value it has.
      This will be the prediction value. 
      </p>
  </h5>

  <h5>
      <p>
      There are 4 individual neural networks let's call these instances of the brain. 
      And one instance has only four pieces of data to determine each other's next price.
      </p>
  </h5>
  <h5>
      <p>
      Trainning Structure num# 1-OPEN: high, low, close is used as input trainning data and OPEN is used as output trainning data.
      </p>
      <p>
      Trainning Structure num# 2-HIGH: open, low, close is used as input trainning data and HIGH is used as output trainning data.
      </p>
      <p>
      Trainning Structure num# 3-LOW: open, high, close is used as input trainning data and LOW is used as output trainning data.
      </p>
      <p>
      Trainning Structure num# 4-CLOSE: open, high, low is used as input trainning data and CLOSE is used as output trainning data.
      </p>
  </h5>
  <h5>The neural instance is repeted 4 times with opposit input and output trainning data. As describe above.</h5>
  <h5>The 4 neural network outputs are color coded and used through out the charts.</h5>
  
  <h4>OPEN : RED🔴 | HIGH : BLUE🔵 | LOW : YELLOW🟡 | CLOSE : GREEN🟢</h4>
  <button className='btns-wrapperA' onClick={() => setInterval(() => {fetchData("momentum")}, 60100)}>⏳START 1 MIN INTERVAL</button>
          <button className='btns-wrapperB' onClick={(() => {fetchData()})}>🕳️INSERT TRAINNING DATA📃📃... NOW🕳️</button>
          <h4>The Training array snapshot📸.</h4>
          <Line className='snap-shot' 
         data={state.data} options={{responsive: true}}
         />
         <div className= 'projects-link' >
         <img src ={'https://ipfs.io/ipfs/QmTTabZTHf7ejwTJxUwNR9g15aCV9Q65yD5UvdQb7qfwMm?filename=Dragon-Head.png'} style={{ width: '300px', marginBottom: '100px', height: '350px' }} alt="adam"/>
         <a className= 'the-link-projects' href={'https://ipfs.io/ipfs/QmWRdonnmgFYUZEUUAQzenp2jeCyRiVkq8Ryp5H49mFrpz'}> ☣️NFT-testnet-rinkeby☣️ CRYPTO-FLOWERS GALLERY</a>
         
         </div>

          </div>
          <div style={{marginBottom: '100px'}}>

          </div>
         {state.loading && <p>Loading...</p>}
          </div>
  </div>
        <div className='container'>

           <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>⚪MESUREMENT OF THE TREND⚪</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3> CHART NUMBER #1 </h3>

         <Line
         data={stateB.dataG} options={{responsive: true}}
         />
         </div>

        <div className='chartB-II-result' style={{height:'60%', width:'fit-content(100)'}}>
           <h2 align = 'center'>⚪THE PRICE FORCE AND TREND DIRECTION⚪</h2>
           <h5 align = 'center'>BTC/USDT TICKER📈</h5>
           <h3> CHART NUMBER #2 </h3>

         <Line
         data={stateB.dataH} options={{responsive: true}}
         />
         </div>

           <div className='chartC-III-result' style={{height:'60%', width:'fit-content(100)'}}>
           <h2 align = 'center'>⚪THE LATESS PRICE VERSES THE PREDICTOR⚪</h2>
           <h5 align = 'center'>BTC/USDT TICKER📈</h5>
           <h3> CHART NUMBER #3 </h3>

             <Line 
         data={stateB.dataC} options={{responsive: true}}
         />
         </div>

         <div className='chartD-IV-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>⚪THE PREDICTOR VERSES THE OPEN⚫/CLOSE⚫⚪</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3> CHART NUMBER #4 </h3>

         <Line 
         data={stateB.dataD} options={{responsive: true}}
         />
         </div>

         <div className='chartE-V-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>⚪THE PREDICTOR CORE AVERAGE🟠 OF ALL NEURAL NETWORKS O-H-L-C⚪</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3> CHART NUMBER #5 </h3>
  
         <Line 
         data={stateB.dataF} options={{responsive: true}}
         />
         </div>

          <div className='chartF-VI-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>⚪BRAIN PREDICTOR LAYER@2.0.0⚪</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3 > CHART NUMBER #6 </h3>

            <div align = 'center'>
            <h4>The second layer is experimental but none the less very exiting!</h4>
             <h4>From neural network output♻️ to the input♻️ of a new neural network instance, one must compartmentalize brain.js into sections or categories.</h4>
             <h4>The chart agglomerates the results of four neural networks instances using latess market data and latess data from the first neural network(first layer)</h4>
             <h4>When you first start the interval you will notice it is calibrating it's result to target the asset. Its because the training array is very small.</h4>
             <h4>As the training array increases the calibrating becomes more and more dominant. ☣️Why not let's experiment☣️.</h4>
             </div>

         <Line 
         data={stateB.dataB} options={{responsive: true}}
         /></div>

         </div>
         <div align="left" style={{ width: '100%', marginTop: '52%', height: '1%', backgroundColor: 'rgba(3, 0, 0, 0.6)' }} >
          <img src ={'https://ipfs.io/ipfs/QmTTabZTHf7ejwTJxUwNR9g15aCV9Q65yD5UvdQb7qfwMm?filename=Dragon-Head.png'} href={'https://ipfs.io/ipfs/QmWRdonnmgFYUZEUUAQzenp2jeCyRiVkq8Ryp5H49mFrpz'} style={{ width: '385px', marginTop: '3%', height: '400px' }} alt="adam" button here/>
          <div>
           <h1 align='center' style={{marginTop: '75px'}}>Road Map</h1>
           <h4 align='center'>The projet concists of targeting a fair price of any asset leading to take advantage when price is temporarly depressed</h4>
           </div>
          <div align="center" style={{ width: '60%', height: '50%', marginBottom: '1%', backgroundColor: 'rgba(3, 0, 0, 0.1)' }}>
        <h1 style={{height : '150px'}}> 
                  <a  align="center" href={'https://discord.gg/9HYr36dF'} rel="noopener noreferrer" style={{color: "#black"}}>
                                  MY DISCORD SERVER
                  </a> </h1>
        </div>
       <div>
       </div>
        </div>
        

           </div>
           
           );

          }
          export default App;
/*
JUST STUFF:
          <div>
             <h3>----- NEURAL NETWORK PREDICTED ASSET ANALYSES </h3>
             <h4>⚪ With humbleness to bring light were to man has gone before {`https://discord.gg/UYqAsChs`}</h4>
            <Iframe url="https://www.youtube.com/watch?v=y_UHEy6vbv0"
        width="50px"
        height="50px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"></Iframe>
            
     <button  onClick url={ () => ("https://discord.gg/UYqAsChs")}>CHECK MY HOME BREW HUB</button>
       
     style={{ backgroundImage: `url(${background})` }}

             <input onChange={e => setNum(e.target.value)} />
             </div>

*/