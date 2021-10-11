import axios from "axios";
import brain from 'brain.js/src/index';


const config = {
  binaryThresh: 0.5,
  log: true, 
  learningRate: 0.3,
  momentum: 0.08,
  hiddenLayers: [10, 10], // array of ints for the sizes of the hidden layers in the network
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

//INITIALIZING ARRAYS FOR THE AXIOS GET FUNCTION 
  
    const globalLength = [];
    const TempepoxNum = [];
    const TempXopen = [];
    const TempXhigh = [];
    const TempXlow = [];
    const TempXclose = [];
    
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
if(TempepoxNum.length >= 500){
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
console.log('CH-EPOX: ', TempCHepoxNum, 'CH-O: ', TempCHXopen,'CH-H: ', TempCHXhigh,'CH-L: ', TempCHXlow,'CH-C: ', TempCHXclose);
 
    
    let valueX = TempXopen.length;

    console.log('EPOX: ', TempepoxNum, 'O: ', TempXopen,'H: ', TempXhigh,'L: ', TempXlow,'C: ', TempXclose);
  
    console.log('******MASTER X EPOX-NUMBER | OPEN | HIGH | LOW | CLOSE: ',TempCHepoxNum, TempCHXopen , TempCHXhigh, TempXlow, TempCHXclose)
    console.log('CHECKING THE ARRAY AFTER THE RESPONSE CALL AND DOES NOT EXCCED 1000: ',TempCHXopen.length, 'vs the valueX: ', valueX)



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
  
  if (i !== 0) 
  {  ThePrice.push(TempXopen[i - 1]);      
    HighPrice.push(TempXhigh[i - 1]);     
    LowPrice.push(TempXlow[i - 1]); 
    ClosePrice.push(TempXclose[i - 1]);
  }else{
    ThePrice.push(TempXopen[i]);      
    HighPrice.push(TempXhigh[i]);     
    LowPrice.push(TempXlow[i]); 
    ClosePrice.push(TempXclose[i]);
  }

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
    
      if(i !== 0){
        highMA.push(TempXhigh[i-1]) 
        labels.push(TempepoxNum[i-1]) 
        open.push(TempXopen[i-1]) 
        high.push(TempXhigh[i-1]) 
        close.push(TempXclose[i-1]) 
        low.push(TempXlow[i-1])  
        openMA.push(TempXopen[i-1])
        highMA.push(TempXhigh[i-1])
        lowMA.push(TempXlow[i-1])
        closeMA.push(TempXclose[i-1])
      }else{
        highMA.push(TempXhigh[i]) 
        labels.push(TempepoxNum[i]) 
        open.push(TempXopen[i]) 
        high.push(TempXhigh[i])
        close.push(TempXclose[i])
        low.push(TempXlow[i]) 
        openMA.push(TempXopen[i])
        highMA.push(TempXhigh[i])
        lowMA.push(TempXlow[i])
        closeMA.push(TempXclose[i])
      }

      
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
    const CenterOpenBrain = [];
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
      CenterOpenBrain.push({
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

      
      OpNNPredictorBrain.train(CenterOpenBrain, {
        iterations: 20500,
        errorThresh: 0.005,
        log: false,
        learningRate: 0.29,
        momentum: momentum,
        hiddenLayers: [10, 10], // array of ints for the sizes of the hidden layers in the network
        activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
        leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
           });
          
           
           const CenterOpenResult = OpNNPredictorBrain.run({

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
                             const RightHighBrain = [];
                             for (let i = 0; i < TempXhigh.length; i++) {

         
                               RightHighBrain.push({
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
                      
                             HighPredictionBrain.train(RightHighBrain, {
                                 errorThresh: 0.005,
                                 log: false, 
                                 learningRate: 0.29,
                                 momentum: momentum,
                                 hiddenLayers: [10, 10], // array of ints for the sizes of the hidden layers in the network
                                 activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
                                 leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
                                });
                                const RightHighResult = HighPredictionBrain.run({
         
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
                    const LeftLowBrain = [];
                    for (let i = 0; i < TempXlow.length; i++) {

                      LeftLowBrain.push({
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
                    LowPredictionBrain.train(LeftLowBrain, {
                        errorThresh: 0.005,
                        log: false, 
                        learningRate: 0.29,
                        momentum: momentum,
                        hiddenLayers: [10, 10], // array of ints for the sizes of the hidden layers in the network
                        activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
                        leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
                       });
                       const LeftLowResult = LowPredictionBrain.run({

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
                    const CenterCloseBrain = [];
                    for (let i = 0; i < TempXclose.length; i++) {

                      CenterCloseBrain.push({
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
                    ClosePredictionBrain.train(CenterCloseBrain, {
                        errorThresh: 0.005,
                        log: false, 
                        learningRate: 0.29,
                        momentum: momentum,
                        hiddenLayers: [10, 10], // array of ints for the sizes of the hidden layers in the network
                        activation: 'leaky-relu', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
                        leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
                       });
                       const CenterCloseResult = ClosePredictionBrain.run({

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
  OpenBrainResulta.push(CenterOpenResult.opf / globalNormValu);
  OpenBrainResultb.push(CenterOpenResult.opb / globalNormValu);
  OpenBrainResultc.push(CenterOpenResult.opc / globalNormValu);
  OpenBrainResultd.push(CenterOpenResult.opd / globalNormValu);
  OpenBrainResulte.push(CenterOpenResult.ope / globalNormValu);
  OpenBrainResultf.push(CenterOpenResult.opa / globalNormValu);
  HighBrainResult.push(RightHighResult.hghf / globalNormValu);
  LowBrainResult.push(LeftLowResult.lwf / globalNormValu);
  CloseBrainResult.push(CenterCloseResult.clf / globalNormValu);
  //console.log('OPEN BRAIN, HIGH BRAIN LOW BRAIN CLOSE BRAIN OHLC RESULT: ', OpenBrainResulta, HighBrainResult, LowBrainResult, CloseBrainResult)
  
////PREP PRICES FOR PREDICTION CHART TO FETCH ONLY THE LATESS PRICE AND DO SOME TASKS...
////EPOX NUMBER TASK
const epoxResult =[];
const openResult =[];
const highResult =[];
const lowResult =[];
const closeResult =[];

for(let i = 0; i < TempCHepoxNum.length; i++)
{   
  epoxResult.push(TempCHepoxNum[i - 1]);     

  openResult.push(TempCHXopen[i - 1]);     

  highResult.push(TempCHXhigh[i - 1]);     

  lowResult.push(TempCHXlow[i - 1]);      

  closeResult.push(TempCHXclose[i - 1]);      
}
console.log("Epox Number: ", epoxResult[epoxResult.length -1], 'OPEN R: ', openResult[openResult.length -1], 'HIGH R: ', highResult[highResult.length -1], 'LOW R: ', lowResult[lowResult.length -1], 'CLOSE R: ', closeResult[closeResult.length -1]);

////OPEN BRAIN RESULT TASK
  const openBrainResult =[];

for(let i = 0; i < positionOfArray ; i++) 
{
  openBrainResult.push(OpenBrainResulta[i-1])    
}
  //console.log("OPEN PREDICTED; ", openBrainResult);

////PREPAIR AVERAGE BETWEEN THE OPEN LATESS PRICE AND THE OPEN PREDICTED
  const AvgElem1OpenOpen = [];
  const Elem1 = [];
for(let i = 0; i < OpenBrainResulta.length; i++) {
  var elemOf1 = i;
//console.log(elemOf1);
  let elemOf1B = openBrainResult[elemOf1] * globalNormValu;
//console.log('PREDICTED OPEN: ', elemOf1B);
  let elemOf1C = TempCHXopen[elemOf1] * globalNormValu;
//console.log('OPEN MARKET PRICE: ', elemOf1C);
       Elem1.push([(elemOf1C + elemOf1B) * 0.000005] / 0.0000000001); // must hand boum it lol for now! it's a simple average but has lots of depth 
        AvgElem1OpenOpen.push(Elem1);
if(AvgElem1OpenOpen.length <= i) {AvgElem1OpenOpen.push(Elem1[i])}else{}
}
//console.log('CHECKING IF I HAND BOUM IT CORRECTLY must be near the price of asset using: ', Elem1);

//console.log(AvgElem1OpenOpen);


////HIGH BRAIN RESULT TASK
  const highBrainResult = [];

  
  for(let i = 0; i < positionOfArray; i++) 
  {
    highBrainResult.push(HighBrainResult[i-1])
  }
  //console.log("HIGH PREDICTED : ", highBrainResult);

      ////PREPAIR AVERAGE BETWEEN THE HIGH LATESS PRICE AND THE HIGH PREDICTED PRICE
const AvgElem2HighHigh = [];
const Elem2 = [];
for(let i = 0; i < HighBrainResult.length; i++) {
var elemOf2 = i;
//console.log(elemOf2);
let elemOf2B = highBrainResult[elemOf2] * globalNormValu;
//console.log('PREDICTED HIGH : ', elemOf2B);
let elemOf2C = TempCHXhigh[elemOf2] * globalNormValu;
//console.log('HIGH MARKET PRICE: ', elemOf2C);
Elem2.push([(elemOf2C + elemOf2B) * 0.000005] / 0.0000000001);
AvgElem2HighHigh.push(Elem2);
if(AvgElem2HighHigh.length <= i) {AvgElem2HighHigh.push(Elem2[i])}else{}
}
//console.log(Elem2);
//console.log(AvgElem2HighHigh);

////LOW BRAIN RESULT TASK 
  const lowBrainResult = [];
  
  for(let i = 0; i < positionOfArray; i++) 
  {
    lowBrainResult.push(LowBrainResult[i-1]) 
  }
  //console.log("LOW PREDICTED : ", lowBrainResult);
  

////PREPAIR AVERAGE BETWEEN THE LOW LATESS PRICE AND THE LOW PREDICTED PRICE
const AvgElem3LowLow = [];
const Elem3 = [];
for(let i = 0; i < LowBrainResult.length; i++) {
var elemOf3 = i;
//console.log(elemOf3);
let elemOf3B = lowBrainResult[elemOf3] * globalNormValu;
//console.log('PREDICTED LOW: ', elemOf3B);
let elemOf3C = TempCHXlow[elemOf3] * globalNormValu;
//console.log('LOW MARKET PRICE: ', elemOf3C);
Elem3.push([(elemOf3C + elemOf3B) * 0.000005] / 0.0000000001);
AvgElem3LowLow.push(Elem3);
if(AvgElem3LowLow.length <= i) {AvgElem3LowLow.push(Elem2[i])}else{}
};
//console.log(Elem3);
//console.log(AvgElem3LowLow);

////CLOSE BRAIN RESULT TASK
  const closeBrainResult = [];

  for(let i = 0; i < positionOfArray; i++) 
  {
    closeBrainResult.push(CloseBrainResult[i-1])
  }
  //console.log("CLOSE PREDICTED : ", closeBrainResult);

////PREPAIR AVERAGE BETWEEN CLOSE LATESS PRICE AND THE CLOSE PREDICTED PRICE
const AvgElem4CloseClose = [];
const Elem4 = [];

for(let i = 0; i < closeBrainResult.length; i++) {
var elemOf4 = i;
//console.log(elemOf4);
let elemOf4B = closeBrainResult[elemOf4] * globalNormValu;
//console.log('PREDICTED CLOSE: ', elemOf4B);
let elemOf4C = TempCHXclose[elemOf4] * globalNormValu;

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

 const LowPredicted = [LowBrainResult[positionOfArray - 1] - LowPrice[positionOfArray - 1]];
 const RealLow = [LowPrice[positionOfArray - 1] - LowBrainResult[positionOfArray - 1]];

 const HghPredicted = [HighBrainResult[positionOfArray - 1] - HighPrice[positionOfArray - 1]]
 const RealHigh = [HighPrice[positionOfArray - 1] - HighBrainResult[positionOfArray - 1]];

 const ClsPredicted = [CloseBrainResult[positionOfArray - 1] - ClosePrice[positionOfArray - 1]];
 const RealClose = [ClosePrice[positionOfArray - 1] - CloseBrainResult[positionOfArray - 1]];

 const RvsPredicted = [ThePrice[positionOfArray - 1] - OpenBrainResulta[positionOfArray - 1]];
 //const PvsReal = [OpenBrainResult[0] - FinalPriceArray];

 ///
 /*AVERAGE OF THE 4 PREDICTED BRAIN RESULT AND THE THE 4 ELEMENTS WICH IS THE AVERAGE OF LATESS AND PREDICTED 
 ALWAY'S SAME STRUCTURE: OPEN LATESS WITH OPEN PREDICTED IS ELEM 1
                         HIGH LATESS WITH HIGH PREDICTED IS ELEM 2
                         LOW LATESS WITH LOW PREDICTED IS ELEM 3
                         CLOSE LATESS WITH CLOSE PREDICTED IS ELEM 4 
 */
 const midOP = [];
 
 for(let i = 0; i < highBrainResult.length; i++) 
 {
    midOP.push((HighBrainResult[i] + OpenBrainResulta[i] + CloseBrainResult[i] + LowBrainResult[i] + Elem1[i] + Elem2[i] + Elem3[i] + Elem4[i]) / 8)
 }
  //console.log("midleLine: ",midOP)


///////////////////////////////////////////////////////////////////////******BEGINNING OF LAYER TWO NEURAL NETWORK*** */
// LAYER TWO  NETWORK PREDICTION BRAIN #1 OF #4  LayerIIOpenResult
const LayerIIOpenBrain = [];
for (let i = 0; i < OpenBrainResulta.length; i++) {

  LayerIIOpenBrain.unshift({
  input: {

       avergl: midOP[i] * globalNormValu,
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
    log: true, 
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
       avergl: midOP[el] * globalNormValu,
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

  LayerIIHighBrainPrice.unshift({
  input: {
        avergl: midOP[i] * globalNormValu,
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
    log: true, 
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
       avergl: midOP[el] * globalNormValu,
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

  LayerIILowBrainPrice.unshift({
  input: {
       avergl: midOP[i] * globalNormValu,

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
console.log('LAYER TWO TARGET PRICE **LOW** TRAINING ARRAY : ', LayerIILowBrainPrice)
OpenReAquiredTargetLW.train(LayerIILowBrainPrice, {
    errorThresh: 0.005,
    log: true, 
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
        avergl: midOP[el] * globalNormValu,
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

  LayerIICloseBrainPrice.unshift({
  input: {
       avergl: midOP[i] * globalNormValu,

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
    log: true, 
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
       avergl: midOP[el] * globalNormValu,

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
  var x = midOP[el] - midOP[el]// this equals zero //lol :)
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
HighVsMomentum.push(HighPrice[el] - HighBrainResult[el]);
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
LowMomentumX.push(LowPrice[el] - Elem3[el]);
//console.log(LowMomentumX);
LowVsMomentum.push(LowPrice[el] - LowBrainResult[el]);
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
CloseMomentumX.push(ClosePrice[el] - Elem4[el]);
//console.log(CloseMomentumX);
CloseVsMomentum.push(ClosePrice[el] - CloseBrainResult[el]);  
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
//console.log(mouthSize.length);

mouthCeilingSize.push(HighPrice[el] - Elem2[el]);
//console.log(mouthCeilingSize)
mouthFloorSize.push(LowPrice[el] - Elem3[el]);
//console.log(mouthFloorSize)
 
TongueSize.push(HighPrice[el] - LowPrice[el]);
console.log(TongueSize.length)

BrOpToNewOp.push(Elem1[el] - OpenBrainResulta[el]);
//console.log(BrOpToNewOp);
//
BrHgToNewHg.push(Elem2[el] - HighBrainResult[el]);
//console.log(BrHgToNewHg);
//
BrLwToNewLw.push(Elem3[el] - LowBrainResult[el]);
//console.log(BrLwToNewLw);
//
BrClToNewCl.push(Elem4[el] - CloseBrainResult[el]);
//console.log(BrClToNewCl);

//////////////////////////PREP ARRAYS TO SNAP SHOT NO MORE THEN 10 POSITIONS FROM LATESS AS START POINT AND A TALE OF 10 TICKS FOR CHART VIEWING CONVINIENCE

//////////
const xTicks = increment[positionOfArray]

/////////
    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
    
         xTicks,
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
         CloseBrainResult,
         HighBrainResult,
         LowBrainResult,

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











