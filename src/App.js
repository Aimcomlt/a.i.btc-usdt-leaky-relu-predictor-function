import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js';
import walletGoodImage from './gallery/walletGoodImage.png';
import Signature from './gallery/Signature.png';
import brainImage2 from './gallery/brainImage2.png'
//import { Linking } from 'react-native';
import './App.css';
import { Line } from 'react-chartjs-2';
//import { Radar } from 'react-chartjs-2';
//import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions/bitcoinActions";
import { mailBox } from "./actions/bitcoinActions";

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

    ////////////////////////////////////////////
    const percentMoveO = [];
    const MoveO = [];
    const percentMoveH = [];
    const MoveH = [];
    const percentMoveL = [];
    const MoveL = [];
    const percentMoveC = [];
    const MoveC = [];

    const equationO = [];
    //const equationH = [];
    //const equationL = [];
    //const equationC = [];

    //console.log(equationO)


  const [initA] = React.useState(() => 100);
  //console.log(initA)

//////////////////////////////////////////////
    const accumulatedOpenMove = [];
    const accumulatedOpenMoveB = [];
    const accumulatedHighMove = [];
    const accumulatedHighMoveB = [];
    const accumulatedLowMove = [];
    const accumulatedLowMoveB = [];
    const accumulatedCloseMove = [];
    const accumulatedCloseMoveB = [];
///////////////////////////////////////////

  const [InitAmountopen, setInitAmountOP] = React.useState(() => initA / 4);
  const [InitAmounthigh, setInitAmountHGH] = React.useState(() => initA / 4);
  const [InitAmountlow, setInitAmountLW] = React.useState(() => initA / 4);
  const [InitAmountclose, setInitAmountCL] = React.useState(() => initA / 4);
  const [SupplyA, setSupplyA] = React.useState(100);
  const [SupplyB, setSupplyB] = React.useState(100);
  const [SupplyC, setSupplyC] = React.useState(100);
  const [SupplyD, setSupplyD] = React.useState(100);  

  const prevAmount = useRef();
  const prevPercMove = useRef('');
  const prevPercMoveHH = useRef();
  const prevPercMoveLL = useRef();
  const prevPercMoveCC = useRef();

  useEffect(() => {
    prevAmount.current = InitAmountopen
    prevPercMove.current = percentMoveO
    prevPercMoveHH.current = percentMoveH
    prevPercMoveLL.current = percentMoveL
    prevPercMoveCC.current = percentMoveC
  }, [InitAmountopen, percentMoveO, percentMoveH, percentMoveL, percentMoveC])

 //console.log(prevAmount.current , prevPercMove.current, prevPercMove.current * percentMoveO)
  
  equationO.push((prevAmount.current * prevPercMove.current) + (prevAmount.current * prevPercMoveHH.current) + (prevAmount.current * prevPercMoveLL.current) + (prevAmount.current * prevPercMoveCC.current))
  //equationH.push(prevAmount.current * prevPercMoveHH.current)
  //equationL.push(prevAmount.current * prevPercMoveLL.current)
  //equationC.push(prevAmount.current * prevPercMoveCC.current)
  //console.log(equationO)

//////////////////////////////////////////////////////////

  for(let i = 0; i < mailBox[0].length; i++) {
      MoveO.push(mailBox[0][499 + i] / mailBox[0][498 + i]);
  
      }
      accumulatedOpenMove.push(MoveO[mailBox[0].length - 502] * MoveO[mailBox[0].length - 501])
      percentMoveO.push(MoveO[mailBox[0].length - 500]);
      accumulatedOpenMoveB.push(percentMoveO * accumulatedOpenMove)
   //   console.log(accumulatedOpenMoveB)
/////////////////////////////////////////////////////////

for(let i = 0; i < mailBox[1].length; i++) {
    MoveH.push(mailBox[1][499 + i] / mailBox[1][498 + i]);
    }
    accumulatedHighMove.push(MoveH[mailBox[1].length - 502] * MoveH[mailBox[1].length - 501])
    percentMoveH.push(MoveH[mailBox[1].length - 500])
    accumulatedHighMoveB.push(percentMoveH * accumulatedHighMove)
   // console.log(accumulatedHighMoveB)
/////////////////////////////////////////////////////////

for(let i = 0; i < mailBox[2].length; i++) {
  MoveL.push(mailBox[2][499 + i] / mailBox[2][498 + i]);
    }
    accumulatedLowMove.push(MoveL[mailBox[2].length - 502] * MoveL[mailBox[2].length - 501])
    percentMoveL.push(MoveL[mailBox[2].length - 500])
    accumulatedLowMoveB.push(percentMoveL * accumulatedLowMove)
  //  console.log(accumulatedLowMoveB)
////////////////////////////////////////////////////////

for(let i = 0; i <mailBox[3].length; i++) {
  MoveC.push(mailBox[3][499 + i] / mailBox[3][498 + i]);
    }
    accumulatedCloseMove.push(MoveC[mailBox[3].length - 502] * MoveC[mailBox[3].length - 501])
    percentMoveC.push(MoveC[mailBox[3].length - 500]);
    accumulatedCloseMoveB.push(percentMoveC * accumulatedCloseMove)
   // console.log(accumulatedCloseMoveB)
/////////////////////////////////////////////////////////
//console.log(accumulatedOpenMoveB * accumulatedHighMoveB * accumulatedLowMoveB * accumulatedCloseMoveB * equationO)
const latessDaiAccount = [];
latessDaiAccount.push(accumulatedOpenMoveB * accumulatedHighMoveB * accumulatedLowMoveB * accumulatedCloseMoveB * equationO)
const [latessDaiAcc, setlatessDaiAcc] = React.useState(() => latessDaiAccount);
/////////////////////////////////////////////////////////
const dataOpen = [];
dataOpen.push(((initA / 4) / SupplyA) * percentMoveO);
const dataHigh = [];
dataHigh.push(((initA / 4) / SupplyB) * percentMoveH) 
const dataLow = [];
dataLow.push(((initA / 4) / SupplyC) * percentMoveL) 
const dataClose = [];
dataClose.push(((initA / 4) / SupplyD) * percentMoveC) 
const dataTotal = [];
dataTotal.push((dataOpen) + (dataHigh) + (dataLow) + (dataClose))
//console.log(dataTotal)
 // const [mint] = React.useState(0.1 * Supply)
    
  const fetchData = (time) => {
    //Fetch data from redux using time
    dispatch(getData({
      time: time,
      number: num,
      momentum: mom,
      LatessDaiBalance: setlatessDaiAcc,
      initAmountOP: setInitAmountOP,
      initAmountHGH: setInitAmountHGH,
      initAmountLW: setInitAmountLW,
      initAmountCL: setInitAmountCL,
      maxSupplyA: SupplyA,
      maxSupplyB: SupplyB,
      maxSupplyC: SupplyC,
      maxSupplyD: SupplyD,
    //  Dai: setDai,
    }))
  }
 // console.log(TempXopen);
///<input onChange={e => setNum(e.target.value)} />https://ipfs.io/ipfs/QmeMgBEWFGgQKjmz8CvVLGQuU32rT9zEykhiY4AfhEpckB?filename=Eye-Dragon-Wing2.png
return (
  <div className="App">
    <div className="toppageNav">
      <br />
      <img align="left" src ={'https://ipfs.io/ipfs/QmeMgBEWFGgQKjmz8CvVLGQuU32rT9zEykhiY4AfhEpckB?filename=Eye-Dragon-Wing2.png'}  marginLeft={"200px"} style={{ width: '475px', height: '450px', color: "#black"}} alt="adam" press here/>
      <h1 align="left">A.I.🤖 vs Binance exchange BTC/USDT Timeseries</h1>
      <h2 align="center" style={{marginLeft:'10px', marginRight:'13px'}}>NEURAL NETWORK BRAIN FUNCTION</h2>
      <h2 align="center" style={{marginLeft:'10px', marginRight:'13px'}}>EMPOWERED WITH MOCK TOKENS </h2>
      <img align="right" src ={'https://ipfs.io/ipfs/QmaUWksQmDUHhEEzctWU5kxJ7siXLjRUdM7CozDt4fLe2D?filename=The-Minter.png'} href={'https://ipfs.io/ipfs/QmWRdonnmgFYUZEUUAQzenp2jeCyRiVkq8Ryp5H49mFrpz'} marginLeft={"200px"} style={{ width: '475px', height: '450px' }} alt="adam"/>
  <h5 align="center" style={{marginLeft:'25px'}}>POWERED BY BRAIN.JS, CHART JS, REDUX AND REACT APP</h5>
      <br />
    </div>
  <div className="navbar">
  </div>

  <div className="info" align = "center">

  <h1>◻️Introduction◻️</h1>
  <div className='para-one'>
  <h4>This project is build out of passion for big Data analytic</h4>
    <h4>In other words extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions.</h4>
    <h4>This is were the experimental part comes in.</h4>
    <h4>For years the common stock invester strategy was buy low sell high and some other factors abviously. But the era is now and decentralized networks are changing the map.</h4>
    <h4>The road map for this app is to introduce a neural network to compute behaviour and use the network to simply act like a mirror.</h4>
    <h4>The latess prices of the assets are then compared with the target predicted value of the neural network.</h4>
    <h4>The theory is the neural network can predict at 98% accuracy all the time understanding this would lead you to understand that if the latess values is</h4>
    <h4>below the predicted price it is that the asset is below it's self no matter if price want up or down.</h4>
    <h4>The question is not about if the sea level is rizing or not it's about if in this fluxtuating ocean, is the asset better or worse then it's own should of been value.</h4>
    <h4>If the neural network is a fair guy, the should of been value(predicted value) can be used as mesurement from one asset verse an other asset</h4>
    <h4>This is a great precision tool. But to market this fair ⚖️guy I have much to do.👨‍💻</h4> 
    <h4>Let's prepare four mock tokens A B C D and pair theses with O H L C individualy. exemple: tkA/O tkB/H tkC/L tkD/C</h4>
    <h4>By doing this, the neural network is empowered with the market movement.</h4>
    <h4>Theses four tokens became the signature of his neural network </h4>
    <h4>The who am I?</h4>
    <img align="center" src ={Signature} marginLeft={"200px"} marginBottom={"200px"} style={{ width: '350px', height: '300px' }} alt="adam"/>
    <h1>◻️Word from the developer◻️</h1>
    <h4>This is were the magic🪄 begins, using brain.js neural network to predict trends📈. But truly were to start?🤔</h4>
    <h4>Working with brain js teleported me back 44 years ago, when I could just understand that mixing lots of colors together equals black.</h4> 
    <h4>I was a kid😛 playing with water colors. And we all know that observation, is the child's secret, mixing all thoses colors and learning in the process.</h4>
    <h3 align="center">‼️ BOUYA ‼️ 🤣 ‼️ I WAS REAL GOOD AT MAKING BLACK ‼️ 🤣 ‼️</h3>
    <h5>‼️ ⚠️ ‼️ ADVISERY ‼️ ⚠️ ‼️ NO FINANCIAL ‼️ ⚠️ ‼️ ADVISERY ‼️ ⚠️ ‼️</h5>
    <h1>💝‼️ WELCOME ‼️ 📈📉 ‼️ WELCOME ‼️ 📈📉 ‼️ WELCOME ‼️💝</h1>
  </div>
    
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
 

          <h4>The Training array snapshot📸.</h4>
          <Line className='snap-shot' 
           data={state.data} options={{responsive: true}}
         />
         <div className='tinker-minter'>
           <h1 className='tinker-title'>
             THE TINKER MINTER BTC OBSERVATORY
           </h1>
           <img align="center" src ={'https://ipfs.io/ipfs/QmaUWksQmDUHhEEzctWU5kxJ7siXLjRUdM7CozDt4fLe2D?filename=The-Minter.png'}  style={{ width: '270px', height: '295px' }} alt="adam"/>
           <h3 className='tinker-title'>
             (TEST VERSION 1.0.0)
           </h3>
           
         <button className='btns-wrapperA' onClick={() => setInterval(() => {fetchData("momentum")}, 60100)}>⏳START 1 MIN INTERVAL</button>
           <button className='btns-wrapperB' onClick={(() => {fetchData()})}>🕳️INSERT TRAINNING DATA📃📃... NOW🕳️</button>
           <div className='init-amount-backg'>
           
          

           <div className='initial-Amount'>
           <div onChange={e => setlatessDaiAcc(e.target.value)} />
           <h1 align="right">🧐</h1>
           <h2 align='auto'> SPECULATIVE TINKER BRAIN ACCOUNT </h2>
           <h3>| { latessDaiAccount } |</h3>
           <img align="left" src ={walletGoodImage}  style={{ width: '65px', height: '65px', marginTop: '10px' }} alt="adam"/>
           </div>

           </div>
           <div className='mini-navbar-I'>
         <a className= 'the-link-projects' href={'http://sweet-firefly-8768.on.fleek.co'}>BTC TINKER 1M</a>
         <a className= 'the-link-projects' href={'http://a.i.eth-observatory.surge.sh'}>ETH TINKER 1M</a>
         <a className= 'the-link-projects' href={'http://a.i.ltc-observatory.surge.sh'}>LTC TINKER 1M</a>
         <a className= 'the-link-projects' href={'http://a.i.comp-observatory.surge.sh'}>COMP TINKER 1M</a>
         <a className= 'the-link-projects' href={'http://a.i.link-observatory.surge.sh'}>LINK TINKER 1M</a>
         <a className= 'the-link-projects' href={'http://a.i.aave-observatory.surge.sh'}>AAVE TINKER 1M</a>
         <a className= 'the-link-projects' href={'http://a.i.snx-observatory.surge.sh'}>SNX TINKER 1M</a>
         <a className= 'the-link-projects' href={'http://a.i.doge-observatory.surge.sh'}>DOGE TINKER 1M</a>
         </div>
      <div className='moch-tokens' >
      <div className='maxSupA'>
           <input onChange={e => setSupplyA(e.target.value)} />
           <img  src ={brainImage2}  style={{ width: '45px', height: '45px', marginTop: '10px' }} alt="adam"/>
           <h4>|  BRAIN TOKEN A MAX SUPPLY  | {SupplyA} |</h4>
           <input onChange={e => setInitAmountOP(e.target.value)} />
           <h4>|  PRICE PER UNIT  | {InitAmountopen / SupplyA} |</h4>
           <h4>|  BTC OPEN🔴 % MOVE  | {percentMoveO} |</h4>
           <h4>|  BRAIN BALANCE  | {InitAmountopen * percentMoveO} |</h4>
           </div>

           <div className='maxSupB'>
           <input onChange={e => setSupplyB(e.target.value)} />
           <img  src ={brainImage2}  style={{ width: '45px', height: '45px', marginTop: '10px' }} alt="adam"/>
           <h4>| BRAIN TOKEN B MAX SUPPLY | {SupplyB} |</h4>
           <input onChange={e => setInitAmountHGH(e.target.value)} />
           <h4>| PRICE PER UNIT | {InitAmounthigh / SupplyB} |</h4>
           <h4>| BTC HIGH🔵 % MOVE | {percentMoveH} |</h4>
           <h4>| BRAIN BALANCE | {InitAmounthigh * percentMoveH} |</h4>
           </div>

           <div className='maxSupC'>
           <input onChange={e => setSupplyC(e.target.value)} />
           <img  src ={brainImage2}  style={{ width: '45px', height: '45px', marginTop: '10px' }} alt="adam"/>
           <h4>| BRAIN TOKEN C MAX SUPPLY | {SupplyC} |</h4>
           <input onChange={e => setInitAmountLW(e.target.value)} />
           <h4>| PRICE PER UNIT | {InitAmountlow / SupplyC} |</h4>
           <h4>| BTC LOW🟡 % MOVE | {percentMoveL} |</h4>
           <h4>| BRAIN BALANCE | {InitAmountlow * percentMoveL} |</h4>
           </div>

           <div className='maxSupD'>
           <input onChange={e => setSupplyD(e.target.value)} />
           <img  src ={brainImage2}  style={{ width: '45px', height: '45px', marginTop: '10px' }} alt="adam"/>
           <h4>| BRAIN TOKEN D MAX SUPPLY | {SupplyD} |</h4>
           <input onChange={e => setInitAmountCL(e.target.value)} />
           <h4>| PRICE PER UNIT | {InitAmountclose / SupplyD} |</h4>
           <h4>| BTC CLOSE🟢 % MOVE | {percentMoveC} |</h4>
           <h4>| BRAIN BALANCE | {InitAmountclose * percentMoveC} |</h4>
           </div>
      </div>
      <div className='dai-amount-backg'>
           <div className='dai-Amount'>    
           <img  src ={brainImage2}  style={{ width: '45px', height: '45px', marginTop: '10px' }} alt="adam"/>
           <h4>INITIAL MOCK INVESTEMENT: {(InitAmountopen * percentMoveO) + (InitAmounthigh * percentMoveH) + (InitAmountlow * percentMoveL) + (InitAmountclose * percentMoveC)}</h4>
           </div>
           </div>
         </div>

         <div className= 'projects-link' >
         <div className='mini-navbar-II'>
         <img className='the-image-projects' src ={'https://ipfs.io/ipfs/QmTTabZTHf7ejwTJxUwNR9g15aCV9Q65yD5UvdQb7qfwMm?filename=Dragon-Head.png'} alt="adam"/>
         <a className= 'the-link-projects' href={'http://crypto-flowers.surge.sh/'}> ☣️NFT-testnet-rinkeby☣️ CRYPTO-FLOWERS GALLERY</a>
          </div>         
         </div>
          </div>
          <div style={{marginBottom: '100px'}}>
          </div>
         {state.loading && <p>Loading...</p>}
          </div>
          </div>
        <div className='container'>

        <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🔴PREDICTED OPEN🔴</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3> PREDICTED OPEN VERSES LATESS OPEN PRICE </h3>
         <Line
         data={stateB.dataOPEN} options={{responsive: true}}
         />
         </div>

         <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🔴EXPERIMENTAL OPEN TRIGGER🔴</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3>🔴EXPERIMENTAL </h3>
            <Line
         data={stateB.dataTimeTwistOPEN} options={{responsive: true}}
         />
         </div>



         <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🔵PREDICTED HIGH🔵</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3>PREDICTED HIGH VERSES LATESS HIGH PRICE </h3>
         <Line
         data={stateB.dataHIGH} options={{responsive: true}}
         />
         </div>

         
         <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🔵EXPERIMENTAL HIGH TRIGGER🔵</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3>🔵EXPERIMENTAL</h3>
            <Line
         data={stateB.dataTimeTwistHIGH} options={{responsive: true}}
         />
         </div>



         <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🟡PREDICTED LOW🟡</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3> PREDICTED LOW VERSES LATESS LOW PRICE</h3>
         <Line
         data={stateB.dataLOW} options={{responsive: true}}
         />
         </div>




         <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🟡EXPERIMENTAL LOW TRIGGER🟡</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3>🟡EXPERIMENTAL</h3>
            <Line
         data={stateB.dataTimeTwistLOW} options={{responsive: true}}
         />
         </div>


           <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🟢PREDICTED CLOSE🟢</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3>EXPERIMENTAL TRIGGER LINES CONTINUE... </h3>
         <Line
         data={stateB.dataCLOSE} options={{responsive: true}}
         />
         </div>


         <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🟢EXPERIMENTAL CLOSE TRIGGER🟢</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3>🟢EXPERIMENTAL</h3>

         <Line
         data={stateB.dataTimeTwist} options={{responsive: true}}
         />
         </div>

           <div className='chartA-I-result' style={{height:'60%', width:'fit-content(100)'}}>
            <h2 align = 'center'>🔴🔵🟡🟢EXPERIMENTAL OPEN HIGH LOW CLOSE TRIGGER🟢🟡🔵🔴</h2>
            <h5 align = 'center'>BTC/USDT TICKER📈</h5>
            <h3>EXPERIMENTAL TRIGGER LINES CONTINUE... </h3>

         <Line
         data={stateB.dataG} options={{responsive: true}}
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
         <div className='bottom-nav' >
          <img src ={'https://ipfs.io/ipfs/QmTTabZTHf7ejwTJxUwNR9g15aCV9Q65yD5UvdQb7qfwMm?filename=Dragon-Head.png'} href={'https://ipfs.io/ipfs/QmWRdonnmgFYUZEUUAQzenp2jeCyRiVkq8Ryp5H49mFrpz'} style={{ width: '385px', marginTop: '3%', height: '400px' }} alt="adam" button here/>
          <div>
           <h1 align='center' style={{marginTop: '75px'}}>Road Map</h1>
           <h4 align='center'>The projet concists of targeting a fair price of any asset leading to take advantage when price is temporarly depressed</h4>
           </div>
          <div align="center" style={{ width: '60%', height: '50%', marginLeft: '20%', marginBottom: '1%', backgroundColor: 'rgba(3, 0, 0, 0.1)' }}>
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
SOME STUFF:
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

             
             </div>
 <input onChange={e => setNum(e.target.value)} />
        <div className='chartB-II-result' style={{height:'60%', width:'fit-content(100)'}}>
           <h2 align = 'center'>⚪THE PRICE FORCE AND TREND DIRECTION⚪</h2>
           <h5 align = 'center'>BTC/USDT TICKER📈</h5>
           <h3> CHART NUMBER #2 </h3>

         <Line
         data={stateB.dataH} options={{responsive: true}}
         />
         </div>

         (InitAmountopen * percentMoveO) + (InitAmounthigh * percentMoveH) + (InitAmountlow * percentMoveL) + (InitAmountclose * percentMoveC)

*/
