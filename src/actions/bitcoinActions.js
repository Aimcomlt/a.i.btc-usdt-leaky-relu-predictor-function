import axios from "axios";
import brain from 'brain.js/src/index';

// INITIALIZING FOUR NEW NEURAL NETWORK INSTANCES 
const OpenPredictionBrain = new brain.NeuralNetwork();
const HighPredictionBrain = new brain.NeuralNetwork();
const LowPredictionBrain = new brain.NeuralNetwork();
const ClosePredictionBrain = new brain.NeuralNetwork();
//  INITIALIZING LAYER TWO NEURAL NETWORK INSTANCES
const OpenReAquiredTarget = new brain.NeuralNetwork();
const OpenReAquiredTargetHG = new brain.NeuralNetwork();
const OpenReAquiredTargetCL = new brain.NeuralNetwork();
const OpenReAquiredTargetLW = new brain.NeuralNetwork();

//const timeStamp = [];


//THE A.I. PREDICTION RESULT: INITIALIZING ARRAYS OHLC

const OpenBrainResulta = [];
const OpenBrainResultb = [];
const OpenBrainResultc = [];
const OpenBrainResultd = [];
const OpenBrainResulte = [];
const OpenBrainResultf = [];

const CloseBrainResult = [];
const HighBrainResult = [];
const LowBrainResult = [];
// LAYER TWO RE-AQUIRED TARGET PRICE OF ASSET OHLC
const LayerIIOpenResult = [];
const LayerIIHighResult = [];
const LayerIILowResult = [];
const LayerIICloseResult = [];
//some build up arrays
const mouthSize = []; //predicted high - predicted low = difference 
const mouthCeilingSize = []; //predicted high - latess market high = difference
const mouthFloorSize = []; // predicted low - latess market low = difference
const TongueSize = []; //latess market high - latess market low = difference 
const BrOpToNewOp = []; //brain open prediction vs elem1 = openPrediction + open LatesMarketPrice divide by 2 for average to scope for the difference between its self(the brain output) and a new element the latess data.This way the output can be re-used in theory into a new instance of a neural networks PS: All ways make sure that a latess data is added to any formula 
const BrHgToNewHg = [];
const BrLwToNewLw = [];
const BrClToNewCl = [];

const theZeroLine = [];

const OpenMomentumX = [];
const HighMomentumX = [];
const LowMomentumX = [];
const CloseMomentumX = [];

const OpenVsMomentum = [];
const HighVsMomentum = [];
const LowVsMomentum = [];
const CloseVsMomentum = [];

const MomentumXOpen = [];
const MomentumYOpen = [];
const MomXOpenMesurement = [];
const MomYOpenMesurement = [];

const MomentumXHigh = [];
const MomXHighMesurement = [];
const MomentumYHigh = [];
const MomYHighMesurement = [];

const MomentumXLow = [];
const MomXLowMesurement = [];
const MomentumYLow = [];
const MomYLowMesurement = [];

const MomentumXClose = [];
const MomXCloseMesurement = [];
const MomentumYClose = [];
const MomYCloseMesurement = [];


const OpenP1 = [];
const ElemP1 = [];
const HighP2 = [];
const ElemP2 = [];
const LowP3 = [];
const ElemP3 = [];
const CloseP4 = [];
const ElemP4 = [];



//INITIALIZING ARRAYS FOR THE AXIOS GET FUNCTION 
    //const globalValueX = [];
    const globalLength = [];
    const epoxNum = [];
    const reponseXopen = [];
    const reponseXhigh = [];
    const reponseXlow = [];
    const reponseXclose = [];


    console.log('CHECKING THE ARRAY******************** AFTER THE RESPONSE CALL AND DOES NOT EXCCED 1000: ',reponseXopen.length)
    let zzz = [];
    let zz = zzz;

     console.log('------------------------here--:ZZZ value increment test',zzz)
     
  
    
/*
    const epoxNumI = [];
    const brainChartA = [0];
    const brainChartB = [];
    const brainChartC = [];
    const brainChartD = [];
*/


export const getData = ({ time, number }) => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })

    zz++;
    zzz.push(zz)
    let zzzz = zzz.length - 1; 
    epoxNum.splice(zzz[zzzz], 499);
    reponseXopen.splice(zzz[zzzz], 499); 
    reponseXhigh.splice(zzz[zzzz], 499);
    reponseXlow.splice(zzz[zzzz], 499);
    reponseXclose.splice(zzz[zzzz], 499); 
    console.log('------------------------here--:ZZZ value increment test',zzz[zzzz])
    console.log('CHECKING THE ARRAY******************** AFTER THE SPLICE: ',reponseXopen.length, reponseXopen )
    //const loopBox = [];
    
  //THE ACTUAL IMPLEMENTATION OF THE AXIOS GET FUNCTION ***REMINDER BINANCE MAX CALL IS 500 
const responseA = await axios.get(`https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m`);
for (let i = 0; i < (responseA.data.length); i++) {
  globalLength.push(responseA.data.length);
  epoxNum.push(responseA.data[i][0]);
  reponseXopen.push(responseA.data[i][1]);
  reponseXhigh.push(responseA.data[i][2]);
  reponseXlow.push(responseA.data[i][3]);
  reponseXclose.push(responseA.data[i][4]);
    }
    

 
    
    


  
console.log('CHECKING THE ARRAY AFTER THE RESPONSE CALL AND DOES NOT EXCCED 1000: ',reponseXopen.length)

const chartLength = [];
chartLength.push(reponseXopen.length)

 const DataLength = epoxNum.length - 1;
   let valueX = reponseXopen.length - 1;
   console.log('CHECKING THE ARRAY AFTER THE RESPONSE CALL AND DOES NOT EXCCED 1000: ',reponseXopen.length)

  
  
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
      ClosePrice.push(reponseXclose[valueX]);


      console.log(ThePrice)
      console.log(HighPrice);
      console.log(LowPrice);
      console.log(ClosePrice);


// CONSOLE LOG ANY THING THAT MIGHT HELP YOU BUILD A BETTER FUTUR 
console.log(Date.now())
console.log('OPEN PRICE: ', reponseXopen[0], '-: ', reponseXopen[valueX]);
console.log('HIGH PRICE: ', reponseXhigh[0], '-: ', reponseXhigh[valueX]);
console.log('LOW PRICE: ', reponseXlow[0], '-: ', reponseXlow[valueX]);
console.log('CLOSE PRICE: ', reponseXclose[0], '-: ', reponseXclose[valueX]);
 
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
 

        //////////////////////////////************************************GLOBAL NORMALIZATION VALUE HERE ANY TIME YOU CHANGE ASSETS  */
    ///////EXAMPLE BITCOIN PRICE AVERAGES AROUND 5 DIGITS 10 000 AND ABOVE IS 5 DIGITS BY * 0.00001 IT NORMALIZES THE VALUE FOR THE BRAIN BETWEEN 0 AND 1
    ///////EXAMPLE ETHER PRICE AVERAGES AROUND 4 DIGITS 1000 AND ABOVE IS 4 DIGITS BY * 0.0001
    const globalNormValu = 0.0001;

////////////////////////////////******//BEGINING OF THE NEURAL NETWORK//*********

// THE OPEN PRICE NEURAL NETWORK PREDICTION BRAIN #1
    const CenterOpenBrain = [];
    //prepare fetch different position from array to insert in the push STILL INACTIVE DEVELOPEMENT LAYER@2.0.0
    for (let i = 0; i < reponseXopen.length; i++) {
    var a = i + 5;
    if (a > reponseXopen.length-1) { a = i };
    var b = i + 4;
    if (b > reponseXopen.length-1) { b = i };
    var c = i + 3;
    if (c > reponseXopen.length-1) { c = i };
    var d = i + 2;
    if (d > reponseXopen.length-1) { d = i };
    var e = i + 1;
    if (e > reponseXopen.length-1) { e = i };




      CenterOpenBrain.push({
		  input: {
			    hgha: reponseXhigh[a] * globalNormValu,
          hghb: reponseXhigh[b] * globalNormValu,
          hghc: reponseXhigh[c] * globalNormValu,
          hghd: reponseXhigh[d] * globalNormValu,
          hghe: reponseXhigh[e] * globalNormValu,
          hghf: reponseXhigh[i] * globalNormValu,
			     lwa: reponseXlow[a] * globalNormValu,
           lwb: reponseXlow[b] * globalNormValu,
           lwc: reponseXlow[c] * globalNormValu,
           lwd: reponseXlow[d] * globalNormValu,
           lwe: reponseXlow[e] * globalNormValu,
           lwf: reponseXlow[i] * globalNormValu,
			     cla: reponseXclose[a] * globalNormValu,
           clb: reponseXclose[b] * globalNormValu,
           clc: reponseXclose[c] * globalNormValu,
           cld: reponseXclose[d] * globalNormValu,
           cle: reponseXclose[e] * globalNormValu,
           clf: reponseXclose[i] * globalNormValu,
			      },
		  output: {
			  opa: reponseXopen[a] * globalNormValu,
        opb: reponseXopen[b] * globalNormValu,
        opc: reponseXopen[c] * globalNormValu,
        opd: reponseXopen[d] * globalNormValu,
        ope: reponseXopen[e] * globalNormValu,
        opf: reponseXopen[i] * globalNormValu,
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
            

                   hgha: reponseXhigh[494] * globalNormValu,
                   hghb: reponseXhigh[495] * globalNormValu,
                   hghc: reponseXhigh[496] * globalNormValu,
                   hghd: reponseXhigh[497] * globalNormValu,
                   hghe: reponseXhigh[498] * globalNormValu,
                   hghf: reponseXhigh[499] * globalNormValu,
                    lwa: reponseXlow[494] * globalNormValu,
                    lwb: reponseXlow[495] * globalNormValu,
                    lwc: reponseXlow[496] * globalNormValu,
                    lwd: reponseXlow[497] * globalNormValu,
                    lwe: reponseXlow[498] * globalNormValu,
                    lwf: reponseXlow[499] * globalNormValu,
                    cla: reponseXclose[494] * globalNormValu,
                    clb: reponseXclose[495] * globalNormValu,
                    clc: reponseXclose[496] * globalNormValu,
                    cld: reponseXclose[497] * globalNormValu,
                    cle: reponseXclose[498] * globalNormValu,
                    clf: reponseXclose[499] * globalNormValu,
                    });

// THE HIGH PRICE NEURAL NETWORK PREDICTION BRAIN #2
                             const RightHighBrain = [];
                             for (let i = 0; i < reponseXhigh.length; i++) {

         
                               RightHighBrain.push({
                                input: {
                                  opa: reponseXopen[a] * globalNormValu,
                                  opb: reponseXopen[b] * globalNormValu,
                                  opc: reponseXopen[c] * globalNormValu,
                                  opd: reponseXopen[d] * globalNormValu,
                                  ope: reponseXopen[e] * globalNormValu,
                                  opf: reponseXopen[i] * globalNormValu,
                                   lwa: reponseXlow[a] * globalNormValu,
                                   lwb: reponseXlow[b] * globalNormValu,
                                   lwc: reponseXlow[c] * globalNormValu,
                                   lwd: reponseXlow[d] * globalNormValu,
                                   lwe: reponseXlow[e] * globalNormValu,
                                   lwf: reponseXlow[i] * globalNormValu,
                                   cla: reponseXclose[a] * globalNormValu,
                                   clb: reponseXclose[b] * globalNormValu,
                                   clc: reponseXclose[c] * globalNormValu,
                                   cld: reponseXclose[d] * globalNormValu,
                                   cle: reponseXclose[e] * globalNormValu,
                                   clf: reponseXclose[i] * globalNormValu,
                                    },
                              output: {
                                hgha: reponseXhigh[a] * globalNormValu,
                                hghb: reponseXhigh[b] * globalNormValu,
                                hghc: reponseXhigh[c] * globalNormValu,
                                hghd: reponseXhigh[d] * globalNormValu,
                                hghe: reponseXhigh[e] * globalNormValu,
                                hghf: reponseXhigh[i] * globalNormValu,
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
         
                                  opa: reponseXopen[494] * globalNormValu,
                                  opb: reponseXopen[495] * globalNormValu,
                                  opc: reponseXopen[496] * globalNormValu,
                                  opd: reponseXopen[497] * globalNormValu,
                                  ope: reponseXopen[498] * globalNormValu,
                                  opf: reponseXopen[499] * globalNormValu,
                                   lwa: reponseXlow[494] * globalNormValu,
                                   lwb: reponseXlow[495] * globalNormValu,
                                   lwc: reponseXlow[496] * globalNormValu,
                                   lwd: reponseXlow[497] * globalNormValu,
                                   lwe: reponseXlow[498] * globalNormValu,
                                   lwf: reponseXlow[499] * globalNormValu,
                                   cla: reponseXclose[494] * globalNormValu,
                                   clb: reponseXclose[495] * globalNormValu,
                                   clc: reponseXclose[496] * globalNormValu,
                                   cld: reponseXclose[497] * globalNormValu,
                                   cle: reponseXclose[498] * globalNormValu,
                                   clf: reponseXclose[499] * globalNormValu,
                                 });

 // THE LOW PRICE NEURAL NETWORK PREDICTION BRAIN #3
                    const LeftLowBrain = [];
                    for (let i = 0; i < reponseXlow.length; i++) {

                      LeftLowBrain.push({
                        input: {
                          opa: reponseXopen[a] * globalNormValu,
                          opb: reponseXopen[b] * globalNormValu,
                          opc: reponseXopen[c] * globalNormValu,
                          opd: reponseXopen[d] * globalNormValu,
                          ope: reponseXopen[e] * globalNormValu,
                          opf: reponseXopen[i] * globalNormValu,
                          hgha: reponseXhigh[a] * globalNormValu,
                          hghb: reponseXhigh[b] * globalNormValu,
                          hghc: reponseXhigh[c] * globalNormValu,
                          hghd: reponseXhigh[d] * globalNormValu,
                          hghe: reponseXhigh[e] * globalNormValu,
                          hghf: reponseXhigh[i] * globalNormValu,
                           cla: reponseXclose[a] * globalNormValu,
                           clb: reponseXclose[b] * globalNormValu,
                           clc: reponseXclose[c] * globalNormValu,
                           cld: reponseXclose[d] * globalNormValu,
                           cle: reponseXclose[e] * globalNormValu,
                           clf: reponseXclose[i] * globalNormValu,
                            },
                      output: {
                        lwa: reponseXlow[a] * globalNormValu,
                        lwb: reponseXlow[b] * globalNormValu,
                        lwc: reponseXlow[c] * globalNormValu,
                        lwd: reponseXlow[d] * globalNormValu,
                        lwe: reponseXlow[e] * globalNormValu,
                        lwf: reponseXlow[i] * globalNormValu,
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

                         opa: reponseXopen[494] * globalNormValu,
                        opb: reponseXopen[495] * globalNormValu,
                        opc: reponseXopen[496] * globalNormValu,
                        opd: reponseXopen[497] * globalNormValu,
                        ope: reponseXopen[498] * globalNormValu,
                        opf: reponseXopen[499] * globalNormValu,
                         hgha: reponseXhigh[494] * globalNormValu,
                         hghb: reponseXhigh[495] * globalNormValu,
                         hghc: reponseXhigh[496] * globalNormValu,
                         hghd: reponseXhigh[497] * globalNormValu,
                         hghe: reponseXhigh[498] * globalNormValu,
                         hghf: reponseXhigh[499] * globalNormValu,
                         cla: reponseXclose[494] * globalNormValu,
                         clb: reponseXclose[495] * globalNormValu,
                         clc: reponseXclose[496] * globalNormValu,
                         cld: reponseXclose[497] * globalNormValu,
                         cle: reponseXclose[498] * globalNormValu,
                         clf: reponseXclose[499] * globalNormValu,
                        });

// THE CLOSE PRICE NEURAL NETWORK PREDICTION BRAIN #4
                    const CenterCloseBrain = [];
                    for (let i = 0; i < reponseXclose.length; i++) {

                      CenterCloseBrain.push({
                        input: {
                          opa: reponseXopen[a] * globalNormValu,
                          opb: reponseXopen[b] * globalNormValu,
                          opc: reponseXopen[c] * globalNormValu,
                          opd: reponseXopen[d] * globalNormValu,
                          ope: reponseXopen[e] * globalNormValu,
                          opf: reponseXopen[i] * globalNormValu,
                          hgha: reponseXhigh[a] * globalNormValu,
                          hghb: reponseXhigh[b] * globalNormValu,
                          hghc: reponseXhigh[c] * globalNormValu,
                          hghd: reponseXhigh[d] * globalNormValu,
                          hghe: reponseXhigh[e] * globalNormValu,
                          hghf: reponseXhigh[i] * globalNormValu,
                          lwa: reponseXlow[a] * globalNormValu,
                          lwb: reponseXlow[b] * globalNormValu,
                          lwc: reponseXlow[c] * globalNormValu,
                          lwd: reponseXlow[d] * globalNormValu,
                          lwe: reponseXlow[e] * globalNormValu,
                          lwf: reponseXlow[i] * globalNormValu,
                            },
                      output: {
                        cla: reponseXclose[a] * globalNormValu,
                        clb: reponseXclose[b] * globalNormValu,
                        clc: reponseXclose[c] * globalNormValu,
                        cld: reponseXclose[d] * globalNormValu,
                        cle: reponseXclose[e] * globalNormValu,
                        clf: reponseXclose[i] * globalNormValu,
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

                        opa: reponseXopen[494] * globalNormValu,
                        opb: reponseXopen[495] * globalNormValu,
                        opc: reponseXopen[496] * globalNormValu,
                        opd: reponseXopen[497] * globalNormValu,
                        ope: reponseXopen[498] * globalNormValu,
                        opf: reponseXopen[499] * globalNormValu,
                         hgha: reponseXhigh[494] * globalNormValu,
                         hghb: reponseXhigh[495] * globalNormValu,
                         hghc: reponseXhigh[496] * globalNormValu,
                         hghd: reponseXhigh[497] * globalNormValu,
                         hghe: reponseXhigh[498] * globalNormValu,
                         hghf: reponseXhigh[499] * globalNormValu,
                         lwa: reponseXlow[494] * globalNormValu,
                         lwb: reponseXlow[495] * globalNormValu,
                         lwc: reponseXlow[496] * globalNormValu,
                         lwd: reponseXlow[497] * globalNormValu,
                         lwe: reponseXlow[498] * globalNormValu,
                         lwf: reponseXlow[499] * globalNormValu,
                        });

////////////////////////////////******//END OF THE NEURAL NETWORK//*********


/////////////////////// THE FOUR MAIN PREDICTION RESULT HERE*******
  OpenBrainResulta.push(CenterOpenResult.opf / globalNormValu);
  OpenBrainResultb.push(CenterOpenResult.opb / globalNormValu);
  OpenBrainResultc.push(CenterOpenResult.opc / globalNormValu);
  OpenBrainResultd.push(CenterOpenResult.opd / globalNormValu);
  OpenBrainResulte.push(CenterOpenResult.ope / globalNormValu);
  OpenBrainResultf.push(CenterOpenResult.opa / globalNormValu);
  HighBrainResult.push(RightHighResult.hghf / globalNormValu);
  LowBrainResult.push(LeftLowResult.lwf / globalNormValu);
  CloseBrainResult.push(CenterCloseResult.clf / globalNormValu);
  console.log(OpenBrainResulta, HighBrainResult, LowBrainResult, CloseBrainResult)




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
////PREP OPEN PRICE FOR PREDICTION CHART TO FETCH ONLY THE LATESS PRICE 
const epoxResult =[];
const epoxOverFlow =[];

for(let i = 0; i <= epoxResult.length; i++) {
  var Lili = reponseXopen.length;
  var gago = OpenBrainResulta.length;
if(epoxResult.length < OpenBrainResulta.length) {epoxResult.push(epoxNum[i + Lili- gago])}else{epoxOverFlow.push(epoxResult[0])}   
if(epoxResult.length === OpenBrainResulta.length) {epoxOverFlow.splice(0,epoxResult[0])} 
}
console.log("Epox Number: ", epoxResult);
console.log("EPX over-flow array: ", epoxOverFlow);

////PREP OPEN PRICE FOR PREDICTION CHART TO FETCH ONLY THE LATESS PRICE 
const openPriceResult =[];
const openPriceOverFlow =[];

for(let i = 0; i <= openPriceResult.length; i++) {
  var L = reponseXopen.length;
  var gaga = OpenBrainResulta.length;
if(openPriceResult.length < OpenBrainResulta.length) {openPriceResult.push(reponseXopen[i + L- gaga])}else{openPriceOverFlow.push(openPriceResult[0])}   
if(openPriceResult.length === OpenBrainResulta.length) {openPriceOverFlow.splice(0,openPriceResult[0])} 
}
console.log("Open Price: ", openPriceResult);
console.log("OP over-flow array: ", openPriceOverFlow);


////HIGH PRICE RESULT TASK
const highPriceResult =[];
const highPriceOverFlow =[];

for(let i = 0; i <= openPriceResult.length; i++) {
  var Lh = reponseXopen.length -1;
  var gagaH = OpenBrainResulta.length;
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
  var gagac = OpenBrainResulta.length;
if(closePriceResult.length < CloseBrainResult.length) {closePriceResult.push(reponseXclose[i + Lc- gagac])}else{closePriceOverFlow.push(closePriceResult[0])}   
if(closePriceResult.length === CloseBrainResult.length) {closePriceOverFlow.splice(0,closePriceResult[0])} 
}
console.log("Close** Price**: ", closePriceResult);
console.log("CP** over-flow array: ", closePriceOverFlow);

////OPEN BRAIN RESULT TASK
  const openBrainResult =[];
  const brOPI =[];

for(let i = 0; i < OpenBrainResulta.length; i++) {
  if(openBrainResult.length <= number) {openBrainResult.push(OpenBrainResulta[i])}else{brOPI.push(openBrainResult[0])}   
  if(openBrainResult.length === number) {brOPI.splice(0,openBrainResult[0])} 
}
  console.log("OPEN PREDICTED; ", openBrainResult);
  console.log("OP: ", brOPI);



////PREPAIR AVERAGE BETWEEN THE ASSET OPEN PRICE AND THE OPEN PREDICTED
  const AvgElem1OpenOpen = [];
  const Elem1 = [];
for(let i = 0; i < OpenBrainResulta.length; i++) {
  var elemOf1 = i;
console.log(elemOf1);
  let elemOf1B = openBrainResult[elemOf1] * globalNormValu;
console.log('PREDICTED OPEN: ', elemOf1B);
  let elemOf1C = openPriceResult[elemOf1] * globalNormValu;
console.log('OPEN MARKET PRICE: ', elemOf1C);
       Elem1.push([(elemOf1C + elemOf1B) * 0.00005] / 0.00000001); // must hand boum it lol for now! it's a simple average but has lots of depth 
        AvgElem1OpenOpen.push(Elem1);
if(AvgElem1OpenOpen.length <= i) {AvgElem1OpenOpen.push(Elem1[i])}else{}
}
console.log('CHECKING IF I HAND BOUM IT CORRECTLY must be near the price of asset using: ', Elem1);

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
let elemOf2B = highBrainResult[elemOf2] * globalNormValu;
console.log('PREDICTED HIGH : ', elemOf2B);
let elemOf2C = highPriceResult[elemOf2] * globalNormValu;
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
let elemOf3B = lowBrainResult[elemOf3] * globalNormValu;
console.log('PREDICTED LOW: ', elemOf3B);
let elemOf3C = lowPriceResult[elemOf3] * globalNormValu;
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
let elemOf4B = closeBrainResult[elemOf4] * globalNormValu;
console.log('PREDICTED CLOSE: ', elemOf4B);
let elemOf4C = closePriceResult[elemOf4] * globalNormValu;

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


console.log(reponseXopen[valueX] - OpenBrainResulta[0])

 const LowPredicted = [LowBrainResult[0] - LowPrice[0]];
 const RealLow = [LowPrice[0] - LowBrainResult[0]];

 const HghPredicted = [HighBrainResult[0] - HighPrice[0]]
 const RealHigh = [HighPrice[0] - HighBrainResult[0]];

 const ClsPredicted = [CloseBrainResult[0] - ClosePrice[0]];
 const RealClose = [ClosePrice[0] - CloseBrainResult[0]];

 const RvsPredicted = [ThePrice[valueX] - OpenBrainResulta[0]];
 //const PvsReal = [OpenBrainResult[0] - FinalPriceArray];

 const midOP = [];
 const midOPI = [];
 for(let i = 0; i < highBrainResult.length; i++) {
    if(midOP.length <= number-1) {midOP.push(((HighBrainResult[i] + OpenBrainResulta[i] + CloseBrainResult[i]) + LowBrainResult[i]) / 4)}else{midOPI.push(((HighBrainResult[i] + OpenBrainResulta[i] + CloseBrainResult[i]) + LowBrainResult[i]) / 4)}   
    if(midOP.length === number) {midOPI.splice(0, midOP[0])}
  }
  console.log("midleLine: ",midOP)
  console.log("midleLineI: ",midOPI)

///////////////////////////////////////////////////////////////////////******BEGINNING OF LAYER TWO NEURAL NETWORK*** */
// LAYER TWO  NETWORK PREDICTION BRAIN #1 OF #4  LayerIIOpenResult
const LayerIIOpenBrain = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIIOpenBrain.unshift({
  input: {
       avergl: midOP[i] * globalNormValu,
         hghr: highPriceResult[i] * globalNormValu,
          lwr: lowPriceResult[i] * globalNormValu,
          clr: closePriceResult[i] * globalNormValu,
         elm1: Elem1[i] * globalNormValu,
         elm2: Elem2[i] * globalNormValu,
         elm3: Elem3[i] * globalNormValu,
         elm4: Elem4[i] * globalNormValu,
          obr: openBrainResult[i] * globalNormValu,
          hbr: highBrainResult[i] * globalNormValu,
          lbr: lowBrainResult[i] * globalNormValu,
          cbr: closeBrainResult[i] * globalNormValu
  },
  output: {
         opr: openPriceResult[i] * globalNormValu,
         
    }
  })
}
console.log('LAYER TWO TARGET PRICE **OPEN** TRAINING ARRAY : ', LayerIIOpenBrain)
OpenReAquiredTarget.train(LayerIIOpenBrain, {
    errorThresh: 0.0005,
    log: true, 
    learningRate: 0.3,
    momentum: 0.08
   });
   let el = Elem1.length-1
   console.log(el)
   const LayerIIOPBrainResult = OpenReAquiredTarget.run(
     {
       avergl: midOP[el] * globalNormValu,
         hghr: highPriceResult[el] * globalNormValu,
          lwr: lowPriceResult[el] * globalNormValu,
          clr: closePriceResult[el] * globalNormValu,
         elm1: Elem1[el] * globalNormValu,
         elm2: Elem2[el] * globalNormValu,
         elm3: Elem3[el] * globalNormValu,
         elm4: Elem4[el] * globalNormValu,
          obr: openBrainResult[el] * globalNormValu,
          hbr: highBrainResult[el] * globalNormValu,
          lbr: lowBrainResult[el] * globalNormValu,
          cbr: closeBrainResult[el] * globalNormValu
    });
    console.log('H: ', highPriceResult[el], 'L: ', lowPriceResult[el],  'C: ', closePriceResult[el], 'test H: ', highPriceResult)
    LayerIIOpenResult.push(LayerIIOPBrainResult.opr / globalNormValu);
    console.log(LayerIIOPBrainResult.opr / globalNormValu, '*********', LayerIIOpenResult)
//////////////////////////////////////////////////////////////////////////////////////////
// LAYER TWO  NETWORK PREDICTION BRAIN #2 OF #4  LayerIIHighResult
const LayerIIHighBrainPrice = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIIHighBrainPrice.unshift({
  input: {
       avergl: midOP[i] * globalNormValu,
         clr: closePriceResult[i] * globalNormValu,
          lwr: lowPriceResult[i] * globalNormValu,
          opr: openPriceResult[i] * globalNormValu,
         elm1: Elem1[i] * globalNormValu,
         elm2: Elem2[i] * globalNormValu,
         elm3: Elem3[i] * globalNormValu,
         elm4: Elem4[i] * globalNormValu,
          obr: openBrainResult[i] * globalNormValu,
          hbr: highBrainResult[i] * globalNormValu,
          lbr: lowBrainResult[i] * globalNormValu,
          cbr: closeBrainResult[i] * globalNormValu
  },
  output: {
    hghr: highPriceResult[i] * globalNormValu,
         
    }
  })
}
console.log('LAYER TWO TARGET PRICE **HIGH** TRAINING ARRAY : ', LayerIIHighBrainPrice)
OpenReAquiredTargetHG.train(LayerIIHighBrainPrice, {
    errorThresh: 0.0005,
    log: true, 
    learningRate: 0.3,
    momentum: 0.08
   });
   //let e = Elem1.length-1
   console.log(el)
   const LayerIIHGBrainResult = OpenReAquiredTargetHG.run(
     {
       avergl: midOP[el] * globalNormValu,
          clr: closePriceResult[el] * globalNormValu,
          lwr: lowPriceResult[el] * globalNormValu,
          opr: openPriceResult[el] * globalNormValu,
         elm1: Elem1[el] * globalNormValu,
         elm2: Elem2[el] * globalNormValu,
         elm3: Elem3[el] * globalNormValu,
         elm4: Elem4[el] * globalNormValu,
          obr: openBrainResult[el] * globalNormValu,
          hbr: highBrainResult[el] * globalNormValu,
          lbr: lowBrainResult[el] * globalNormValu,
          cbr: closeBrainResult[el] * globalNormValu
    });
    console.log('H: ', highPriceResult[el], 'L: ', lowPriceResult[el],  'C: ', closePriceResult[el], 'test H: ', highPriceResult)
    LayerIIHighResult.push(LayerIIHGBrainResult.hghr / globalNormValu);
console.log(' LAYER TWO HIGH RESULT: ', LayerIIHighResult)

//////////////////////////////////////////////////////////////////////////////////
// LAYER TWO  NETWORK PREDICTION BRAIN #3 OF #4  LayerIILowResult
const LayerIILowBrainPrice = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIILowBrainPrice.unshift({
  input: {
       avergl: midOP[i] * globalNormValu,
         clr: closePriceResult[i] * globalNormValu,
          lwr: lowPriceResult[i] * globalNormValu,
          opr: openPriceResult[i] * globalNormValu,
         elm1: Elem1[i] * globalNormValu,
         elm2: Elem2[i] * globalNormValu,
         elm3: Elem3[i] * globalNormValu,
         elm4: Elem4[i] * globalNormValu,
          obr: openBrainResult[i] * globalNormValu,
          hbr: highBrainResult[i] * globalNormValu,
          lbr: lowBrainResult[i] *globalNormValu,
          cbr: closeBrainResult[i] * globalNormValu
  },
  output: {
    hghr: highPriceResult[i] * globalNormValu,
         
    }
  })
}
console.log('LAYER TWO TARGET PRICE **LOW** TRAINING ARRAY : ', LayerIILowBrainPrice)
OpenReAquiredTargetLW.train(LayerIILowBrainPrice, {
    errorThresh: 0.0005,
    log: true, 
    learningRate: 0.3,
    momentum: 0.08
   });
   //let e = Elem1.length-1
   console.log(el)
   const LayerIILWBrainResult = OpenReAquiredTargetLW.run(
     {
       avergl: midOP[el] * globalNormValu,
          clr: closePriceResult[el] * globalNormValu,
          lwr: lowPriceResult[el] * globalNormValu,
          opr: openPriceResult[el] * globalNormValu,
         elm1: Elem1[el] * globalNormValu,
         elm2: Elem2[el] * globalNormValu,
         elm3: Elem3[el] * globalNormValu,
         elm4: Elem4[el] * globalNormValu,
          obr: openBrainResult[el] * globalNormValu,
          hbr: highBrainResult[el] * globalNormValu,
          lbr: lowBrainResult[el] * globalNormValu,
          cbr: closeBrainResult[el] * globalNormValu
    });
    console.log('H: ', highPriceResult[el], 'L: ', lowPriceResult[el],  'C: ', closePriceResult[el], 'test H: ', highPriceResult)
    LayerIILowResult.push(LayerIILWBrainResult.hghr / globalNormValu);
console.log(' LAYER TWO LOW RESULT: ', LayerIILowResult);

////////////////////////////////////////////////////////////////////
// LAYER TWO  NETWORK PREDICTION BRAIN #2 OF #4  LayerIICloseResult
const LayerIICloseBrainPrice = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIICloseBrainPrice.unshift({
  input: {
       avergl: midOP[i] * globalNormValu,
         hghr: highPriceResult[i] * globalNormValu,
          lwr: lowPriceResult[i] * globalNormValu,
          opr: openPriceResult[i] * globalNormValu,
         elm1: Elem1[i] * globalNormValu,
         elm2: Elem2[i] * globalNormValu,
         elm3: Elem3[i] * globalNormValu,
         elm4: Elem4[i] * globalNormValu,
          obr: openBrainResult[i] * globalNormValu,
          hbr: highBrainResult[i] * globalNormValu,
          lbr: lowBrainResult[i] * globalNormValu,
          cbr: closeBrainResult[i] * globalNormValu
  },
  output: {
         clr: closePriceResult[i] * globalNormValu,
         
    }
  })
}
console.log('LAYER TWO TARGET PRICE **CLOSE** TRAINING ARRAY : ', LayerIICloseBrainPrice)
OpenReAquiredTargetCL.train(LayerIICloseBrainPrice, {
    errorThresh: 0.0005,
    log: true, 
    learningRate: 0.3,
    momentum: 0.08
   });
   //let e = Elem1.length-1
   console.log(el)
   const LayerIICLBrainResult = OpenReAquiredTargetCL.run(
     {
       avergl: midOP[el] * globalNormValu,
         hghr: highPriceResult[el] * globalNormValu,
          lwr: lowPriceResult[el] * globalNormValu,
          opr: openPriceResult[el] * globalNormValu,
         elm1: Elem1[el] * globalNormValu,
         elm2: Elem2[el] * globalNormValu,
         elm3: Elem3[el] * globalNormValu,
         elm4: Elem4[el] * globalNormValu,
          obr: openBrainResult[el] * globalNormValu,
          hbr: highBrainResult[el] * globalNormValu,
          lbr: lowBrainResult[el] * globalNormValu,
          cbr: closeBrainResult[el] * globalNormValu
    });
    console.log('H: ', highPriceResult[el], 'L: ', lowPriceResult[el],  'C: ', closePriceResult[el], 'test H: ', highPriceResult)
    LayerIICloseResult.push(LayerIICLBrainResult.clr / globalNormValu);
console.log(' LAYER TWO CLOSE RESULT: ', LayerIICloseResult);
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////************END OF LAYER TWO NEURAL NETWORK */
/////////////////////////////////////////////////////////////////////
//ZERO LINE
function ZeroLine() {
  var x = midOP[el] - midOP[el]// this equals zero //lol :)
  theZeroLine.push(x)
}
ZeroLine()
//latest open price - the elem1 
OpenMomentumX.push(ThePrice - Elem1[el]);
//console.log('herhehehehehehehe', OpenMomentumX - OpenVsMomentum);
OpenVsMomentum.push(ThePrice - OpenBrainResulta[el]);
//console.log('hoohhoohoohooh',OpenVsMomentum - OpenMomentumX);
function openMomentumX() {

  var boxX;
  var boxXMesurement = OpenMomentumX[el] - OpenVsMomentum[el];
  if(OpenMomentumX[el] > OpenVsMomentum[el]){boxX = 1}else {boxX = 0};

  MomentumXOpen.push(boxX);
  MomXOpenMesurement.push(boxXMesurement);

}
openMomentumX()

function openMomentumY() {

  var boxY;
  var boxYMesurement = OpenVsMomentum[el] - OpenMomentumX[el];
  if(OpenVsMomentum[el] > OpenMomentumX[el]){boxY = 1}else {boxY = 0};
 
  MomentumYOpen.push(boxY);
  MomYOpenMesurement.push(boxYMesurement);
  
}
openMomentumY()
console.log('/////////////////***OPEN MARKET VS OPEN PREDICTED/////////////////////////')
console.log('###-X-MomXOpenMesurement: ', MomXOpenMesurement, ' AND: ', MomentumXOpen)
console.log('###-Y-MomYOpenMesurement: ', MomYOpenMesurement, ' AND: ', MomentumYOpen)
console.log('//////////////////////////////////////////////////////////////////////////')
//latess high price - the elem2
HighMomentumX.push(HighPrice - Elem2[el]);
//console.log(HighMomentumX);
HighVsMomentum.push(HighPrice - HighBrainResult[el]);
//console.log(HighVsMomentum);
function highMomentumX() {

  var boxX;
  var boxXMesurement = HighMomentumX[el] - HighVsMomentum[el];
  if(HighMomentumX[el] > HighVsMomentum[el]){boxX = 1}else {boxX = 0};

  MomentumXHigh.push(boxX);
  MomXHighMesurement.push(boxXMesurement);

}
highMomentumX()

function highMomentumY() {

  var boxY;
  var boxYMesurement = HighVsMomentum[el] - HighMomentumX[el];
  if(HighVsMomentum[el] > HighMomentumX[el]){boxY = 1}else {boxY = 0};
 
  MomentumYHigh.push(boxY);
  MomYHighMesurement.push(boxYMesurement);
  
}
highMomentumY()
console.log('/////////////////***HIGH MARKET VS HIGH PREDICTED/////////////////////////')
console.log('###-X-MomXHighMesurement: ', MomXHighMesurement, ' AND: ', MomentumXHigh)
console.log('###-Y-MomYHighMesurement: ', MomYHighMesurement, ' AND: ', MomentumYHigh)
console.log('//////////////////////////////////////////////////////////////////////////')
//latess low price - the elem3
LowMomentumX.push(LowPrice - Elem3[el]);
//console.log(LowMomentumX);
LowVsMomentum.push(LowPrice - LowBrainResult[el]);
//console.log(LowVsMomentum);
function lowMomentumX() {

  var boxX;
  var boxXMesurement = LowMomentumX[el] - LowVsMomentum[el];
  if(LowMomentumX[el] > LowVsMomentum[el]){boxX = 1}else {boxX = 0};

  MomentumXLow.push(boxX);
  MomXLowMesurement.push(boxXMesurement);

}
lowMomentumX()

function lowMomentumY() {

  var boxY;
  var boxYMesurement = LowVsMomentum[el] - LowMomentumX[el];
  if(LowVsMomentum[el] > LowMomentumX[el]){boxY = 1}else {boxY = 0};
 
  MomentumYLow.push(boxY);
  MomYLowMesurement.push(boxYMesurement);
  
}
lowMomentumY()
console.log('/////////////////***LOW MARKET VS LOW PREDICTED/////////////////////////')
console.log('###-X-MomXLowMesurement: ', MomXLowMesurement, ' AND: ', MomentumXLow)
console.log('###-Y-MomYLowMesurement: ', MomYLowMesurement, ' AND: ', MomentumYLow)
console.log('////////////////////////////////////////////////////////////////////////')
//latess close price - the elem4
CloseMomentumX.push(ClosePrice - Elem4[el]);
//console.log(CloseMomentumX);
CloseVsMomentum.push(ClosePrice - CloseBrainResult[el]);
//console.log(CloseVsMomentum);
function closeMomentumX() {

  var boxX;
  var boxXMesurement = CloseMomentumX[el] - CloseVsMomentum[el];
  if(CloseMomentumX[el] > CloseVsMomentum[el]){boxX = 1}else {boxX = 0};

  MomentumXClose.push(boxX);
  MomXCloseMesurement.push(boxXMesurement);

}
closeMomentumX()

function closeMomentumY() {

  var boxY;
  var boxYMesurement = CloseVsMomentum[el] - CloseMomentumX[el];
  if(CloseVsMomentum[el] > CloseMomentumX[el]){boxY = 1}else {boxY = 0};
 
  MomentumYClose.push(boxY);
  MomYCloseMesurement.push(boxYMesurement);
  
}
closeMomentumY()
console.log('/////////////////***CLOSE MARKET VS CLOSE PREDICTED/////////////////////////')
console.log('###-X-MomXCloseMesurement: ', MomXCloseMesurement, ' AND: ', MomentumXClose)
console.log('###-Y-MomYCloseMesurement: ', MomYCloseMesurement, ' AND: ', MomentumYClose)
console.log('////////////////////////////////////////////////////////////////////////////')

    //INITIALIZE SOME ARRAYS FOR TASKS

    const thePrice = [];
    const highPrice = [];
    const lowPrice = [];
    const closePrice = [];

    
    //THE TASKS TO PROPOGATE THE DATA FOR THOSE INITIAL ARRAYS 
    for (let i = 0; i < (CloseBrainResult.length); i++){
          thePrice.push(reponseXopen[i]);   
          highPrice.push(reponseXhigh[i]);  
          lowPrice.push(reponseXlow[i]); 
          closePrice.push(reponseXclose[i]);
    }

    console.log('***************************:',thePrice)
    console.log(highPrice);
    console.log(lowPrice);
    console.log(closePrice);

    //FIRST EXPERIENCE FOR CHART
const ChartLatessOP = [];
const ChartLatessHP = [];
const ChartLatessLP = [];
const ChartLatessCP = [];
//const ZeroLine = [];
for (let i = 0; i < (CloseBrainResult.length); i++){
  //let b = reponseXopen.length - i;
  let c = reponseXopen.length - 1;

  ChartLatessOP.unshift(reponseXopen[c - i]);

}
for (let i = 0; i < (CloseBrainResult.length); i++){
  //let b = reponseXopen.length - i;

  let d = reponseXhigh.length - 1;


  ChartLatessHP.unshift(reponseXhigh[d - i]);

}
for (let i = 0; i < (CloseBrainResult.length); i++){
  //let b = reponseXopen.length - i;

  let f = reponseXlow.length - 1;


  ChartLatessLP.unshift(reponseXlow[f - i]);

}
for (let i = 0; i < (CloseBrainResult.length); i++){
  //let b = reponseXopen.length - i;

  let g = reponseXclose.length - 1;

  ChartLatessCP.unshift(reponseXclose[g - i]);
}
console.log('AAAAAAAAAAAAAAAAAAA: ', ChartLatessOP);
console.log('AAAAAAAAAAAAAAAAAAA: ', ChartLatessHP);
console.log('AAAAAAAAAAAAAAAAAAA: ', ChartLatessLP);
console.log('AAAAAAAAAAAAAAAAAAA: ', ChartLatessCP);
//latest open price and the elem1 - midOP
OpenP1.push(ChartLatessOP[el] - midOP[el]);
ElemP1.push(Elem1[el] - midOP[el]);
//latest high price and  the elem2 - midOP

HighP2.push(ChartLatessHP[el] - midOP[el]);
ElemP2.push(Elem2[el] - midOP[el]);
//latest low price and  the elem3 - midOP

LowP3.push(ChartLatessLP[el] - midOP[el]);
ElemP3.push(Elem3[el] - midOP[el]);
//latest open close and  the elem4 - midOP

CloseP4.push(ChartLatessCP[el] - midOP[el]);
ElemP4.push(Elem4[el] - midOP[el]);

//ZeroLine.push(midOP[el] - midOP[el]);

//////

mouthSize.push(Elem2[el]-Elem3[el]);
console.log(mouthSize.length);

mouthCeilingSize.push(HighPrice - Elem2[el]);
console.log(mouthCeilingSize)
mouthFloorSize.push(LowPrice - Elem3[el]);
console.log(mouthFloorSize)
 
TongueSize.push(HighPrice - LowPrice);
console.log(TongueSize.length)

BrOpToNewOp.push(Elem1[el] - OpenBrainResulta[el]);
console.log(BrOpToNewOp);
//
BrHgToNewHg.push(Elem2[el] - HighBrainResult[el]);
console.log(BrHgToNewHg);
//
BrLwToNewLw.push(Elem3[el] - LowBrainResult[el]);
console.log(BrLwToNewLw);
//
BrClToNewCl.push(Elem4[el] - CloseBrainResult[el]);
console.log(BrClToNewCl);
 
/////////
    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
    
         
         number,
         midOP,
       // epoxDate,
        // epoxArray,
        OpenVsMomentum,
        HighVsMomentum,
        LowVsMomentum,
        CloseVsMomentum,
        OpenMomentumX,
        HighMomentumX,
        LowMomentumX,
        CloseMomentumX,


        theZeroLine,

        MomentumXOpen,
        MomentumYOpen,
        MomXOpenMesurement,
        MomYOpenMesurement,

        MomentumXHigh,
        MomXHighMesurement,
        MomentumYHigh,
        MomYHighMesurement,

        MomentumXLow,
        MomXLowMesurement,
        MomentumYLow,
        MomYLowMesurement,

        MomentumXClose,
        MomXCloseMesurement,
        MomentumYClose,
        MomYCloseMesurement,

        TongueSize, //THE PRICE OF ASSET HIGH vs LOW
        mouthCeilingSize,//high predicted vs high latess
        mouthFloorSize, //low predicted vs low latess
        mouthSize, //THE BRAIN PREDICTION HIGH vs LOW
        LayerIIOpenResult,
        LayerIIHighResult,
        LayerIILowResult,
        LayerIICloseResult,

         Elem1,
         Elem2,
         Elem3,
         Elem4,
         ThePrice,
         epoxResult,
         openPriceResult,
         closePriceResult,
         ClosePrice,
         closeBrainResult,
         highBrainResult,
         lowBrainResult,
         openBrainResult,

         OpenP1,
         ElemP1,
         HighP2,
         ElemP2,
         LowP3,
         ElemP3,
         CloseP4,
         ElemP4,
        // ZeroLine,
    


         ClsPredicted,
         RealClose,

         HghPredicted,
         RealHigh,

         LowPredicted,
         RealLow,

         RvsPredicted,
        // PvsReal,
        BrOpToNewOp,
        BrHgToNewHg,
        BrLwToNewLw,
        BrClToNewCl,
            
         OpenBrainResulta,
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





