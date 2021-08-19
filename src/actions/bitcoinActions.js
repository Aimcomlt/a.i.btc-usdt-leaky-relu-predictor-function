import axios from "axios";
import brain from 'brain.js/src/index';

// INITIALIZING FOUR NEW NEURAL NETWORK INSTANCES 
const OpenPredictionBrain = new brain.NeuralNetwork();
const HighPredictionBrain = new brain.NeuralNetwork();
const LowPredictionBrain = new brain.NeuralNetwork();
const ClosePredictionBrain = new brain.NeuralNetwork();

//const timeStamp = [];


//THE A.I. PREDICTION RESULT: INITIALIZING ARRAYS
const OpenBrainResult = [];
const CloseBrainResult = [];
const HighBrainResult = [];
const LowBrainResult = [];

    //INITIALIZING ARRAYS FOR THE AXIOS GET FUNCTION 
    //const globalValueX = [];
    const globalLength = [];
    const epoxNum = [];
    const reponseXopen = [];
    const reponseXhigh = [];
    const reponseXlow = [];
    const reponseXclose = [];

export const getData = ({ time, number }) => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })
 
  //THE ACTUAL IMPLEMENTATION OF THE AXIOS GET FUNCTION ***REMINDER BINANCE MAX CALL IS 500 
const responseA = await axios.get(`https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m`)
      for (let i = 0; i < (responseA.data.length); i++) {  
        globalLength.push(responseA.data.length)
        epoxNum.push(responseA.data[i][0]);
        reponseXopen.push(responseA.data[i][1]);
        reponseXhigh.push(responseA.data[i][2]);
        reponseXlow.push(responseA.data[i][3]);
        reponseXclose.push(responseA.data[i][4]);
       
      }
 const DataLength = epoxNum.length - 1;
   let valueX = reponseXopen.length - 1;

  
  
    //INITIALIZE SOME ARRAYS FOR TASKS

const ThePrice = [];
const HighPrice = [];
const LowPrice = [];
const ClosePrice = [];

console.log(epoxNum.length)
console.log(globalLength[0], 'ClosePrice: ', ClosePrice)

//THE TASKS TO PROPOGATE THE DATA FOR THOSE INITIAL ARRAYS 

      ThePrice.push(reponseXopen[valueX]);   
      HighPrice.push(reponseXhigh[valueX]);  
      LowPrice.push(reponseXlow[valueX]); 
      ClosePrice.push(reponseXclose[499]);


      console.log(ThePrice)
      console.log(HighPrice);
      console.log(LowPrice);
      console.log(ClosePrice);


// CONSOLE LOG ANY THING THAT MIGHT HELP YOU BUILD A BETTER FUTUR 
console.log(Date.now())
console.log('OPEN PRICE: ',reponseXopen[0], '-: ', reponseXopen[valueX]);
console.log('HIGH PRICE: ',reponseXhigh[0], '-: ', reponseXhigh[valueX]);
console.log('LOW PRICE: ',reponseXlow[0], '-: ', reponseXlow[valueX]);
console.log('CLOSE PRICE: ',reponseXclose[0], '-: ', reponseXclose[valueX]);
 
// INITIALIZING MORE ARRAYS FOR MORE TASKS 
    const labels = [];

    //THE CHART'S KLINE ARRAYS
    const open = [];
    const high = [];
    const low = [];
    const close = [];

//INITIALIZING MOVING AVERAGE ARRAYS
    const openMA = [];
    const highMA = [];
    const lowMA = [];
    const closeMA = [];

//TASK TO PROPOGATE THE KLINE DATA TO THE CHART
    for (let i = 0; i < (reponseXopen.length); i++) {
    
      highMA.push(reponseXhigh[i]) //For task check: this:)
      labels.push(epoxNum[i]) //For task check: this:)
      open.push(reponseXopen[i]) //For task check: this:)
      high.push(reponseXhigh[ i]) //For task check: this:)
      close.push(reponseXclose[i]) //For task check: this:)
      low.push(reponseXlow[i]) //For task check: this:) line...to be continued...


      openMA.push(reponseXopen[i])
      highMA.push(reponseXhigh[i])
      lowMA.push(reponseXlow[i])
      closeMA.push(reponseXclose[i])
      
             

      if (i === (number - 1)) {
        break;
      }
    }
 

////////////////////////////////******//BEGINING OF THE NEURAL NETWORK//*********

// THE OPEN PRICE NEURAL NETWORK PREDICTION BRAIN #1
    const CenterOpenBrain = [];
    for (let i = 0; i < reponseXopen.length; i++) {


      CenterOpenBrain.push({
		  input: {
			    hgh: reponseXhigh[i] * 0.0001,
			     lw: reponseXlow[i] * 0.0001,
			     cl: reponseXclose[i] * 0.0001,
			      },
		  output: {
			  op: reponseXopen[i] * 0.0001,
					}
        })
      }
      console.log('BRAIN OPEN PRICE TRAINING ARRAY : ', CenterOpenBrain)

      OpenPredictionBrain.train(CenterOpenBrain, {
        iterations: 20500,
        errorThresh: 0.0005,
        log: false,
        learningRate: 0.3,
        momentum: 0.08
           });

           const CenterOpenResult = OpenPredictionBrain.run({

                   hgh: reponseXhigh[499] * 0.0001,
                    lw: reponseXlow[499] * 0.0001,
                    cl: reponseXclose[499] * 0.0001,
                    });

// THE HIGH PRICE NEURAL NETWORK PREDICTION BRAIN #2
                             const RightHighBrain = [];
                             for (let i = 0; i < reponseXhigh.length; i++) {
         
                               RightHighBrain.push({
                                 input: {
                                     cl: reponseXclose[i] * 0.0001,
                                     lw: reponseXlow[i] * 0.0001,
                                     op: reponseXopen[i] * 0.0001,
                               },
                               output: {
                                 hgh: reponseXhigh[i] * 0.0001,
                                 }
                               })
                             }
                             console.log('BRAIN HIGH PRICE TRAINING ARRAY : ', RightHighBrain)
                      
                             HighPredictionBrain.train(RightHighBrain, {
                                 errorThresh: 0.0005,
                                 log: true, 
                                 learningRate: 0.3,
                                 momentum: 0.08
                                });
                                const RightHighResult = HighPredictionBrain.run({
         
                                 op: reponseXopen[499] * 0.0001,
                                 lw: reponseXlow[499] * 0.0001,
                                 cl: reponseXclose[499] * 0.0001
                                 });

 // THE LOW PRICE NEURAL NETWORK PREDICTION BRAIN #3
                    const LeftLowBrain = [];
                    for (let i = 0; i < reponseXlow.length; i++) {

                      LeftLowBrain.push({
                        input: {
                            hgh: reponseXhigh[i] * 0.0001,
                             cl: reponseXclose[i] * 0.0001,
                             op: reponseXopen[i] * 0.0001,
                      },
                       output: {
                             lw: reponseXlow[i] * 0.0001,
                      }
                      })
                    }
                    console.log('BRAIN LOW PRICE TRAINING ARRAY :', LeftLowBrain)
                    LowPredictionBrain.train(LeftLowBrain, {
                        errorThresh: 0.0005,
                        log: true, 
                        learningRate: 0.3,
                        momentum: 0.08
                       });
                       const LeftLowResult = LowPredictionBrain.run({

                         hgh: reponseXhigh[499] * 0.0001,
                          op: reponseXopen[499] * 0.0001,
                          cl: reponseXclose[499] * 0.0001,
                        });

// THE CLOSE PRICE NEURAL NETWORK PREDICTION BRAIN #4
                    const CenterCloseBrain = [];
                    for (let i = 0; i < reponseXclose.length; i++) {

                      CenterCloseBrain.push({
                      input: {
                            hgh: reponseXhigh[i] * 0.0001,
                             lw: reponseXlow[i] * 0.0001,
                             op: reponseXopen[i] * 0.0001,
                      },
                      output: {
                             cl: reponseXclose[i] * 0.0001,
                        }
                      })
                    }
                    console.log('BRAIN CLOSE PRICE TRAINING ARRAY : ', CenterCloseBrain)
                    ClosePredictionBrain.train(CenterCloseBrain, {
                        errorThresh: 0.0005,
                        log: true, 
                        learningRate: 0.3,
                        momentum: 0.08
                       });
                       const CenterCloseResult = ClosePredictionBrain.run({

                       hgh: reponseXhigh[499] * 0.0001,
                       lw: reponseXlow[499] * 0.0001,
                       op: reponseXopen[499] * 0.0001,
                        });

////////////////////////////////******//END OF THE NEURAL NETWORK//*********

/////////////////////// THE FOUR MAIN PREDICTION RESULT HERE*******
  OpenBrainResult.push(CenterOpenResult.op / 0.0001);
  HighBrainResult.push(RightHighResult.hgh / 0.0001);
  LowBrainResult.push(LeftLowResult.lw / 0.0001);
  CloseBrainResult.push(CenterCloseResult.cl / 0.0001);




  ////EPOXTIME TASK
  /*
const epoxArray = [];
const epoxOverFlow = [];

for(let i = 0; i <= epoxArray.length; i++) {
  var M = reponseXopen.length;
  var gogo = OpenBrainResult.length;
if(epoxArray.length < OpenBrainResult.length) {epoxArray.push(reponseXopen[i + M - gogo])}else{epoxArray.push(epoxArray[0])}   
if(epoxArray.length === OpenBrainResult.length) {epoxArray.splice(0,epoxArray[0])} 
}
console.log("Open Price: ", epoxArray)
console.log("OP over-flow array: ", epoxOverFlow)
*/
////OPEN PRICE RESULT TASK
const openPriceResult =[];
const openPriceOverFlow =[];

for(let i = 0; i <= openPriceResult.length; i++) {
  var L = reponseXopen.length;
  var gaga = OpenBrainResult.length;
if(openPriceResult.length < OpenBrainResult.length) {openPriceResult.push(reponseXopen[i + L- gaga])}else{openPriceOverFlow.push(openPriceResult[0])}   
if(openPriceResult.length === OpenBrainResult.length) {openPriceOverFlow.splice(0,openPriceResult[0])} 
}
console.log("Open Price: ", openPriceResult);
console.log("OP over-flow array: ", openPriceOverFlow);


////HIGH PRICE RESULT TASK
const highPriceResult =[];
const highPriceOverFlow =[];

for(let i = 0; i <= openPriceResult.length; i++) {
  var Lh = reponseXopen.length -1;
  var gagaH = OpenBrainResult.length;
if(highPriceResult.length < HighBrainResult.length) {highPriceResult.push(reponseXhigh[i + Lh - gagaH])}else{highPriceOverFlow.push(highPriceResult[0])}   
if(highPriceResult.length === HighBrainResult.length) {highPriceOverFlow.splice(0,highPriceResult[0])} 
}
console.log("High Price: ", highPriceResult);
console.log("HP over-flow array: ", highPriceOverFlow);

////LOW PRICE RESULT TASK
const lowPriceResult =[];
const lowPriceOverFlow =[];

for(let i = 0; i <= lowPriceResult.length; i++) {
  var Ll = reponseXopen.length -1;
  var gagaL = LowBrainResult.length;
if(lowPriceResult.length < LowBrainResult.length) {lowPriceResult.push(reponseXlow[i + Ll- gagaL])}else{lowPriceOverFlow.push(lowPriceResult[0])}   
if(lowPriceResult.length === LowBrainResult.length) {lowPriceOverFlow.splice(0,lowPriceResult[0])} 
}
console.log("Low Price: ", lowPriceResult);
console.log("LP over-flow array: ", lowPriceOverFlow);

////CLOSE PRICE RESULT TASK
const closePriceResult =[];
const closePriceOverFlow =[];

for(let i = 0; i <= openPriceResult.length; i++) {
  var Lc = reponseXclose.length;
  var gagac = OpenBrainResult.length;
if(closePriceResult.length < CloseBrainResult.length) {closePriceResult.push(reponseXclose[i + Lc- gagac])}else{closePriceOverFlow.push(closePriceResult[0])}   
if(closePriceResult.length === CloseBrainResult.length) {closePriceOverFlow.splice(0,closePriceResult[0])} 
}
console.log("Close** Price**: ", closePriceResult);
console.log("CP** over-flow array: ", closePriceOverFlow);

////OPEN BRAIN RESULT TASK
  const openBrainResult =[];
  const brOPI =[];

for(let i = 0; i < OpenBrainResult.length; i++) {
  if(openBrainResult.length <= number) {openBrainResult.push(OpenBrainResult[i])}else{brOPI.push(openBrainResult[0])}   
  if(openBrainResult.length === number) {brOPI.splice(0,openBrainResult[0])} 
}
  console.log("OPEN PREDICTED; ", openBrainResult);
  console.log("OP: ", brOPI);



////PREPAIR AVERAGE BETWEEN THE ASSET OPEN PRICE AND THE OPEN PREDICTED
  const AvgElem1OpenOpen = [];
  const Elem1 = [];
for(let i = 0; i < OpenBrainResult.length; i++) {
  var elemOf1 = i;
console.log(elemOf1);
  let elemOf1B = openBrainResult[elemOf1] * 0.0001;
console.log('PREDICTED OPEN: ', elemOf1B);
  let elemOf1C = openPriceResult[elemOf1] * 0.0001;
console.log('OPEN MARKET PRICE: ', elemOf1C);
       Elem1.push([(elemOf1C + elemOf1B) * 0.00005] / 0.00000001);
        AvgElem1OpenOpen.push(Elem1);
if(AvgElem1OpenOpen.length <= i) {AvgElem1OpenOpen.push(Elem1[i])}else{}
}
console.log(Elem1);

console.log(AvgElem1OpenOpen);


////HIGH BRAIN RESULT TASK
  const highBrainResult = [];
  const hghVSI = [];
  
  for(let i = 0; i < HighBrainResult.length; i++) {
    if(highBrainResult.length <= number) {highBrainResult.push(HighBrainResult[i])}else{hghVSI.push(highBrainResult[0])}   
    if(highBrainResult.length === number) {hghVSI.splice(0,highBrainResult[0])}                              
    }

  console.log("HIGH PREDICTED : ", highBrainResult);
  console.log("HP: ", hghVSI);

      ////PREPAIR AVERAGE BETWEEN THE ASSET HIGH PRICE AND THE HIGH PREDICTED
const AvgElem2HighHigh = [];
const Elem2 = [];
for(let i = 0; i < HighBrainResult.length; i++) {
var elemOf2 = i;
console.log(elemOf2);
let elemOf2B = highBrainResult[elemOf2] * 0.0001;
console.log('PREDICTED HIGH : ', elemOf2B);
let elemOf2C = highPriceResult[elemOf2] * 0.0001;
console.log('HIGH MARKET PRICE: ', elemOf2C);
Elem2.push([(elemOf2C + elemOf2B) * 0.00005] / 0.00000001);
AvgElem2HighHigh.push(Elem2);
if(AvgElem2HighHigh.length <= i) {AvgElem2HighHigh.push(Elem2[i])}else{}
}
console.log(Elem2);

console.log(AvgElem2HighHigh);

////LOW BRAIN RESULT TASK 
  const lowBrainResult = [];
  const lowVSI = [];
  
  for(let i = 0; i < LowBrainResult.length; i++) {
    if(lowBrainResult.length <= number) {lowBrainResult.push(LowBrainResult[i])}else{lowVSI.push(lowBrainResult[0])}   
    if(lowBrainResult.length === number) {lowVSI.splice(0,lowBrainResult[0])}                              
      }

  console.log("LOW PREDICTED : ", lowBrainResult);
  console.log("LP: ",lowVSI);

      ////PREPAIR AVERAGE BETWEEN THE ASSET LOW PRICE AND THE LOW PREDICTED
const AvgElem3LowLow = [];
const Elem3 = [];
for(let i = 0; i < LowBrainResult.length; i++) {
var elemOf3 = i;
console.log(elemOf3);
let elemOf3B = lowBrainResult[elemOf3] * 0.0001;
console.log('PREDICTED LOW: ', elemOf3B);
let elemOf3C = lowPriceResult[elemOf3] * 0.0001;
console.log('LOW MARKET PRICE: ', elemOf3C);
Elem3.push([(elemOf3C + elemOf3B) * 0.00005] / 0.00000001);
AvgElem3LowLow.push(Elem3);
if(AvgElem3LowLow.length <= i) {AvgElem3LowLow.push(Elem2[i])}else{}
};
console.log(Elem3);

console.log(AvgElem3LowLow);





////CLOSE BRAIN RESULT TASK
  const closeBrainResult = [];
  const clVSI = [];
  
  for(let i = 0; i < CloseBrainResult.length; i++) {
    if(closeBrainResult.length <= number) {closeBrainResult.push(CloseBrainResult[i])}else{clVSI.push(closeBrainResult[0])}   
    if(closeBrainResult.length === number) {clVSI.splice(0,closeBrainResult[0])}                              
    
  }
  console.log("CLOSE PREDICTED : ", closeBrainResult);
  console.log("CP: ",clVSI);



////PREPAIR AVERAGE BETWEEN THE ASSET CLOSE PRICE AND THE CLOSE PREDICTED
const AvgElem4CloseClose = [];
const Elem4 = [];

for(let i = 0; i < closeBrainResult.length; i++) {
var elemOf4 = i;
console.log(elemOf4);
let elemOf4B = closeBrainResult[elemOf4] * 0.0001;
console.log('PREDICTED CLOSE: ', elemOf4B);
let elemOf4C = closePriceResult[elemOf4] * 0.0001;

console.log('CLOSE MARKET PRICE: ', elemOf4C);
Elem4.push([(elemOf4B + elemOf4C) * 0.00005] / 0.00000001);
AvgElem4CloseClose.push(Elem4);
if(AvgElem4CloseClose.length <= i) {AvgElem4CloseClose.push(Elem4[i])}else{}
}
console.log(Elem4);

console.log(AvgElem4CloseClose);




//console.log("Incomming Latess Price : ", OpenPrice)
console.log("Incomming Array Length : ", DataLength)
//console.log("ILP: ",opVSI)


console.log(reponseXopen[valueX] - OpenBrainResult[0])

 const LowPredicted = [LowBrainResult[0] - LowPrice[0]];
 const RealLow = [LowPrice[0] - LowBrainResult[0]];

 const HghPredicted = [HighBrainResult[0] - HighPrice[0]]
 const RealHigh = [HighPrice[0] - HighBrainResult[0]];

 const ClsPredicted = [CloseBrainResult[0] - ClosePrice[0]];
 const RealClose = [ClosePrice[0] - CloseBrainResult[0]];

 const RvsPredicted = [ThePrice[valueX] - OpenBrainResult[0]];
 //const PvsReal = [OpenBrainResult[0] - FinalPriceArray];

 const midOP = [];
 const midOPI = [];
 for(let i = 0; i < highBrainResult.length; i++) {
    if(midOP.length <= number-1) {midOP.push(((HighBrainResult[i] + OpenBrainResult[i] + CloseBrainResult[i]) + LowBrainResult[i]) / 4)}else{midOPI.push(((HighBrainResult[i] + OpenBrainResult[i] + CloseBrainResult[i]) + LowBrainResult[i]) / 4)}   
    if(midOP.length === number) {midOPI.splice(0, midOP[0])}
  }
  console.log("midleLine: ",midOP)
  console.log("midleLineI: ",midOPI)
/////////////////////////////////////////////////////////////////////
    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
    
         
         number,
         midOP,
       // epoxDate,
        // epoxArray,
         Elem1,
         Elem2,
         Elem3,
         Elem4,
         ThePrice,
         openPriceResult,
         ClosePrice,
         closeBrainResult,
         highBrainResult,
         lowBrainResult,
         openBrainResult,
    


         ClsPredicted,
         RealClose,

         HghPredicted,
         RealHigh,

         LowPredicted,
         RealLow,

         RvsPredicted,
        // PvsReal,
            
         OpenBrainResult,
         CloseBrainResult,
         HighBrainResult,
         LowBrainResult,

         reponseXopen,
         reponseXhigh,
         reponseXclose,
         reponseXlow,
        // epox,
         open,
         high,
         low,
         close,
         labels
      }
    })
   
  } catch (e) {
    dispatch({
      type: "REJECTED_BITCOIN",
    })
  }
}





