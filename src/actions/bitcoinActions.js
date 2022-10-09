import axios from "axios";
import brain from 'brain.js/src/index';


const config = {
  binaryThresh: 0.05,
  log: false, 
  learningRate: 0.3,
  momentum: 0.08,
  hiddenLayers: [4,4,4,12,6,3], // array of ints for the sizes of the hidden layers in the network
  activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};
// INITIALIZING FOUR NEW NEURAL NETWORK INSTANCES 
const OpNNPredictorBrain = new brain.NeuralNetwork(config);
const HighPredictionBrain = new brain.NeuralNetwork(config);
const LowPredictionBrain = new brain.NeuralNetwork(config);
const ClosePredictionBrain = new brain.NeuralNetwork(config);
//  INITIALIZING LAYER TWO NEURAL NETWORK INSTANCES
const OpenReAquiredTarget = new brain.NeuralNetwork(config);
const OpenReAquiredTargetHG = new brain.NeuralNetwork(config);
const OpenReAquiredTargetCL = new brain.NeuralNetwork(config);
const OpenReAquiredTargetLW = new brain.NeuralNetwork(config);

//const timeStamp = [];


//THE A.I. PREDICTION RESULT: INITIALIZING ARRAYS OHLC

const OpenBrainResulta = [];
const CloseBrainResulta = [];
const HighBrainResulta = [];
const LowBrainResulta = [];

const OpenBrainResultb = [];
const CloseBrainResultb = [];
const HighBrainResultb = [];
const LowBrainResultb = [];

const OpenBrainResultc = [];
const CloseBrainResultc = [];
const HighBrainResultc = [];
const LowBrainResultc = [];

const OpenBrainResultd = [];
const CloseBrainResultd = [];
const HighBrainResultd = [];
const LowBrainResultd = [];

const OpenBrainResulte = [];
const CloseBrainResulte = [];
const HighBrainResulte = [];
const LowBrainResulte = [];

const OpenBrainResultf = [];
const CloseBrainResultf = [];
const HighBrainResultf = [];
const LowBrainResultf = [];


// LAYER TWO RE-AQUIRED TARGET PRICE OF ASSET OHLC
const LayerIIOpenResult = [];
const LayerIIOpenResultElem1 = [];
const LayerIIHighResult = [];
const LayerIIHighResultElem2 = [];
const LayerIILowResult = [];
const LayerIILowResultElem3 = [];
const LayerIICloseResult = [];
const LayerIICloseResultElem4 = [];
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




///////////////////////
export const mailBox  = []
//INITIALIZING ARRAYS FOR THE AXIOS GET FUNCTION 
  
    const globalLength = [];
    const TempepoxNum = [];
    const TempXhigh = [];
    const TempXopen = [];
    const TempXlow = [];
    const TempXclose = [];

    mailBox.push( 
      TempXhigh ,
      TempXopen,
      TempXlow,
      TempXclose
    )
    
    const TempCHepoxNum = [];
    const TempCHXopen = [];
    const TempCHXhigh = [];
    const TempCHXlow = [];
    const TempCHXclose = [];

    //console.log('CHECKING THE ARRAY******************** AFTER THE RESPONSE CALL AND DOES NOT EXCCED 1000: ',TempXopen.length)
    let increment = [];
    let trigger = increment;

     //console.log('------------------------here--:ZZZ value increment test',increment)

export const getData = ({ time, number, momentum }) => async dispatch => {

  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })

//console.log('///////////////////////DISPATCH--STARTED------------//////////////');
  
    trigger++;
    increment.push(trigger)
    //console.log('INCREMENT TRIGGER: ', increment[trigger])
  
    let positionOfArray = increment.length
    //console.log('---increment[positionOfArray]---here--: INCREMENT DEV TEST MUST START AT 0:500: ', 'TRIGGER: ', trigger, 'Pos-Array: ', positionOfArray, 'Pos-ArrayTrigger: ', positionOfTrigger)
    //console.log('B-CHECKING THE ARRAY***DEV--TEST***reponceXopen*** AFTER A SPLICE TASK : ',TempXopen.length, TempXopen )
   
    /*
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, 5);
*/
              
  //THE ACTUAL IMPLEMENTATION OF THE AXIOS GET FUNCTION ***REMINDER BINANCE MAX CALL IS 500 
const responseA = await axios.get(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m`);
//Percentage.push(responseA.data[499][1] - responseA.data[498][1]);

//console.log(Percentage)
if(TempepoxNum.length >= 500)
{
  var vbv = responseA.data.length -1;
  TempepoxNum.push(responseA.data[vbv][0])
  TempXopen.push(responseA.data[vbv][1]);
  TempXhigh.push(responseA.data[vbv][2]);
  TempXlow.push(responseA.data[vbv][3]);
  TempXclose.push(responseA.data[vbv][4]);
}else
{
  for (let i = 0; i < (responseA.data.length); i++) {
    globalLength.push(responseA.data.length);
    TempepoxNum.push(responseA.data[i][0]);
    TempXopen.push(responseA.data[i][1]);
    TempXhigh.push(responseA.data[i][2]); 
    TempXlow.push(responseA.data[i][3]);
    TempXclose.push(responseA.data[i][4]);
}
}
if(TempCHepoxNum.length >= 500){
  var vbz = responseA.data.length -1;
  TempCHepoxNum.push(responseA.data[vbz][0])
  TempCHXopen.push(responseA.data[vbz][1]);
  TempCHXhigh.push(responseA.data[vbz][2]);
  TempCHXlow.push(responseA.data[vbz][3]);
  TempCHXclose.push(responseA.data[vbz][4]); 

}else{
  for (let i = 0; i < (responseA.data.length); i++) {
  TempCHepoxNum.push(responseA.data[i][0])
  TempCHXopen.push(responseA.data[i][1]);
  TempCHXhigh.push(responseA.data[i][2]);
  TempCHXlow.push(responseA.data[i][3]);
  TempCHXclose.push(responseA.data[i][4]); 
}
}


//console.log('CH-EPOX: ', TempCHepoxNum, 'CH-O: ', TempCHXopen,'CH-H: ', TempCHXhigh,'CH-L: ', TempCHXlow,'CH-C: ', TempCHXclose);
 
    
  //  let valueX = TempXopen.length;

    //console.log('EPOX: ', TempepoxNum, 'O: ', TempXopen,'H: ', TempXhigh,'L: ', TempXlow,'C: ', TempXclose);
  
    //console.log('******MASTER X EPOX-NUMBER | OPEN | HIGH | LOW | CLOSE: ',TempCHepoxNum, TempCHXopen , TempCHXhigh, TempXlow, TempCHXclose)
    //console.log('CHECKING THE ARRAY AFTER THE RESPONSE CALL AND DOES NOT EXCCED 1000: ',TempCHXopen.length, 'vs the valueX: ', valueX)



    const chartLength = [];
    chartLength.push(TempXopen.length)

    
    //INITIALIZE SOME ARRAYS FOR TASKS
    const ThePrice = [];
    const HighPrice = [];
    const LowPrice = [];
    const ClosePrice = [];

    //console.log(epoxNum.length)
    //console.log(globalLength[0], 'ClosePrice: ', ClosePrice)



//THE TASKS TO PROPOGATE THE DATA FOR THOSE INITIAL ARRAYS 

for(let i = 0; i < TempXopen.length; i++)
{
  var fff = 0;
  if (i < 0) {fff = i - 1}else{fff = i}
    ThePrice.push(TempXopen[fff]);      
    HighPrice.push(TempXhigh[fff]);     
    LowPrice.push(TempXlow[fff]); 
    ClosePrice.push(TempXclose[fff]);
}


/*
      console.log('***************OPEN ***********', ThePrice)
      console.log('***************HIGH ***********', HighPrice);
      console.log('***************LOW ***********', LowPrice);
      console.log('***************CLOSE ***********', ClosePrice);
*/

// CONSOLE LOG ANY THING THAT MIGHT HELP YOU BUILD A BETTER FUTUR 
/*
console.log(Date.now())
console.log('OPEN PRICE: ', TempXopen[0], '-: ', ThePrice[ThePrice.length -1]);
console.log('HIGH PRICE: ', TempXhigh[0], '-: ', HighPrice[HighPrice.length -1]);
console.log('LOW PRICE: ', TempXlow[0], '-: ', LowPrice[LowPrice.length -1]);  
console.log('CLOSE PRICE: ',TempXclose[0], '-: ', ClosePrice[ClosePrice.length -1]);
 */
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

    for (let i = 0; i < (TempXopen.length); i++) {
    var ddd = 0;
      if(i < 0){ddd = i - 1}else{ddd = i}
        highMA.push(TempXhigh[ddd]) 
        labels.push(TempepoxNum[ddd]) 
        open.push(TempXopen[ddd]) 
        high.push(TempXhigh[ddd]) 
        close.push(TempXclose[ddd]) 
        low.push(TempXlow[ddd])  
        openMA.push(TempXopen[ddd])
        highMA.push(TempXhigh[ddd])
        lowMA.push(TempXlow[ddd])
        closeMA.push(TempXclose[ddd])
      

      
      if (i === (number - 1)) {
        break;
      }
    }
 

    //////////////////////////////************************************GLOBAL NORMALIZATION VALUE HERE ANY TIME YOU CHANGE ASSETS  */
    ///////EXAMPLE BITCOIN PRICE AVERAGES AROUND 5 DIGITS 10 000 AND ABOVE IS 5 DIGITS BY * 0.00001 IT NORMALIZES THE VALUE FOR THE BRAIN BETWEEN 0 AND 1
    ///////EXAMPLE ETHER PRICE AVERAGES AROUND 4 DIGITS 1000 AND ABOVE IS 4 DIGITS BY * 0.0001
    const globalNormValu = 0.00001;

////////////////////////////////******//BEGINING OF THE NEURAL NETWORK//*********

// THE OPEN PRICE NEURAL NETWORK PREDICTION BRAIN #1
    const OpenPredictedResult = [];
    //prepare fetch different position from array to insert in the push STILL IN ACTIVE DEVELOPEMENT LAYER@2.0.0
    for (let i = 0; i < TempXopen.length; i++) {
    var a = i + 4;//5 start array
    if (a > TempXopen.length-1) { a = i };
    var b = i + 3;//4 start array
    if (b > TempXopen.length-1) { b = i };
    var c = i + 2;//3 start array
    if (c > TempXopen.length-1) { c = i };
    var d = i + 1;//2 start array
    if (d > TempXopen.length-1) { d = i };
    var e = i;//1 start array
    if (e > TempXopen.length-1) { e = i };
    var f = 0;
    if (i > 0 ){ f = i - 1 }else{ f = i }



    var sss = TempXopen.length - 1
      OpenPredictedResult.push({
		  input: {
        hgha: TempXhigh[a] * globalNormValu,
        hghb: TempXhigh[b] * globalNormValu,
        hghc: TempXhigh[c] * globalNormValu,
        hghd: TempXhigh[d] * globalNormValu,
        hghe: TempXhigh[e] * globalNormValu,
        hghf: TempXhigh[f] * globalNormValu,
        lwa: TempXlow[a] * globalNormValu,
        lwb: TempXlow[b] * globalNormValu,
        lwc: TempXlow[c] * globalNormValu,
        lwd: TempXlow[d] * globalNormValu,
        lwe: TempXlow[e] * globalNormValu,
        lwf: TempXlow[f] * globalNormValu,
        cla: TempXclose[a] * globalNormValu,
        clb: TempXclose[b] * globalNormValu,
        clc: TempXclose[c] * globalNormValu,
        cld: TempXclose[d] * globalNormValu,
        cle: TempXclose[e] * globalNormValu,
        clf: TempXclose[i-1] * globalNormValu,
			      },
		  output: {
        opa: TempXopen[a] * globalNormValu,
        opb: TempXopen[b] * globalNormValu,
        opc: TempXopen[c] * globalNormValu,
        opd: TempXopen[d] * globalNormValu,
        ope: TempXopen[e] * globalNormValu,
        opf: TempXopen[f] * globalNormValu,
					}
        })
      }
      //console.log('BRAIN OPEN PRICE TRAINING ARRAY : ', CenterOpenBrain)

      
      OpNNPredictorBrain.train(OpenPredictedResult, {
        iterations: 20500,
        errorThresh: 0.05,
        log: false,
        learningRate: 0.29,
        momentum: momentum,
        hiddenLayers: [50], // array of ints for the sizes of the hidden layers in the network
        activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
        leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
           });
          
           
           const BrainOpenPrResult = OpNNPredictorBrain.run({

            hgha: TempXhigh[sss-5] * globalNormValu,
            hghb: TempXhigh[sss-4] * globalNormValu,
            hghc: TempXhigh[sss-3] * globalNormValu,
            hghd: TempXhigh[sss-2] * globalNormValu,
            hghe: TempXhigh[sss-1] * globalNormValu,
            hghf: TempXhigh[sss] * globalNormValu,
            lwa: TempXlow[sss-5] * globalNormValu,
            lwb: TempXlow[sss-4] * globalNormValu,
            lwc: TempXlow[sss-3] * globalNormValu,
            lwd: TempXlow[sss-2] * globalNormValu,
            lwe: TempXlow[sss-1] * globalNormValu,
            lwf: TempXlow[sss] * globalNormValu,
            cla: TempXclose[sss-5] * globalNormValu,
            clb: TempXclose[sss-4] * globalNormValu,
            clc: TempXclose[sss-3] * globalNormValu,
            cld: TempXclose[sss-2] * globalNormValu,
            cle: TempXclose[sss-1] * globalNormValu,
            clf: TempXclose[sss] * globalNormValu,

            
                    });

// THE HIGH PRICE NEURAL NETWORK PREDICTION BRAIN #2
                             const HighPredictedResult = [];
                             for (let i = 0; i < TempXhigh.length; i++) {

         
                               HighPredictedResult.push({
                                input: {
                                  opa: TempXopen[a] * globalNormValu,
                                  opb: TempXopen[b] * globalNormValu,
                                  opc: TempXopen[c] * globalNormValu,
                                  opd: TempXopen[d] * globalNormValu,
                                  ope: TempXopen[e] * globalNormValu,
                                  opf: TempXopen[f] * globalNormValu,
                                   lwa: TempXlow[a] * globalNormValu,
                                   lwb: TempXlow[b] * globalNormValu,
                                   lwc: TempXlow[c] * globalNormValu,
                                   lwd: TempXlow[d] * globalNormValu,
                                   lwe: TempXlow[e] * globalNormValu,
                                   lwf: TempXlow[f] * globalNormValu,
                                   cla: TempXclose[a] * globalNormValu,
                                   clb: TempXclose[b] * globalNormValu,
                                   clc: TempXclose[c] * globalNormValu,
                                   cld: TempXclose[d] * globalNormValu,
                                   cle: TempXclose[e] * globalNormValu,
                                   clf: TempXclose[f] * globalNormValu,
                                    },
                              output: {
                                hgha: TempXhigh[a] * globalNormValu,
                                hghb: TempXhigh[b] * globalNormValu,
                                hghc: TempXhigh[c] * globalNormValu,
                                hghd: TempXhigh[d] * globalNormValu,
                                hghe: TempXhigh[e] * globalNormValu,
                                hghf: TempXhigh[f] * globalNormValu,
                                  }
                               })
                             }
                             //console.log('BRAIN HIGH PRICE TRAINING ARRAY : ', RightHighBrain)
                      
                             HighPredictionBrain.train(HighPredictedResult, {
                                 errorThresh: 0.05,
                                 log: false, 
                                 learningRate: 0.29,
                                 momentum: momentum,
                                 hiddenLayers: [50], // array of ints for the sizes of the hidden layers in the network
                                 activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
                                 leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
                                });
                                const BrainHighPrResult = HighPredictionBrain.run({
         
                                  opa: TempXopen[sss-5] * globalNormValu,
                                  opb: TempXopen[sss-4] * globalNormValu,
                                  opc: TempXopen[sss-3] * globalNormValu,
                                  opd: TempXopen[sss-2] * globalNormValu,
                                  ope: TempXopen[sss-1] * globalNormValu,
                                  opf: TempXopen[sss] * globalNormValu,
                                   lwa: TempXlow[sss-5] * globalNormValu,
                                   lwb: TempXlow[sss-4] * globalNormValu,
                                   lwc: TempXlow[sss-3] * globalNormValu,
                                   lwd: TempXlow[sss-2] * globalNormValu,
                                   lwe: TempXlow[sss-1] * globalNormValu,
                                   lwf: TempXlow[sss] * globalNormValu,
                                   cla: TempXclose[sss-5] * globalNormValu,
                                   clb: TempXclose[sss-4] * globalNormValu,
                                   clc: TempXclose[sss-3] * globalNormValu,
                                   cld: TempXclose[sss-2] * globalNormValu,
                                   cle: TempXclose[sss-1] * globalNormValu,
                                   clf: TempXclose[sss] * globalNormValu,
                                 });

 // THE LOW PRICE NEURAL NETWORK PREDICTION BRAIN #3
                    const LowPredictedResult = [];
                    for (let i = 0; i < TempXlow.length; i++) {

                      LowPredictedResult.push({
                        input: {
                          opa: TempXopen[a] * globalNormValu,
                          opb: TempXopen[b] * globalNormValu,
                          opc: TempXopen[c] * globalNormValu,
                          opd: TempXopen[d] * globalNormValu,
                          ope: TempXopen[e] * globalNormValu,
                          opf: TempXopen[f] * globalNormValu,
                          hgha: TempXhigh[a] * globalNormValu,
                          hghb: TempXhigh[b] * globalNormValu,
                          hghc: TempXhigh[c] * globalNormValu,
                          hghd: TempXhigh[d] * globalNormValu,
                          hghe: TempXhigh[e] * globalNormValu,
                          hghf: TempXhigh[f] * globalNormValu,
                           cla: TempXclose[a] * globalNormValu,
                           clb: TempXclose[b] * globalNormValu,
                           clc: TempXclose[c] * globalNormValu,
                           cld: TempXclose[d] * globalNormValu,
                           cle: TempXclose[e] * globalNormValu,
                           clf: TempXclose[f] * globalNormValu,
                            },
                      output: {
                        lwa: TempXlow[a] * globalNormValu,
                        lwb: TempXlow[b] * globalNormValu,
                        lwc: TempXlow[c] * globalNormValu,
                        lwd: TempXlow[d] * globalNormValu,
                        lwe: TempXlow[e] * globalNormValu,
                        lwf: TempXlow[f] * globalNormValu,
                          }
                      })
                    }
                    //console.log('BRAIN LOW PRICE TRAINING ARRAY :', LeftLowBrain)
                    LowPredictionBrain.train(LowPredictedResult, {
                        errorThresh: 0.05,
                        log: false, 
                        learningRate: 0.29,
                        momentum: momentum,
                        hiddenLayers: [50], // array of ints for the sizes of the hidden layers in the network
                        activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
                        leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
                       });
                       const BrainLowPrResult = LowPredictionBrain.run({

                         opa: TempXopen[sss-5] * globalNormValu,
                        opb: TempXopen[sss-4] * globalNormValu,
                        opc: TempXopen[sss-3] * globalNormValu,
                        opd: TempXopen[sss-2] * globalNormValu,
                        ope: TempXopen[sss-1] * globalNormValu,
                        opf: TempXopen[sss] * globalNormValu,
                         hgha: TempXhigh[sss-5] * globalNormValu,
                         hghb: TempXhigh[sss-4] * globalNormValu,
                         hghc: TempXhigh[sss-3] * globalNormValu,
                         hghd: TempXhigh[sss-2] * globalNormValu,
                         hghe: TempXhigh[sss-1] * globalNormValu,
                         hghf: TempXhigh[sss] * globalNormValu,
                         cla: TempXclose[sss-5] * globalNormValu,
                         clb: TempXclose[sss-4] * globalNormValu,
                         clc: TempXclose[sss-3] * globalNormValu,
                         cld: TempXclose[sss-2] * globalNormValu,
                         cle: TempXclose[sss-1] * globalNormValu,
                         clf: TempXclose[sss] * globalNormValu,
                        });

// THE CLOSE PRICE NEURAL NETWORK PREDICTION BRAIN #4
                    const ClosePredictedResult = [];
                    for (let i = 0; i < TempXclose.length; i++) {

                      ClosePredictedResult.push({
                        input: {
                          opa: TempXopen[a] * globalNormValu,
                          opb: TempXopen[b] * globalNormValu,
                          opc: TempXopen[c] * globalNormValu,
                          opd: TempXopen[d] * globalNormValu,
                          ope: TempXopen[e] * globalNormValu,
                          opf: TempXopen[f] * globalNormValu,
                          hgha: TempXhigh[a] * globalNormValu,
                          hghb: TempXhigh[b] * globalNormValu,
                          hghc: TempXhigh[c] * globalNormValu,
                          hghd: TempXhigh[d] * globalNormValu,
                          hghe: TempXhigh[e] * globalNormValu, 
                          hghf: TempXhigh[f] * globalNormValu,
                          lwa: TempXlow[a] * globalNormValu,
                          lwb: TempXlow[b] * globalNormValu,
                          lwc: TempXlow[c] * globalNormValu,
                          lwd: TempXlow[d] * globalNormValu,
                          lwe: TempXlow[e] * globalNormValu,
                          lwf: TempXlow[f] * globalNormValu,
                            },
                      output: {
                        cla: TempXclose[a] * globalNormValu,
                        clb: TempXclose[b] * globalNormValu,
                        clc: TempXclose[c] * globalNormValu,
                        cld: TempXclose[d] * globalNormValu,
                        cle: TempXclose[e] * globalNormValu,
                        clf: TempXclose[f] * globalNormValu,
                          }
                      })
                    }
                   // console.log('BRAIN CLOSE PRICE TRAINING ARRAY : ', CenterCloseBrain)
                    ClosePredictionBrain.train(ClosePredictedResult, {
                        errorThresh: 0.05,
                        log: false, 
                        learningRate: 0.29,
                        momentum: momentum,
                        hiddenLayers: [50], // array of ints for the sizes of the hidden layers in the network
                        activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
                        leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
                       });
                       const BrainClosePrResult = ClosePredictionBrain.run({

                        opa: TempXopen[sss-5] * globalNormValu,
                        opb: TempXopen[sss-4] * globalNormValu,
                        opc: TempXopen[sss-3] * globalNormValu,
                        opd: TempXopen[sss-2] * globalNormValu,
                        ope: TempXopen[sss-1] * globalNormValu,
                        opf: TempXopen[sss] * globalNormValu,
                         hgha: TempXhigh[sss-5] * globalNormValu,
                         hghb: TempXhigh[sss-4] * globalNormValu,
                         hghc: TempXhigh[sss-3] * globalNormValu,
                         hghd: TempXhigh[sss-2] * globalNormValu,
                         hghe: TempXhigh[sss-1] * globalNormValu,
                         hghf: TempXhigh[sss] * globalNormValu,
                         lwa: TempXlow[sss-5] * globalNormValu,
                         lwb: TempXlow[sss-4] * globalNormValu,
                         lwc: TempXlow[sss-3] * globalNormValu,
                         lwd: TempXlow[sss-2] * globalNormValu,
                         lwe: TempXlow[sss-1] * globalNormValu,
                         lwf: TempXlow[sss] * globalNormValu,
                        });

////////////////////////////////******//END OF THE FEED FORWARD NEURAL NETWORK LAYER @1.0.0 //*********

/*======================================================================*/
/////////////////////// THE FOUR MAIN PREDICTION RESULT HERE*******
OpenBrainResulta.push(BrainOpenPrResult.opa / globalNormValu);
HighBrainResulta.push(BrainHighPrResult.hgha / globalNormValu);
LowBrainResulta.push(BrainLowPrResult.lwa / globalNormValu);
CloseBrainResulta.push(BrainClosePrResult.cla / globalNormValu);

OpenBrainResultb.push(BrainOpenPrResult.opb / globalNormValu);
HighBrainResultb.push(BrainHighPrResult.hghb / globalNormValu);
LowBrainResultb.push(BrainLowPrResult.lwb / globalNormValu);
CloseBrainResultb.push(BrainClosePrResult.clb / globalNormValu);

OpenBrainResultc.push(BrainOpenPrResult.opc / globalNormValu);
HighBrainResultc.push(BrainHighPrResult.hghc / globalNormValu);
LowBrainResultc.push(BrainLowPrResult.lwc / globalNormValu);
CloseBrainResultc.push(BrainClosePrResult.clc / globalNormValu);

OpenBrainResultd.push(BrainOpenPrResult.opd / globalNormValu);
HighBrainResultd.push(BrainHighPrResult.hghd / globalNormValu);
LowBrainResultd.push(BrainLowPrResult.lwd / globalNormValu);
CloseBrainResultd.push(BrainClosePrResult.cld / globalNormValu);

OpenBrainResulte.push(BrainOpenPrResult.ope / globalNormValu);
HighBrainResulte.push(BrainHighPrResult.hghe / globalNormValu);
LowBrainResulte.push(BrainLowPrResult.lwe / globalNormValu);
CloseBrainResulte.push(BrainClosePrResult.cle / globalNormValu);

OpenBrainResultf.push(BrainOpenPrResult.opf / globalNormValu);
HighBrainResultf.push(BrainHighPrResult.hghf / globalNormValu);
LowBrainResultf.push(BrainLowPrResult.lwf / globalNormValu);
CloseBrainResultf.push(BrainClosePrResult.clf / globalNormValu);
  //console.log('OPEN BRAIN, HIGH BRAIN LOW BRAIN CLOSE BRAIN OHLC RESULT: ', OpenBrainResulta, HighBrainResult, LowBrainResult, CloseBrainResult)
  
////PREP PRICES FOR PREDICTION CHART TO FETCH ONLY THE LATESS PRICE AND DO SOME TASKS...
////EPOX NUMBER TASK
const epoxResult =[];
const openResult =[];
const highResult =[];
const lowResult =[];
const closeResult =[];

for(let i = 0; i < OpenBrainResultf.length; i++)
{   
  var ppp = 0;
 // if(i>0){ppp = 499 + i - 1}else{ppp = 499 + i}
  if(i < 1) {ppp = 499}
  if(i === 1){ppp = 500}
  if(i > 1){ppp = i + 499}
  epoxResult.push(TempCHepoxNum[ppp]);     

  openResult.push(TempCHXopen[ppp]);     

  highResult.push(TempCHXhigh[ppp]);     

  lowResult.push(TempCHXlow[ppp]);      

  closeResult.push(TempCHXclose[ppp]);      
}
//console.log("Epox Number: ", epoxResult, 'OPEN R: ', openResult, 'HIGH R: ', highResult, 'LOW R: ', lowResult, 'CLOSE R: ', closeResult);

////OPEN BRAIN RESULT TASK
  const openBrainResult =[];

for(let i = 0; i < OpenBrainResultf.length ; i++) 
{
  var jjj = 0;
  if(i<0){jjj = i - 1}else{jjj = i}
  openBrainResult.push(OpenBrainResultf[jjj])    
}
  //console.log("OPEN PREDICTED; ", openBrainResult);

////PREPAIR AVERAGE BETWEEN THE OPEN LATESS PRICE AND THE OPEN PREDICTED
  const AvgElem1OpenOpen = [];
  const Elem1 = [];
for(let i = 0; i < OpenBrainResultf.length; i++) {
  var elemOf1 = 0;
  if(i > 0){elemOf1 = i - 1}else{elemOf1 = i}
//console.log(elemOf1);
  let elemOf1B = openBrainResult[elemOf1] * globalNormValu;
//console.log('PREDICTED OPEN: ', elemOf1B);
  let elemOf1C = openResult[elemOf1] * globalNormValu;
//console.log('OPEN MARKET PRICE: ', elemOf1C);
       Elem1.push([(elemOf1C + elemOf1B) * 0.000005] / 0.0000000001); // must hand boum it lol for now! it's a simple average but has lots of depth 
        AvgElem1OpenOpen.push(Elem1);
if(AvgElem1OpenOpen.length <= i) {AvgElem1OpenOpen.push(Elem1[i])}else{}
}
//console.log('CHECKING IF I HAND BOUM IT CORRECTLY must be near the price of asset using: ', Elem1);

//console.log(AvgElem1OpenOpen);


////HIGH BRAIN RESULT TASK
  const highBrainResult = [];

  
  for(let i = 0; i < HighBrainResultf.length; i++) 
  {
    var kkk = 0;
    if(i<0){kkk = i - 1}else{kkk = i}
    highBrainResult.push(HighBrainResultf[kkk])
  }
  //console.log("HIGH PREDICTED : ", highBrainResult);

      ////PREPAIR AVERAGE BETWEEN THE HIGH LATESS PRICE AND THE HIGH PREDICTED PRICE
const AvgElem2HighHigh = [];
const Elem2 = [];
for(let i = 0; i < HighBrainResultf.length; i++) {
var elemOf2 = 0;
if(i > 0){elemOf2 = i - 1}else{elemOf2 = i}
let elemOf2B = highBrainResult[elemOf2] * globalNormValu;
//console.log('PREDICTED HIGH : ', elemOf2B);
let elemOf2C = highResult[elemOf2] * globalNormValu;
//console.log('HIGH MARKET PRICE: ', elemOf2C);
Elem2.push([(elemOf2C + elemOf2B) * 0.000005] / 0.0000000001);
AvgElem2HighHigh.push(Elem2);
if(AvgElem2HighHigh.length <= i) {AvgElem2HighHigh.push(Elem2[i])}else{}
}
//console.log(Elem2);
//console.log(AvgElem2HighHigh);

////LOW BRAIN RESULT TASK 
  const lowBrainResult = [];
  
  for(let i = 0; i < LowBrainResultf.length; i++) 
  {
    var hhh = 0;
    if(i<0){hhh = i - 1}else{hhh = i};
    lowBrainResult.push(LowBrainResultf[hhh]) 
  }
  //console.log("LOW PREDICTED : ", lowBrainResult);
  

////PREPAIR AVERAGE BETWEEN THE LOW LATESS PRICE AND THE LOW PREDICTED PRICE
const AvgElem3LowLow = [];
const Elem3 = [];
for(let i = 0; i < LowBrainResultf.length; i++) {
var elemOf3 = 0;
if(i > 0){elemOf3 = i - 1}else{elemOf3 = i}
//console.log(elemOf3);
let elemOf3B = lowBrainResult[elemOf3] * globalNormValu;
//console.log('PREDICTED LOW: ', elemOf3B);
let elemOf3C = lowResult[elemOf3] * globalNormValu;
//console.log('LOW MARKET PRICE: ', elemOf3C);
Elem3.push([(elemOf3C + elemOf3B) * 0.000005] / 0.0000000001);
AvgElem3LowLow.push(Elem3);
if(AvgElem3LowLow.length <= i) {AvgElem3LowLow.push(Elem2[i])}else{}
};
//console.log(Elem3);
//console.log(AvgElem3LowLow);

////CLOSE BRAIN RESULT TASK
  const closeBrainResult = [];

  for(let i = 0; i < CloseBrainResultf.length; i++) 
  {
    var ggg = 0;
    if(i<0){ggg =i - 1}else{ggg = i}
    closeBrainResult.push(CloseBrainResultf[ggg])
  }
  //console.log("CLOSE PREDICTED : ", closeBrainResult);

////PREPAIR AVERAGE BETWEEN CLOSE LATESS PRICE AND THE CLOSE PREDICTED PRICE
const AvgElem4CloseClose = [];
const Elem4 = [];

for(let i = 0; i < closeBrainResult.length; i++) {
var elemOf4 = 0;
if(i > 0){elemOf4 = i - 1}else{elemOf4 = i}
let elemOf4B = closeBrainResult[elemOf4] * globalNormValu;
//console.log('PREDICTED CLOSE: ', elemOf4B);
let elemOf4C = closeResult[elemOf4] * globalNormValu;

//console.log('CLOSE MARKET PRICE: ', elemOf4C);
Elem4.push([(elemOf4B + elemOf4C) * 0.000005] / 0.0000000001);
AvgElem4CloseClose.push(Elem4);
if(AvgElem4CloseClose.length <= i) {AvgElem4CloseClose.push(Elem4[i])}else{}
}
//console.log(Elem4);
//console.log(AvgElem4CloseClose);




//console.log("Incomming Latess Price : ", OpenPrice)
//console.log("Incomming Array Length : ", DataLength)
//console.log("ILP: ",opVSI)


//console.log(masterXopen[valueX] - OpenBrainResulta[0])
 //const OpenPredicted = [];

 const LowPredicted = [LowBrainResultf[positionOfArray - 1] - LowPrice[positionOfArray - 1]];
 const RealLow = [LowPrice[positionOfArray - 1] - LowBrainResultf[positionOfArray - 1]];

 const HghPredicted = [HighBrainResultf[positionOfArray - 1] - HighPrice[positionOfArray - 1]]
 const RealHigh = [HighPrice[positionOfArray - 1] - HighBrainResultf[positionOfArray - 1]];

 const ClsPredicted = [CloseBrainResultf[positionOfArray - 1] - ClosePrice[positionOfArray - 1]];
 const RealClose = [ClosePrice[positionOfArray - 1] - CloseBrainResultf[positionOfArray - 1]];

 const RvsPredicted = [ThePrice[positionOfArray - 1] - OpenBrainResulta[positionOfArray - 1]];
 //const PvsReal = [OpenBrainResult[0] - FinalPriceArray];

 ///
 /*AVERAGE OF THE 4 PREDICTED BRAIN RESULT AND THE THE 4 ELEMENTS WICH IS THE AVERAGE OF LATESS AND PREDICTED 
 ALWAY'S SAME STRUCTURE: OPEN LATESS WITH OPEN PREDICTED IS ELEM 1
                         HIGH LATESS WITH HIGH PREDICTED IS ELEM 2
                         LOW LATESS WITH LOW PREDICTED IS ELEM 3
                         CLOSE LATESS WITH CLOSE PREDICTED IS ELEM 4 
 */
 const MASTERCORE = [];
 //console.log('************:', openResult, ' and :', highResult, 'and :', lowResult, 'and:', closeResult)
 for(let i = 0; i < highBrainResult.length; i++) 
 {
   var lll = 0;
   if(i < 0){lll = i - 1}else{lll = i};
   var I = HighBrainResultf[lll] * globalNormValu;
   var II = OpenBrainResultf[lll] * globalNormValu;
   var III = CloseBrainResultf[lll] * globalNormValu;
   var IV = LowBrainResultf[lll] * globalNormValu;
   var V = Elem1[lll] * globalNormValu;
   var VI = Elem2[lll] * globalNormValu;
   var VII = Elem3[lll] * globalNormValu;
   var VIII = Elem4[lll] * globalNormValu;
   var IX = openResult[lll] * globalNormValu;
   var X = highResult[lll] * globalNormValu;
   var XI = lowResult[lll] * globalNormValu;
   var XII = closeResult[lll] * globalNormValu; 

    MASTERCORE.push((((I + II + III + IV + V + VI + VII + VIII + IX + X + XI + XII) / globalNormValu) / 12))
   // console.log('************:', Elem1[lll], ' and :', Elem2[lll], 'and :', Elem3[lll], 'and:', Elem4[lll])
  }
 // console.log("midleLine: ",midOP)

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const latessOPvs8Lines = [];
const predictedOPvs8Lines = [];
const subLatessOPvsPredicted = [];
const myAvgOPBoxFinalResult = [];
const myAvgOPBoxFinalResultB = [];
const myAvgOPBoxFinalResultI = [];
const myAvgOPBoxFinalResultIB = [];

//console.log(myAvgBoxFinalResultB)
//console.log('ARRAY TEST-------predicted---vs---subLatess---: ', predictedCloseVS8Lines, '<:>', subLatessClVSPredicted)

const myAvgOPBoxI = [];
const myAvgOPBoxResultI = [];
for(let i = 0; i < OpenBrainResultf.length; i++){
  var oooo = 0;
  if(i<0){oooo = i - 1}else{oooo = i};
  let ddso = MASTERCORE[oooo] * 0.00001;
  let ssdo = OpenBrainResultf[oooo] * 0.00001;

  predictedOPvs8Lines.push(((ddso + ssdo)  / 0.00001) / 2);
  myAvgOPBoxI.push(predictedOPvs8Lines[i]); //collect result in this box...
  myAvgOPBoxResultI.push(myAvgOPBoxI.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgOPBoxI.length);
let sddso = myAvgOPBoxResultI[oooo] * 0.00001;
myAvgOPBoxFinalResultI.push(((ddso + sddso)  / 0.00001) / 2);
myAvgOPBoxFinalResultIB.push(((ssdo + sddso)  / 0.00001) / 2);

  //console.log(predictedCloseVS8Lines[i]);
  //console.log('added ooo******', ((dds + ssd)  / 0.00001) / 2);
}
const myAvgOPBox = [];
const myAvgOPBoxResult = [];

for(let i = 0; i < OpenBrainResultf.length; i++){
  var arrayPos = 0;
  if(i<0){arrayPos = i - 1}else{arrayPos = i};

  let coreO = MASTERCORE[arrayPos] * 0.00001;
  let openRlt = openResult[arrayPos] * 0.00001;

  latessOPvs8Lines.push(((coreO + openRlt)  / 0.00001) / 2);
  myAvgOPBox.push(latessOPvs8Lines[i]);

  myAvgOPBoxResult.push(myAvgOPBox.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgOPBox.length);
  let AccAvg = myAvgOPBoxResult[arrayPos] * 0.00001;
  myAvgOPBoxFinalResult.push(((coreO + AccAvg)  / 0.00001) / 2);
  myAvgOPBoxFinalResultB.push(((openRlt + AccAvg)  / 0.00001) / 2);
 
 // console.log('added opo******', ((sds + dsd)  / 0.00001) / 2);
}

//console.log(latessCloseVS8Lines, '******VS*****', predictedCloseVS8Lines);


/* 
  if(i < 1) {ppp = 499}
  if(i === 1){ppp = 500}
  if(i > 1){ppp = i + 499}
*/

for(let i = 0; i < latessOPvs8Lines.length; i++){
  var mmmo = 0;
  if(i < 1) {mmmo = 0}
  if(i === 1){mmmo = 1}
  if(i > 1){mmmo = i }
  let mnmo = latessOPvs8Lines[mmmo];
  let nmno = predictedOPvs8Lines[mmmo]
  subLatessOPvsPredicted.push(mnmo - nmno)

  //console.log('SHOULD FLUTUATE VERY NEAR THE ZERO LINE (creating a wave)', subLatessClVSPredicted)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const latessHGHvs8Lines = [];
const predictedHGHvs8Lines = [];
const subLatessHGHvsPredicted = [];
const myAvgHGHBoxFinalResult = [];
const myAvgHGHBoxFinalResultB = [];
const myAvgHGHBoxFinalResultI = [];
const myAvgHGHBoxFinalResultIB = [];

//console.log(myAvgBoxFinalResultB)
//console.log('ARRAY TEST-------predicted---vs---subLatess---: ', predictedCloseVS8Lines, '<:>', subLatessClVSPredicted)

const myAvgHGHBoxI = [];
const myAvgHGHBoxResultI = [];
for(let i = 0; i < HighBrainResultf.length; i++){
  var oooh = 0;
  if(i<0){oooh = i - 1}else{oooh = i};
  let ddsh = MASTERCORE[oooh] * 0.00001;
  let ssdh = HighBrainResultf[oooh] * 0.00001;

  predictedHGHvs8Lines.push(((ddsh + ssdh)  / 0.00001) / 2);
  myAvgHGHBoxI.push(predictedHGHvs8Lines[i]);
  myAvgHGHBoxResultI.push(myAvgHGHBoxI.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgHGHBoxI.length);
let sddsh = myAvgHGHBoxResultI[oooh] * 0.00001;
myAvgHGHBoxFinalResultI.push(((ddsh + sddsh)  / 0.00001) / 2);
myAvgHGHBoxFinalResultIB.push(((ssdh + sddsh)  / 0.00001) / 2);

  //console.log(predictedCloseVS8Lines[i]);
  //console.log('added ooo******', ((dds + ssd)  / 0.00001) / 2);
}
const myAvgHGHBox = [];
const myAvgHGHBoxResult = [];
for(let i = 0; i < HighBrainResultf.length; i++){
  var oporr = 0;
  if(i<0){oporr = i - 1}else{oporr = i};
  let sdssh = MASTERCORE[oporr] * 0.00001;
  let dsddh = highResult[oporr] * 0.00001;
  latessHGHvs8Lines.push(((sdssh + dsddh)  / 0.00001) / 2);
  myAvgHGHBox.push(latessHGHvs8Lines[i]);
  myAvgHGHBoxResult.push(myAvgHGHBox.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgHGHBox.length);
  let dssdh = myAvgHGHBoxResult[oporr] * 0.00001;
  myAvgHGHBoxFinalResult.push(((sdssh + dssdh)  / 0.00001) / 2);
  myAvgHGHBoxFinalResultB.push(((dsddh + dssdh)  / 0.00001) / 2);
 
 // console.log('added opo******', ((sds + dsd)  / 0.00001) / 2);
}

//console.log(latessCloseVS8Lines, '******VS*****', predictedCloseVS8Lines);


/* 
  if(i < 1) {ppp = 499}
  if(i === 1){ppp = 500}
  if(i > 1){ppp = i + 499}
*/

for(let i = 0; i < latessHGHvs8Lines.length; i++){
  var mmmh = 0;
  if(i < 1) {mmmh = 0}
  if(i === 1){mmmh = 1}
  if(i > 1){mmmh = i }
  let mnmh = latessHGHvs8Lines[mmmh];
  let nmnh = predictedHGHvs8Lines[mmmh]
  subLatessHGHvsPredicted.push(mnmh - nmnh)

  //console.log('SHOULD FLUTUATE VERY NEAR THE ZERO LINE (creating a wave)', subLatessClVSPredicted)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const latessLWvs8Lines = [];
const predictedLWvs8Lines = [];
const subLatessLWvsPredicted = [];
const myAvgLWBoxFinalResult = [];
const myAvgLWBoxFinalResultB = [];
const myAvgLWBoxFinalResultI = [];
const myAvgLWBoxFinalResultIB = [];

//console.log(myAvgBoxFinalResultB)
//console.log('ARRAY TEST-------predicted---vs---subLatess---: ', predictedCloseVS8Lines, '<:>', subLatessClVSPredicted)

const myAvgLWBoxI = [];
const myAvgLWBoxResultI = [];
for(let i = 0; i < LowBrainResultf.length; i++){
  var oool = 0;
  if(i<0){oool = i - 1}else{oool = i};
  let dds = MASTERCORE[oool] * 0.00001;
  let ssd = LowBrainResultf[oool] * 0.00001;

  predictedLWvs8Lines.push(((dds + ssd)  / 0.00001) / 2);
  myAvgLWBoxI.push(predictedLWvs8Lines[i]);
  myAvgLWBoxResultI.push(myAvgLWBoxI.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgLWBoxI.length);
let sdds = myAvgLWBoxResultI[oool] * 0.00001;
myAvgLWBoxFinalResultI.push(((dds + sdds)  / 0.00001) / 2);
myAvgLWBoxFinalResultIB.push(((ssd + sdds)  / 0.00001) / 2);

  //console.log(predictedCloseVS8Lines[i]);
  //console.log('added ooo******', ((dds + ssd)  / 0.00001) / 2);
}
const myAvgLWBox = [];
const myAvgLWBoxResult = [];
for(let i = 0; i < LowBrainResultf.length; i++){
  var opor = 0;
  if(i<0){opor = i - 1}else{opor = i};
  let sdss = MASTERCORE[opor] * 0.00001;
  let dsdd = lowResult[opor] * 0.00001;
  latessLWvs8Lines.push(((sdss + dsdd)  / 0.00001) / 2);
  myAvgLWBox.push(latessLWvs8Lines[i]);
  myAvgLWBoxResult.push(myAvgLWBox.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgLWBox.length);
  let dssd = myAvgLWBoxResult[opor] * 0.00001;
  myAvgLWBoxFinalResult.push(((sdss + dssd)  / 0.00001) / 2);
  myAvgLWBoxFinalResultB.push(((dsdd + dssd)  / 0.00001) / 2);
 
 // console.log('added opo******', ((sds + dsd)  / 0.00001) / 2);
}

//console.log(latessCloseVS8Lines, '******VS*****', predictedCloseVS8Lines);


/* 
  if(i < 1) {ppp = 499}
  if(i === 1){ppp = 500}
  if(i > 1){ppp = i + 499}
*/

for(let i = 0; i < latessLWvs8Lines.length; i++){
  var mmmr = 0;
  if(i < 1) {mmmr = 0}
  if(i === 1){mmmr = 1}
  if(i > 1){mmmr = i }
  let mnm = latessLWvs8Lines[mmmr];
  let nmn = predictedLWvs8Lines[mmmr]
  subLatessLWvsPredicted.push(mnm - nmn)

  //console.log('SHOULD FLUTUATE VERY NEAR THE ZERO LINE (creating a wave)', subLatessClVSPredicted)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const latessCLVS8Lines = [];
const predictedCLVS8Lines = [];
const subLatessCLVSPredicted = [];
const myAvgCLBoxFinalResult = [];
const myAvgCLBoxFinalResultB = [];
const myAvgCLBoxFinalResultI = [];
const myAvgCLBoxFinalResultIB = [];

//console.log(myAvgBoxFinalResultB)
//console.log('ARRAY TEST-------predicted---vs---subLatess---: ', predictedCloseVS8Lines, '<:>', subLatessClVSPredicted)

const myAvgBoxI = [];
const myAvgBoxResultI = [];
for(let i = 0; i < CloseBrainResultf.length; i++){
  var ooo = 0;
  if(i<0){ooo = i - 1}else{ooo = i};
  let dds = MASTERCORE[ooo] * 0.00001;
  let ssd = CloseBrainResultf[ooo] * 0.00001;

  predictedCLVS8Lines.push(((dds + ssd)  / 0.00001) / 2);
  myAvgBoxI.push(predictedCLVS8Lines[i]);
  myAvgBoxResultI.push(myAvgBoxI.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgBoxI.length);
let sdds = myAvgBoxResultI[ooo] * 0.00001;
myAvgCLBoxFinalResultI.push(((dds + sdds)  / 0.00001) / 2);
myAvgCLBoxFinalResultIB.push(((ssd + sdds)  / 0.00001) / 2);

  //console.log(predictedCloseVS8Lines[i]);
  //console.log('added ooo******', ((dds + ssd)  / 0.00001) / 2);
}
const myAvgBox = [];
const myAvgBoxResult = [];
for(let i = 0; i < CloseBrainResultf.length; i++){
  var opo = 0;
  if(i<0){opo = i - 1}else{opo = i};
  let sds = MASTERCORE[opo] * 0.00001;
  let dsd = closeResult[opo] * 0.00001;
  latessCLVS8Lines.push(((sds + dsd)  / 0.00001) / 2);
  myAvgBox.push(latessCLVS8Lines[i]);
  myAvgBoxResult.push(myAvgBox.reduce(function (sum, value) {
    return sum + value;
}, 0) / myAvgBox.length);
  let dssd = myAvgBoxResult[opo] * 0.00001;
  myAvgCLBoxFinalResult.push(((sds + dssd)  / 0.00001) / 2);
  myAvgCLBoxFinalResultB.push(((dsd + dssd)  / 0.00001) / 2);
 
 // console.log('added opo******', ((sds + dsd)  / 0.00001) / 2);
}

//console.log(latessCloseVS8Lines, '******VS*****', predictedCloseVS8Lines);


/* 
  if(i < 1) {ppp = 499}
  if(i === 1){ppp = 500}
  if(i > 1){ppp = i + 499}
*/

for(let i = 0; i < latessCLVS8Lines.length; i++){
  var mmm = 0;
  if(i < 1) {mmm = 0}
  if(i === 1){mmm = 1}
  if(i > 1){mmm = i }
  let mnm = latessCLVS8Lines[mmm];
  let nmn = predictedCLVS8Lines[mmm]
  subLatessCLVSPredicted.push(mnm - nmn)

  //console.log('SHOULD FLUTUATE VERY NEAR THE ZERO LINE (creating a wave)', subLatessClVSPredicted)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////******BEGINNING OF LAYER TWO NEURAL NETWORK*** */
// LAYER TWO  NETWORK PREDICTION BRAIN #1 OF #4  LayerIIOpenResult
const LayerIIOpenBrain = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIIOpenBrain.push({
  input: {

       avergl: MASTERCORE[i] * globalNormValu,
          elm2: Elem2[i] * globalNormValu,
          elm3: Elem3[i] * globalNormValu,
          elm4: Elem4[i] * globalNormValu,
          obr: openBrainResult[i] * globalNormValu,
          hbr: highBrainResult[i] * globalNormValu,
          lbr: lowBrainResult[i] * globalNormValu,
          cbr: closeBrainResult[i] * globalNormValu,
          hp: TempCHXopen[i] * globalNormValu,
          lp: TempCHXopen[i] * globalNormValu,
          cp: TempCHXopen[i] * globalNormValu,
  },
  output: {
         op: TempCHXopen[i] * globalNormValu,
         elm1: Elem1[i] * globalNormValu,
         
    }
  })
}
//console.log('LAYER TWO TARGET PRICE **OPEN** TRAINING ARRAY : ', LayerIIOpenBrain)
OpenReAquiredTarget.train(LayerIIOpenBrain, {
    errorThresh: 0.005,
    log: false, 
    learningRate: 0.29,
    momentum: momentum,
    hiddenLayers: [10], // array of ints for the sizes of the hidden layers in the network
    activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
   });
   let el = Elem1.length-1
   //console.log(el)
   const LayerIIOPBrainResult = OpenReAquiredTarget.run(
     {
       avergl: MASTERCORE[el] * globalNormValu,
          elm2: Elem2[el] * globalNormValu,
          elm3: Elem3[el] * globalNormValu,
          elm4: Elem4[el] * globalNormValu,
          obr: openBrainResult[el] * globalNormValu,
          hbr: highBrainResult[el] * globalNormValu,
          lbr: lowBrainResult[el] * globalNormValu,
          cbr: closeBrainResult[el] * globalNormValu,
          hp: TempCHXopen[el] * globalNormValu,
          lp: TempCHXopen[el] * globalNormValu,
          cp: TempCHXopen[el] * globalNormValu,
    });
  
    LayerIIOpenResult.push(LayerIIOPBrainResult.op / globalNormValu);
    LayerIIOpenResultElem1.push(LayerIIOPBrainResult.elm1 / globalNormValu);
    //console.log('*******************', LayerIIOPBrainResult.op / globalNormValu, '*********');

//////////////////////////////////////////////////////////////////////////////////////////
// LAYER TWO  NETWORK PREDICTION BRAIN #2 OF #4  LayerIIHighResult
const LayerIIHighBrainPrice = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIIHighBrainPrice.push({
  input: {
        avergl: MASTERCORE[i] * globalNormValu,
          elm1: Elem1[i] * globalNormValu,
          elm3: Elem3[i] * globalNormValu,
          elm4: Elem4[i] * globalNormValu,
           obr: openBrainResult[i] * globalNormValu,
           hbr: highBrainResult[i] * globalNormValu,
           lbr: lowBrainResult[i] * globalNormValu,
           cbr: closeBrainResult[i] * globalNormValu,
           op: TempCHXhigh[i] * globalNormValu,
           lp: TempCHXhigh[i] * globalNormValu,
           cp: TempCHXhigh[i] * globalNormValu,
  },
  output: {
 
    hp: TempCHXhigh[i] * globalNormValu,
    elm2: Elem2[i] * globalNormValu,
         
    }
  })
}
//console.log('LAYER TWO TARGET PRICE **HIGH** TRAINING ARRAY : ', LayerIIHighBrainPrice)
OpenReAquiredTargetHG.train(LayerIIHighBrainPrice, {
    errorThresh: 0.005,
    log: false, 
    learningRate: 0.29,
    momentum: momentum,
    hiddenLayers: [10], // array of ints for the sizes of the hidden layers in the network
    activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
   });
   //let e = Elem1.length-1
   //console.log(el)
   const LayerIIHGBrainResult = OpenReAquiredTargetHG.run(
     {
       avergl: MASTERCORE[el] * globalNormValu,
         elm1: Elem1[el] * globalNormValu,
         elm3: Elem3[el] * globalNormValu,
         elm4: Elem4[el] * globalNormValu,
          obr: openBrainResult[el] * globalNormValu,
          hbr: highBrainResult[el] * globalNormValu,
          lbr: lowBrainResult[el] * globalNormValu,
          cbr: closeBrainResult[el] * globalNormValu,
          op: TempCHXhigh[el] * globalNormValu,
          lp: TempCHXhigh[el] * globalNormValu,
          cp: TempCHXhigh[el] * globalNormValu,
    });

    LayerIIHighResult.push(LayerIIHGBrainResult.hp / globalNormValu);
    LayerIIHighResultElem2.push(LayerIIHGBrainResult.elm2 / globalNormValu);
    //console.log(' LAYER TWO HIGH RESULT: ', LayerIIHGBrainResult.hp, ' LAYER TWO ELEMs HIGH RESULT: ', LayerIIHighResultElem2)

//////////////////////////////////////////////////////////////////////////////////
// LAYER TWO  NETWORK PREDICTION BRAIN #3 OF #4  LayerIILowResult
const LayerIILowBrainPrice = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIILowBrainPrice.push({
  input: {
       avergl: MASTERCORE[i] * globalNormValu,

          elm1: Elem1[i] * globalNormValu,
          elm2: Elem2[i] * globalNormValu,
          elm4: Elem4[i] * globalNormValu,
          obr: openBrainResult[i] * globalNormValu,
          hbr: highBrainResult[i] * globalNormValu,
          lbr: lowBrainResult[i] *globalNormValu,
          cbr: closeBrainResult[i] * globalNormValu,
          op: TempCHXlow[i] * globalNormValu,
          hp: TempCHXlow[i] * globalNormValu,
          cp: TempCHXlow[i] * globalNormValu,
  },
  output: {

    lp: TempCHXlow[i] * globalNormValu,
    elm3: Elem3[i] * globalNormValu,
         
    }
  })
}
//console.log('LAYER TWO TARGET PRICE **LOW** TRAINING ARRAY : ', LayerIILowBrainPrice)
OpenReAquiredTargetLW.train(LayerIILowBrainPrice, {
    errorThresh: 0.005,
    log: false, 
    learningRate: 0.29,
    momentum: momentum,
    hiddenLayers: [10], // array of ints for the sizes of the hidden layers in the network
    activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
   });
   //let e = Elem1.length-1
   //console.log(el)
   const LayerIILWBrainResult = OpenReAquiredTargetLW.run(
     {
        avergl: MASTERCORE[el] * globalNormValu,
          elm1: Elem1[el] * globalNormValu,
          elm2: Elem2[el] * globalNormValu,
          elm4: Elem4[el] * globalNormValu,
           obr: openBrainResult[el] * globalNormValu,
           hbr: highBrainResult[el] * globalNormValu,
           lbr: lowBrainResult[el] * globalNormValu,
           cbr: closeBrainResult[el] * globalNormValu,
           op: TempCHXlow[el] * globalNormValu,
           hp: TempCHXlow[el] * globalNormValu,
           cp: TempCHXlow[el] * globalNormValu,
    });

    LayerIILowResult.push(LayerIILWBrainResult.lp / globalNormValu);
    LayerIILowResultElem3.push(LayerIILWBrainResult.elm3 / globalNormValu);
    //console.log(' LAYER TWO LOW RESULT: ', LayerIILWBrainResult.lp, ' LAYER TWO ELEMs LOW RESULT: ', LayerIILowResultElem3);

////////////////////////////////////////////////////////////////////
// LAYER TWO  NETWORK PREDICTION BRAIN #2 OF #4  LayerIICloseResult
const LayerIICloseBrainPrice = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIICloseBrainPrice.push({
  input: {
       avergl: MASTERCORE[i] * globalNormValu,

          elm1: Elem1[i] * globalNormValu,
          elm2: Elem2[i] * globalNormValu,
          elm3: Elem3[i] * globalNormValu,
          obr: openBrainResult[i] * globalNormValu,
          hbr: highBrainResult[i] * globalNormValu,
          lbr: lowBrainResult[i] * globalNormValu,
          cbr: closeBrainResult[i] * globalNormValu,
          op: TempCHXlow[i] * globalNormValu,
          hp: TempCHXlow[i] * globalNormValu,
          lp: TempCHXlow[i] * globalNormValu,
  },
  output: {

         cp: TempCHXlow[i] * globalNormValu,
         elm4: Elem4[i] * globalNormValu,
         
    }
  })
}
//console.log('LAYER TWO TARGET PRICE **CLOSE** TRAINING ARRAY : ', LayerIICloseBrainPrice)
OpenReAquiredTargetCL.train(LayerIICloseBrainPrice, {
    errorThresh: 0.005,
    log: false, 
    learningRate: 0.29,
    momentum: momentum,
    hiddenLayers: [10], // array of ints for the sizes of the hidden layers in the network
    activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
   });
   //let e = Elem1.length-1
   //console.log(el)
   const LayerIICLBrainResult = OpenReAquiredTargetCL.run(
     {
       avergl: MASTERCORE[el] * globalNormValu,

          elm1: Elem1[el] * globalNormValu,
          elm2: Elem2[el] * globalNormValu,
          elm3: Elem3[el] * globalNormValu,
          obr: openBrainResult[el] * globalNormValu,
          hbr: highBrainResult[el] * globalNormValu,
          lbr: lowBrainResult[el] * globalNormValu,
          cbr: closeBrainResult[el] * globalNormValu,
          op: TempCHXlow[el] * globalNormValu,
          hp: TempCHXlow[el] * globalNormValu,
          lp: TempCHXlow[el] * globalNormValu,
    });

    LayerIICloseResult.push(LayerIICLBrainResult.cp / globalNormValu);
    LayerIICloseResultElem4.push(LayerIICLBrainResult.elm4 / globalNormValu);
//console.log(' LAYER TWO CLOSE RESULT: ', LayerIICLBrainResult.cp, ' LAYER TWO ELEMs CLOSE RESULT: ', LayerIICloseResultElem4);
/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////************END OF LAYER TWO NEURAL NETWORK */
/////////////////////////////////////////////////////////////////////
//ZERO LINE
function ZeroLine() {
  var x = MASTERCORE[el] - MASTERCORE[el]// this equals zero //lol :)
  theZeroLine.push(x)
}
ZeroLine()
//latest open price - the elem1 
OpenMomentumX.push(ThePrice[el] - Elem1[el]);
//console.log('herhehehehehehehe', OpenMomentumX - OpenVsMomentum);
OpenVsMomentum.push(ThePrice[el] - OpenBrainResulta[el]);
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
//console.log('/////////////////***OPEN MARKET VS OPEN PREDICTED/////////////////////////')
//console.log('###-X-MomXOpenMesurement: ', MomXOpenMesurement, ' AND: ', MomentumXOpen)
//console.log('###-Y-MomYOpenMesurement: ', MomYOpenMesurement, ' AND: ', MomentumYOpen)
//console.log('//////////////////////////////////////////////////////////////////////////')
//latess high price - the elem2
HighMomentumX.push(HighPrice[el] - Elem2[el]);
//console.log(HighMomentumX);
HighVsMomentum.push(HighPrice[el] - HighBrainResultf[el]);
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
/*
console.log('/////////////////***HIGH MARKET VS HIGH PREDICTED/////////////////////////')
console.log('###-X-MomXHighMesurement: ', MomXHighMesurement, ' AND: ', MomentumXHigh)
console.log('###-Y-MomYHighMesurement: ', MomYHighMesurement, ' AND: ', MomentumYHigh)
console.log('//////////////////////////////////////////////////////////////////////////')
*/
//latess low price - the elem3
LowMomentumX.push(LowPrice[el] - Elem3[el]);
//console.log(LowMomentumX);
LowVsMomentum.push(LowPrice[el] - LowBrainResultf[el]);
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
/*
console.log('/////////////////***LOW MARKET VS LOW PREDICTED/////////////////////////')
console.log('###-X-MomXLowMesurement: ', MomXLowMesurement, ' AND: ', MomentumXLow)
console.log('###-Y-MomYLowMesurement: ', MomYLowMesurement, ' AND: ', MomentumYLow)
console.log('////////////////////////////////////////////////////////////////////////')
*/
//latess close price - the elem4
CloseMomentumX.push(ClosePrice[el] - Elem4[el]);
//console.log(CloseMomentumX);
CloseVsMomentum.push(ClosePrice[el] - CloseBrainResultf[el]);  
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
/*
console.log('/////////////////***CLOSE MARKET VS CLOSE PREDICTED/////////////////////////')
console.log('###-X-MomXCloseMesurement: ', MomXCloseMesurement, ' AND: ', MomentumXClose)
console.log('###-Y-MomYCloseMesurement: ', MomYCloseMesurement, ' AND: ', MomentumYClose)
console.log('////////////////////////////////////////////////////////////////////////////')
*/
    //INITIALIZE SOME ARRAYS FOR TASKS

    const thePrice = [];
    const highPrice = [];
    const lowPrice = [];
    const closePrice = [];

    
    //THE TASKS TO PROPOGATE THE DATA FOR THOSE INITIAL ARRAYS 
    for (let i = 0; i < (CloseBrainResultf.length); i++){
          thePrice.push(ThePrice[i]);   
          highPrice.push(HighPrice[i]);  
          lowPrice.push(LowPrice[i]); 
          closePrice.push(ClosePrice[i]);
    }

    //console.log('***************************:',thePrice)
    //console.log(highPrice);
    //console.log(lowPrice);
    //console.log(closePrice);

    //FIRST EXPERIENCE FOR CHART
const ChartLatessOP = [];
const ChartLatessHP = [];
const ChartLatessLP = [];
const ChartLatessCP = [];
//const ZeroLine = [];
for (let i = 0; i < (ThePrice.length); i++)
{
  ChartLatessOP.push(ThePrice[i]);
}

for (let i = 0; i < (HighPrice.length); i++)
{
  ChartLatessHP.push(HighPrice[i]);
}

for (let i = 0; i < (LowPrice.length); i++)
{
  ChartLatessLP.push(LowPrice[i]);
}

for (let i = 0; i < (ClosePrice.length); i++)
{
  ChartLatessCP.push(ClosePrice[i]);
}

//console.log('THE LATESS OPEN PRICE: ', ChartLatessOP);
//console.log('THE LATESS HIGH PRICE: ', ChartLatessHP);
//console.log('THE LATESS LOW PRICE: ', ChartLatessLP);
//console.log('THE LATESS CLOSE PRICE: ', ChartLatessCP);
//latest open price and the elem1 - midOP
OpenP1.push(ChartLatessOP[el] - MASTERCORE[el]);
ElemP1.push(Elem1[el] - MASTERCORE[el]);
//latest high price and  the elem2 - midOP

HighP2.push(ChartLatessHP[el] - MASTERCORE[el]);
ElemP2.push(Elem2[el] - MASTERCORE[el]);
//latest low price and  the elem3 - midOP

LowP3.push(ChartLatessLP[el] - MASTERCORE[el]);
ElemP3.push(Elem3[el] - MASTERCORE[el]);
//latest open close and  the elem4 - midOP

CloseP4.push(ChartLatessCP[el] - MASTERCORE[el]);
ElemP4.push(Elem4[el] - MASTERCORE[el]);

//ZeroLine.push(midOP[el] - midOP[el]);

//////

mouthSize.push(Elem2[el]-Elem3[el]);
//console.log(mouthSize.length);

mouthCeilingSize.push(HighPrice[el] - Elem2[el]);
//console.log(mouthCeilingSize)
mouthFloorSize.push(LowPrice[el] - Elem3[el]);
//console.log(mouthFloorSize)
 
TongueSize.push(HighPrice[el] - LowPrice[el]);
//console.log(TongueSize.length)

BrOpToNewOp.push(Elem1[el] - OpenBrainResultf[el]);
//console.log(BrOpToNewOp);
//
BrHgToNewHg.push(Elem2[el] - HighBrainResultf[el]);
//console.log(BrHgToNewHg);
//
BrLwToNewLw.push(Elem3[el] - LowBrainResultf[el]);
//console.log(BrLwToNewLw);
//
BrClToNewCl.push(Elem4[el] - CloseBrainResultf[el]);
//console.log(BrClToNewCl);

//////////////////////////PREP ARRAYS TO SNAP SHOT NO MORE THEN 10 POSITIONS FROM LATESS AS START POINT AND A TALE OF 10 TICKS FOR CHART VIEWING CONVINIENCE

//////////
const xTicks = increment[positionOfArray]

/////////
    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
    
         xTicks,
        // Percentage,
         number,
         MASTERCORE,
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
        LayerIIOpenResultElem1,
        LayerIIHighResultElem2,
        LayerIILowResultElem3,
        LayerIICloseResultElem4,

         Elem1,
         Elem2,
         Elem3,
         Elem4,
         ThePrice,
         HighPrice,
         LowPrice,
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
        CloseBrainResulta,
        HighBrainResulta,
        LowBrainResulta,

        OpenBrainResultb,
        CloseBrainResultb,
        HighBrainResultb,
        LowBrainResultb,

        OpenBrainResultc,
        CloseBrainResultc,
        HighBrainResultc,
        LowBrainResultc,

        OpenBrainResultd,
        CloseBrainResultd,
        HighBrainResultd,
        LowBrainResultd,

        OpenBrainResulte,
        CloseBrainResulte,
        HighBrainResulte,
        LowBrainResulte,
            
         OpenBrainResultf,
         CloseBrainResultf,
         HighBrainResultf,
         LowBrainResultf,

        latessOPvs8Lines,
        predictedOPvs8Lines,
        myAvgOPBoxFinalResult,
        myAvgOPBoxFinalResultB,
        myAvgOPBoxFinalResultI,
        myAvgOPBoxFinalResultIB,

        latessHGHvs8Lines,
        predictedHGHvs8Lines,
        myAvgHGHBoxFinalResult,
        myAvgHGHBoxFinalResultB,
        myAvgHGHBoxFinalResultI,
        myAvgHGHBoxFinalResultIB,

         latessCLVS8Lines,
         predictedCLVS8Lines,
         myAvgCLBoxFinalResult,
         myAvgCLBoxFinalResultB,
         myAvgCLBoxFinalResultI,
         myAvgCLBoxFinalResultIB,

         latessLWvs8Lines,
         predictedLWvs8Lines,
         myAvgLWBoxFinalResult,
         myAvgLWBoxFinalResultB,
         myAvgLWBoxFinalResultI,
         myAvgLWBoxFinalResultIB ,

         subLatessOPvsPredicted,
         subLatessHGHvsPredicted,
         subLatessLWvsPredicted,
         subLatessCLVSPredicted,

         //avgLatessClVSPredicted,

        TempepoxNum,
        TempXopen,
        TempXhigh,
        TempXclose,
        TempXlow,

        epoxResult,
        openResult,
        highResult,
        lowResult,
        closeResult,
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

export default mailBox;






