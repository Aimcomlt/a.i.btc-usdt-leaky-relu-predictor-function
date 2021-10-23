const initalState = {
  Loading: false,
  dataB: {
    labels: [],
    datasets: [{
      type: 'radar',
      label: "BOT CHART PREDICTION",
      data: [],
      backgroundColor: 'rgba(226, 153, 18, 0.9)',
      borderColor: 'rgba(178, 116, 0, 1)',
      pointBorderColor: 'rgba(25, 16, 0, 1)',
      options: {
        responsive: true
      }
    }],
    options : {
      yAxes: [{
          ticks: {
              min: 0,
              max: 55,
              stepSize: 1
          }
      }]
  }
  },
  dataC: {
    labels: [],
    datasets: [{
      type: 'bar',
      label: "BOT CHART PREDICTION",
      data: [],
      backgroundColor: 'rgba(226, 153, 18, 0.9)',
      borderColor: 'rgba(178, 116, 0, 1)',
      pointBorderColor: 'rgba(25, 16, 0, 1)',
      options: {
        responsive: true
      }
    }]
  },
  dataD: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "Real Time vs Open Prediction",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          scales: {
              x: {
                  ticks: {
                      // Include a dollar sign in the ticks
                      callback: function(value, index, values) {
                          return '$' + value;
                      }
                  }
              }
          }
      }
      }],
    },
    dataF: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    },
    dataG: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    },
    dataH: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    }, 
    dataOPEN: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    },
    dataHIGH: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    },
    dataLOW: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    },
    dataCLOSE: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    }, 
    dataTimeTwist: {
      labels: [],
      datasets: [{
        type: 'line',
        label: "BOT CHART PREDICTION",
        data: [],
        backgroundColor: 'rgba(226, 153, 18, 0.9)',
        borderColor: 'rgba(178, 116, 0, 1)',
        pointBorderColor: 'rgba(25, 16, 0, 1)',
        options: {
          responsive: true
        }
      }],
      
    }, 

}
const brainReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
      case "AWAITING_BITCOIN":
        return {
          ...state,
          loading: true
        }
      case "REJECTED_BITCOIN":
        return {
          ...state,
          loading: false,
        }
      case "SUCCESS_BITCOIN":

          return {
              ...state,
              loading: false,
            /*
epoxSlmnRslt,
LayerIINNOpRslt,
LayerIINNHghRslt,
LayerIINNLwRslt,
LayerIINNClRslt,
LayerIINNOpElm1,
LayerIINNHghElm2,
LayerIINNLwElm3,
LayerIINNClElm4,
openSlmnRslt
closeSlmnRslt

        epoxSalomonResult,
        openSalomonResult,
        closeSalomonResult,
        LayerIIOpenResult,
        LayerIIHighResult,
        LayerIILowResult,
        LayerIICloseResult,
        LayerIIOpenResultElem1,
        LayerIIHighResultElem2,
        LayerIILowResultElem3,
        LayerIICloseResultElem4,
            */
              dataB: {
                labels: payload.epoxResult,
                text: 'EXPERIMENTAL',
                datasets: [
                  {
                  type: 'line',
                  label: "OPEN PRICE FROM SECONDARY LAYER",
                  data: payload.LayerIIOpenResult,
                  backgroundColor: 'rgba(255, 0, 0, 1)',
                  borderColor: '	rgba(255, 0, 0, 1)',
                  pointBorderColor: 'rgba(25, 16, 1)',
      
                  order: 1
                  },
                  {
                    type: 'line',
                    label: "ELEM1 OUTPUT BY BRAIN",
                    data: payload.LayerIIOpenResultElem1,
                    backgroundColor: 'rgba(255, 0, 0, 0.4)',
                    borderColor: '	rgba(255, 0, 0, 0.9)',
                    pointBorderColor: 'rgba(25, 16, 0, 1)',
        
                    order: 2
                    },
                  {
                    type: 'line',
                    label: "HIGH PRICE FROM SECONDARY LAYER",
                    data: payload.LayerIIHighResult, 
                    backgroundColor:'rgba(0,0,255, 0.7)',
                    borderColor: 'rgba(0,0,255, 0.9)',
                    pointBorderColor: 'rgba(0,0,255, 0.8)',
        
                    order: 3
                    },
                    {
                      type: 'line',
                      label: "ELEM2 OUTPUT BY BRAIN",
                      data: payload.LayerIIHighResultElem2, 
                      backgroundColor:'rgba(0,0,255, 0.7)',
                      borderColor: 'rgba(0,0,255, 0.9)',
                      pointBorderColor: 'rgba(0,0,255, 0.8)',
          
                      order: 4
                      },
                    {
                      type: 'line',
                      label: "LOW PRICE FROM SECONDARY LAYER",
                      data: payload.LayerIILowResult,
                      backgroundColor:'rgba(255,255,0, 0.8)',
                      borderColor: 'rgba(255,255,0, 0.9)',
                      pointBorderColor: 'rgba(255,255,0, 0.9)',
          
                      order: 5
                      },
                      {
                        type: 'line',
                        label: "ELEM3 OUTPUT BY BRAIN",
                        data: payload.LayerIILowResultElem3,
                        backgroundColor:'rgba(255,255,0, 0.8)',
                        borderColor: 'rgba(255,255,0, 0.9)',
                        pointBorderColor: 'rgba(255,255,0, 0.9)',
            
                        order: 6
                        },
                        {
                           type: 'line',
                           label: "CLOSE PRICE FROM SECONDARY LAYER",
                           data: payload.LayerIICloseResult,
                           backgroundColor:'rgba(10, 204, 0, 0.7)',
                           borderColor: 'rgba(10, 204, 0, 0.9)',
                           pointBorderColor: 'rgba(10, 204, 0, 0.7)',
                           order: 7
                           },
                            {
                               type: 'line',
                               label: "ELEM4 OUTPUT BY BRAIN",
                               data: payload.LayerIICloseResultElem4,
                               backgroundColor:'rgba(10, 204, 0, 0.7)',
                               borderColor: 'rgba(10, 204, 0, 0.9)',
                               pointBorderColor: 'rgba(10, 204, 0, 0.7)',
                               order: 8
                              },

                              {        
                                type: "line",
                                label: "BTC LATESS OPEN PRICE" ,
                                data: payload.openResult,                        
                                backgroundColor: 'rgba(255, 0, 0, 1)',
                                borderColor: 'rgba(0, 0, 0, 0.8)',
                                pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                                order: 9,
                                },
                                {
                                  type: "line",
                                  label: "BTC LATESS CLOSE PRICE" ,
                                  data: payload.closeResult,                        
                                  backgroundColor: 'rgba(0,177,64, 1)',
                                  borderColor: 'rgba(0, 0, 0, 0.8)',
                                  pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                                  order: 10,
                                  }
                                  
                                 ],
                                 options: {
                                   responsive: true,
                                   yAxes: [{
                                    ticks: {
                                        min: 0,
                                        max: 55,
                                        stepSize: 1
                                    }
                                }],
                                   scales: {
                                    x: {
                                      type: 'realtime',
                                      // Change options only for THIS AXIS
                                      realtime: {
                                        duration: 60100
                                      }
                                    },
                                  },
                                            
                                 }
                                },
              dataD: {
                    labels: payload.epoxResult,
                    datasets: [{
                      type: "line",
                      label: "BTC LATESS OPEN PRICE" ,
                      data: payload.openResult,                        
                      backgroundColor: 'rgba(255, 0, 0, 1)',
                      borderColor: 'rgba(0, 0, 0, 0.8)',
                      pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                      order: 1,
                    },
                    {
                      type: "line",
                      label: "BTC LATESS CLOSE PRICE" ,
                      data: payload.closeResult,                        
                      backgroundColor: 'rgba(0,177,64, 1)',
                      borderColor: 'rgba(0, 0, 0, 0.8)',
                      pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                      order: 2,
                    },
/*
                    {
                      type: 'line',
                      label: "PREDICTED OPEN",
                      data: payload.OpenBrainResulta,
                      backgroundColor: 'rgba(255, 0, 0, 0.4)',
                      borderColor: 'rgba(255, 0, 0, 0.9)',
                      pointBorderColor: 'rgba(25, 16, 0, 1)',
                      order: 3,
                    },
                    {
                      type: 'line',
                      label: "PREDICTED HIGH",
                      data: payload.HighBrainResult,
                      backgroundColor: 'rgba(22, 91, 160, 0.7)',
                      borderColor: '	rgba(22, 91, 160, 0.9)',
                      pointBorderColor: 'rgba(22, 91, 160, 1)',
                      order: 4,
                    },
                    {
                      type: 'line',
                      label: "PREDICTED LOW",
                      data: payload.LowBrainResult,
                      backgroundColor: 'rgba(255, 255, 0, 0.7)',
                      borderColor: 'rgba(255, 255, 0, 0.9)',
                      pointBorderColor: 'rgba(255, 255, 0, 1)',
                      order: 5,
                    },
                    {
                      type: 'line',
                      label: "PREDICTED CLOSE",
                      data: payload.CloseBrainResult,
                      backgroundColor: 'rgba(0,177,64, 1)',
                      borderColor: 'rgba(0,177,64, 1)',
                      pointBorderColor: 'rgba(0,177,64, 1)',
                      order: 6,
                    },
                    */
                    {
                      type: 'line',
                      label: "All 4 PREDICTED MOVING AVERAGE",
                      data: payload.MASTERCORE,
                      backgroundColor: 'rgba(255, 113, 16, 0.7)',
                      borderColor: 'rgba(255, 113, 16, 0.9)',
                      pointBorderColor: 'rgba(255, 113, 16, 0.9)',
                      order: 7,
                    },
                    {
                      type: 'line',
                      label: "AVERAGE OF LATESS OPEN VS PREDICTED OPEN",
                      data: payload.Elem1,
                      backgroundColor: 'rgba(255, 0, 0, 0.4)',
                      borderColor: 'rgba(255, 0, 0, 0.9)',
                      pointBorderColor: 'rgba(25, 16, 0, 1)',
                      order: 8,
                    },
                    {
                      type: 'line',
                      label: "AVERAGE OF LATTESS HIGH VS PREDICTED HIGH",
                      data: payload.Elem2,
                      backgroundColor: 'rgba(22, 91, 160, 1)',
                      borderColor: '	rgba(22, 91, 160, 1)',
                      pointBorderColor: 'rgba(22, 91, 160, 1)',
                      order: 9,
                    },
                    {
                      type: 'line',
                      label: "AVERAGE OF LATESS LOW VS PREDICTED LOW",
                      data: payload.Elem3,
                      backgroundColor: 'rgba(255, 255, 0, 0.7)',
                      borderColor: 'rgba(255, 255, 0, 0.9)',
                      pointBorderColor: 'rgba(255, 255, 0, 1)',
                      order: 10,
                    },
                    {
                      type: 'line',
                      label: "AVERAGE OF LATESS CLOSE VS PREDICTED CLOSE",
                      data: payload.Elem4,
                      backgroundColor: 'rgba(0,177,64, 1)',
                      borderColor: 'rgba(0,177,64, 1)',
                      pointBorderColor: 'rgba(0,177,64, 1)',
                      order: 11,
                    },
                  ]
                },
                dataC: {
                  labels:payload.epoxResult,
                  datasets: [
                    {
                    type: 'line',
                    label: "WIDTH VALUE OF NEURAL NETWORK HIGH AND LOW",
                    data: payload.mouthSize,
                    backgroundColor: 'rgba(22, 91, 160, 0.7)',
                    borderColor: '	rgba(22, 91, 160, 0.9)',
                    pointBorderColor: 'rgba(22, 91, 160, 1)',
                    order: 1
                    },
                    {
                      type: 'line',
                      label: "VALUE OF NEURAL NETWORK HIGH VS MARKET LATESS HIGH",
                      data: payload.mouthCeilingSize,
                      backgroundColor: 'rgba(22, 91, 160, 0.7)',
                      borderColor: 'rgba(200,100,0, 0.9)',
                      pointBorderColor: 'rgba(200,100,0, 0.9)',
                      order: 2
                      },
                      {
                        type: 'line',
                        label: "WIDTH VALUE OF NEURAL NETWORK LOW VS LATESS LOW",
                        data: payload.mouthFloorSize,
                        backgroundColor:'rgba(255,55,0, 0.8)',
                        borderColor: 'rgba(255,55,0, 0.9)',
                        pointBorderColor: 'rgba(220,55,0, 0.9)',
                        order: 3
                        },
                    {
                      type: 'line',
                      label: "WIDTH VALUE OF MARKET HIGH AND LOW",
                      data: payload.TongueSize,
                      backgroundColor:'rgba(255,255,0, 0.8)',
                      borderColor: 'rgba(255,255,0, 0.9)',
                      pointBorderColor: 'rgba(255,255,0, 0.9)',
                      order: 4
                      },
                      {
                        type: 'line',
                        label: "ZER0 LINE",
                        data: payload.theZeroLine,
                        backgroundColor: 'rgba(255, 113, 16, 1)',
                        borderColor: 'rgba(255, 113, 16, 1)',
                        pointBorderColor: 'rgba(255, 113, 16, 1)',
                        order: 5
                        },
                  ]
                 },
                 dataF: {
                  labels:payload.epoxResult,
                  datasets: [
                   {
                    type: 'line',
                    label: "OPEN VS THE PREDICTED AVERAGE OF ALL OHLC",
                    data: payload.OpenP1,
                    backgroundColor: 'rgba(255, 0, 0, 1)',
                    borderColor: 'rgba(0, 0, 0, 0.8)',
                    pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                    order: 1
                    },
                    {
                      type: 'line',
                      label: "ELEM1(=latess open average with predicted open) VS THE PREDICTED AVERAGE OF ALL OHLC",
                      data: payload.ElemP1,
                      backgroundColor: 'rgba(255, 0, 0, 0.4)',
                      borderColor: 'rgba(255, 0, 0, 0.9)',
                      pointBorderColor: 'rgba(25, 16, 0, 1)',
                      order: 2
                      },
                      {
                        type: 'line',
                        label: "HIGH VS THE PREDICTED AVERAGE OF ALL OHLC",
                        data: payload.HighP2,
                        backgroundColor: 'rgba(22, 91, 160, 1)',
                        borderColor: 'rgba(0, 0, 0, 0.8)',
                        pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                        order: 3
                        },
                        {
                          type: 'line',
                          label: "ELEM2(=latess open average with predicted open) VS THE PREDICTED AVERAGE OF ALL OHLC",
                          data: payload.ElemP2,
                          backgroundColor: 'rgba(22, 91, 160, 1)',
                          borderColor: '	rgba(22, 91, 160, 0.9)',
                          pointBorderColor: 'rgba(22, 91, 160, 1)',
                          order: 4
                          },
                          {
                            type: 'line',
                            label: "LOW VS THE PREDICTED AVERAGE OF ALL OHLC",
                            data: payload.LowP3,
                            backgroundColor: 'rgba(255, 255, 0, 0.7)',
                            borderColor: 'rgba(0, 0, 0, 0.8)',
                            pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                            order: 5
                            },
                            {
                              type: 'line',
                              label: "ELEM3(=latess open average with predicted open) VS THE PREDICTED AVERAGE OF ALL OHLC",
                              data: payload.ElemP3,
                              backgroundColor: 'rgba(255, 255, 0, 0.7)',
                              borderColor: 'rgba(255, 255, 0, 0.9)',
                              pointBorderColor: 'rgba(255, 255, 0, 1)',
                              order: 6
                              },
                              {
                                type: 'line',
                                label: "CLOSE VS THE PREDICTED AVERAGE OF ALL OHLC",
                                data: payload.CloseP4,
                                backgroundColor: 'rgba(0,177,64, 1)',
                                borderColor: 'rgba(0, 0, 0, 0.8)',
                                pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                                order: 7
                                },
                                {
                                  type: 'line',
                                  label: "ELEM4(=latess open average with predicted open) VS THE PREDICTED AVERAGE OF ALL OHLC",
                                  data: payload.ElemP4,
                                  backgroundColor: 'rgba(0,177,64, 1)',
                                  borderColor: 'rgba(0,177,64, 1)',
                                  pointBorderColor: 'rgba(0,177,64, 1)',
                                  order: 8
                                  },
                                  {
                                    type: 'line',
                                    label: "ZEROLINE",
                                    data: payload.theZeroLine,
                                    backgroundColor: 'rgba(255, 113, 16, 1)',
                                    borderColor: 'rgba(255, 113, 16, 1)',
                                    pointBorderColor: 'rgba(255, 113, 16, 1)',
                                    order: 9
                                    },
                                   ]
                                   },
                  dataG: {
                    labels:payload.epoxResult,
                     datasets: [
                      {
                        type: 'line',
                        label: "sub-Latess-OPEN-vs-Predicted",
                        data: payload.subLatessOPvsPredicted,
                        backgroundColor: 'rgba(255, 0, 0, 0.4)',
                        borderColor: 'rgba(255, 0, 0, 0.9)',
                        pointBorderColor: 'rgba(25, 16, 0, 1)',
                        order: 1,
                      },
                        {
                          type: 'line',
                          label: "sub-Latess-CL0SE-vs-Predicted",
                          data: payload.subLatessCLVSPredicted,
                          backgroundColor: 'rgba(255, 113, 16, 0.7)',
                          borderColor: 'rgba(0,177,64, 1)',
                          pointBorderColor: 'rgba(0,177,64, 1)',
                          order: 2,
                        },
                        {
                          type: 'line',
                          label: "sub-latess-HIGH-vs-Predicted",
                          data: payload.subLatessHGHvsPredicted,
                          backgroundColor: 'rgba(22, 91, 160, 0.7)',
                          borderColor: '	rgba(22, 91, 160, 0.9)',
                          pointBorderColor: 'rgba(22, 91, 160, 1)',
                          order: 3,
                        },
                        {
                          type: "line",
                          label: "sub-Latess-LOW-vs-Predicted" ,
                          data: payload.subLatessLWvsPredicted,                        
                          backgroundColor: 'rgba(255, 255, 0, 1)',
                          borderColor: 'rgba(0, 0, 0, 0.8)',
                          pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                          order: 4,
                        },
                        {
                          type: 'line',
                          label: "ZER0 LINE",
                          data: payload.theZeroLine,
                          backgroundColor: 'rgba(255, 113, 16, 1)',
                          borderColor: 'rgba(255, 113, 16, 1)',
                          pointBorderColor: 'rgba(255, 113, 16, 1)',
                          order: 5
                          },
                         ]
                         },
                dataOPEN: {
                  labels: payload.epoxResult,
                   datasets: [
                     {
                      type: "line",
                      label: "BTC LATESS OPEN PRICE" ,
                      data: payload.openResult,                        
                      backgroundColor: 'rgba(255, 0, 0, 1)',
                      borderColor: 'rgba(0, 0, 0, 0.8)',
                      pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                      order: 1,
                     },
                  {
                    type: 'line',
                    label: "PREDICTED OPEN",
                    data: payload.OpenBrainResultf,
                    backgroundColor: 'rgba(255, 0, 0, 0.4)',
                    borderColor: 'rgba(255, 0, 0, 0.9)',
                    pointBorderColor: 'rgba(25, 16, 0, 1)',
                    order: 2,
                  },

                  {
                    type: 'line',
                    label: "12 LINES CORE AVERAGE",
                    data: payload.MASTERCORE,
                    backgroundColor: 'rgba(255, 113, 16, 0.7)',
                    borderColor: 'rgba(255, 113, 16, 0.9)',
                    pointBorderColor: 'rgba(255, 113, 16, 0.9)',
                    order: 3,
                  },
                ]
              },
              dataTimeTwistOPEN: {
                labels: payload.epoxResult,
                datasets: [
              {
                type: 'line',
                label: "***OPEN BRAIN RESULT AVG WITH CORE LINES***  ",
                data: payload.predictedOPvs8Lines,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(255, 0, 0, 1)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',
                order: 1,
              },
              {
                type: 'line',
                label: "***OPEN LATESS RESULT AVG WITH CORE LINES***",
                data: payload.latessOPvs8Lines,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',
                order: 2,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***CORE***",
                data: payload.myAvgOPBoxFinalResultI,
                backgroundColor: 'rgba(255, 0, 0, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: 'rgba(255, 0, 0, 1)',
                order: 3,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***PREDICTED***",
                data: payload.myAvgOPBoxFinalResultIB,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',  
                order: 4,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND LATESS OPEN (AVG/MINUTES) verses ***CORE***",
                data: payload.myAvgOPBoxFinalResult,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',
                order: 5,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND LATESS OPEN (AVG/MINUTES) verses ***LATESS OPEN***",
                data: payload.myAvgOPBoxFinalResultB,
                backgroundColor: 'rgba(255, 0, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                pointBorderColor: 'rgba(255, 0, 0, 1)',
                order: 6,
              },           

           // subLatessLWvsPredicted
            {
              type: 'line',
              label: "12 LINES CORE AVERAGE",
              data: payload.MASTERCORE,
              backgroundColor: 'rgba(255, 113, 16, 0.7)',
              borderColor: 'rgba(255, 113, 16, 0.9)',
              pointBorderColor: 'rgba(255, 255, 0, 1)',
              order: 7,
            },
          ]
        },
              dataHIGH: {
                labels: payload.epoxResult,
                datasets: [{
                  type: "line",
                  label: "BTC LATESS HIGH PRICE" ,
                  data: payload.highResult,                        
                  backgroundColor: 'rgba(22, 91, 160, 1)',
                  borderColor: 'rgba(0, 0, 0, 0.8)',
                  pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                  order: 1,
                },
                {
                  type: 'line',
                  label: "PREDICTED HIGH",
                  data: payload.HighBrainResultf,
                  backgroundColor: 'rgba(22, 91, 160, 0.7)',
                  borderColor: '	rgba(22, 91, 160, 0.9)',
                  pointBorderColor: 'rgba(22, 91, 160, 1)',
                  order: 2,
                },
                {
                  type: 'line',
                  label: "12 LINES CORE AVERAGE",
                  data: payload.MASTERCORE,
                  backgroundColor: 'rgba(255, 113, 16, 0.7)',
                  borderColor: 'rgba(255, 113, 16, 0.9)',
                  pointBorderColor: 'rgba(255, 113, 16, 0.9)',
                  order: 3,
                },
              ]
            },
            dataTimeTwistHIGH: {
              labels: payload.epoxResult,
              datasets: [
                {
                  type: 'line',
                  label: "***HIGH BRAIN RESULT AVG WITH CORE LINES***  ",
                  data: payload.predictedHGHvs8Lines,
                  backgroundColor: 'rgba(255, 120, 0, 1)',
                  borderColor: 'rgba(22, 91, 160, 1)',
                  pointBorderColor: 'rgba(255, 120, 0, 1)',
                  order: 1,
                },
                {
                  type: 'line',
                  label: "***HIGH LATESS RESULT AVG WITH CORE LINES***",
                  data: payload.latessHGHvs8Lines,
                  backgroundColor: 'rgba(255, 120, 0, 1)',
                  borderColor: 'rgba(0, 0, 0, 0.8)',
                  pointBorderColor: 'rgba(255, 120, 0, 1)',
                  order: 2,
                },
                {
                  type: 'line',
                  label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***CORE***",
                  data: payload.myAvgHGHBoxFinalResultI,
                  backgroundColor: 'rgba(22, 91, 160, 1)',
                  borderColor: 'rgba(255, 255, 255, 1)',
                  pointBorderColor: 'rgba(22, 91, 160, 1)',
                  order: 3,
                },
                {
                  type: 'line',
                  label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***PREDICTED***",
                  data: payload.myAvgHGHBoxFinalResultIB,
                  backgroundColor: 'rgba(255, 120, 0, 1)',
                  borderColor: 'rgba(255, 255, 255, 1)',
                  pointBorderColor: 'rgba(255, 120, 0, 1)',  
                  order: 4,
                },
                {
                  type: 'line',
                  label: "***ACCUMULATED AVERAGE OF CORE AND LATESS HIGH (AVG/MINUTES) verses ***CORE***",
                  data: payload.myAvgHGHBoxFinalResult,
                  backgroundColor: 'rgba(255, 120, 0, 1)',
                  borderColor: 'rgba(0, 0, 0, 0.4)',
                  pointBorderColor: 'rgba(255, 120, 0, 1)',
                  order: 5,
                },
                {
                  type: 'line',
                  label: "***ACCUMULATED AVERAGE OF CORE AND LATESS HIGH (AVG/MINUTES) verses ***LATESS HIGH***",
                  data: payload.myAvgHGHBoxFinalResultB,
                  backgroundColor: 'rgba(22, 91, 160, 1)',
                  borderColor: 'rgba(0, 0, 0, 0.4)',
                  pointBorderColor: 'rgba(22, 91, 160, 1)',
                  order: 6,
                },
              {
                type: 'line',
                label: "12 LINES CORE AVERAGE",
                data: payload.MASTERCORE,
                backgroundColor: 'rgba(255, 113, 16, 0.7)',
                borderColor: 'rgba(255, 113, 16, 0.9)',
                pointBorderColor: 'rgba(255, 255, 0, 1)',
                order: 7,
              },
        ]
      },
            dataLOW: {
              labels: payload.epoxResult,
              datasets: [{
                type: "line",
                label: "BTC LATESS LOW PRICE" ,
                data: payload.lowResult,                        
                backgroundColor: 'rgba(255, 255, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
                order: 1,
              },
              {
                type: 'line',
                label: "PREDICTED LOW",
                data: payload.LowBrainResultf,
                backgroundColor: 'rgba(255, 255, 0, 0.7)',
                borderColor: 'rgba(255, 255, 0, 0.9)',
                pointBorderColor: 'rgba(255, 255, 0, 1)',
                order: 2,
              },
              {
                type: 'line',
                label: "12 LINES CORE AVERAGE",
                data: payload.MASTERCORE,
                backgroundColor: 'rgba(255, 113, 16, 0.7)',
                borderColor: 'rgba(255, 113, 16, 0.9)',
                pointBorderColor: 'rgba(255, 113, 16, 0.9)',
                order: 3,
              },
            ]
          },
          dataTimeTwistLOW: {
            labels: payload.epoxResult,
            datasets: [
              {
                type: 'line',
                label: "***LOW BRAIN RESULT AVG WITH CORE LINES***  ",
                data: payload.predictedLWvs8Lines,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(255, 255, 0, 1)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',
                order: 1,
              },
              {
                type: 'line',
                label: "***LOW LATESS RESULT AVG WITH CORE LINES***",
                data: payload.latessLWvs8Lines,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',
                order: 2,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***CORE***",
                data: payload.myAvgLWBoxFinalResultI,
                backgroundColor: 'rgba(255, 255, 0, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: 'rgba(255, 255, 0, 1)',
                order: 3,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***PREDICTED***",
                data: payload.myAvgLWBoxFinalResultIB,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',  
                order: 4,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND LATESS LOW (AVG/MINUTES) verses ***CORE***",
                data: payload.myAvgLWBoxFinalResult,
                backgroundColor: 'rgba(255, 120, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                pointBorderColor: 'rgba(255, 120, 0, 1)',
                order: 5,
              },
              {
                type: 'line',
                label: "***ACCUMULATED AVERAGE OF CORE AND LATESS LOW (AVG/MINUTES) verses ***LATESS LOW***",
                data: payload.myAvgLWBoxFinalResultB,
                backgroundColor: 'rgba(255, 255, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                pointBorderColor: 'rgba(255, 255, 0, 1)',
                order: 6,
              },
            {
              type: 'line',
              label: "12 LINES CORE AVERAGE",
              data: payload.MASTERCORE,
              backgroundColor: 'rgba(255, 113, 16, 0.7)',
              borderColor: 'rgba(255, 113, 16, 0.9)',
              pointBorderColor: 'rgba(255, 255, 0, 1)',
              order: 7,
            },
          ]
        },
          dataCLOSE: {
            labels: payload.epoxResult,
            datasets: [
            {
              type: "line",
              label: "BTC LATESS CLOSE PRICE" ,
              data: payload.closeResult,                        
              backgroundColor: 'rgba(0,177,64, 1)',
              borderColor: 'rgba(0, 0, 0, 0.8)',
              pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
              order: 1,
            },
            {
              type: 'line',
              label: "PREDICTED CLOSE",
              data: payload.CloseBrainResultf,
              backgroundColor: 'rgba(0,177,64, 1)',
              borderColor: 'rgba(0,177,64, 1)',
              pointBorderColor: 'rgba(0,177,64, 1)',
              order: 2,
            },
            {
              type: 'line',
              label: "12 LINES CORE AVERAGE",
              data: payload.MASTERCORE,
              backgroundColor: 'rgba(255, 113, 16, 0.7)',
              borderColor: 'rgba(255, 113, 16, 0.9)',
              pointBorderColor: 'rgba(255, 113, 16, 0.9)',
              order: 3,
            },
          ]
            
        },
        dataTimeTwist: {
          labels: payload.epoxResult,
          datasets: [
            {
              type: 'line',
              label: "***CLOSE BRAIN RESULT AVG WITH CORE LINES***  ",
              data: payload.predictedCLVS8Lines,
              backgroundColor: 'rgba(255, 120, 0, 1)',
              borderColor: 'rgba(0,177,64, 1)',
              pointBorderColor: 'rgba(255, 120, 0, 1)',
              order: 1,
            },
            {
              type: 'line',
              label: "***CLOSE LATESS RESULT AVG WITH CORE LINES***",
              data: payload.latessCLVS8Lines,
              backgroundColor: 'rgba(255, 120, 0, 1)',
              borderColor: 'rgba(0, 0, 0, 0.8)',
              pointBorderColor: 'rgba(255, 120, 0, 1)',
              order: 2,
            },
            {
              type: 'line',
              label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***CORE***",
              data: payload.myAvgCLBoxFinalResultI,
              backgroundColor: 'rgba(0,177,64, 1)',
              borderColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(0,177,64, 1)',
              order: 3,
            },
            {
              type: 'line',
              label: "***ACCUMULATED AVERAGE OF CORE AND PREDICTED (AVG/MINUTES) verses ***PREDICTED***",
              data: payload.myAvgCLBoxFinalResultIB,
              backgroundColor: 'rgba(255, 120, 0, 1)',
              borderColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(255, 120, 0, 1)',  
              order: 4,
            },
            {
              type: 'line',
              label: "***ACCUMULATED AVERAGE OF CORE AND LATESS CLOSE (AVG/MINUTES) verses ***CORE***",
              data: payload.myAvgCLBoxFinalResult,
              backgroundColor: 'rgba(255, 120, 0, 1)',
              borderColor: 'rgba(0, 0, 0, 0.4)',
              pointBorderColor: 'rgba(255, 120, 0, 1)',
              order: 5,
            },
            {
              type: 'line',
              label: "***ACCUMULATED AVERAGE OF CORE AND LATESS CLOSE (AVG/MINUTES) verses ***LATESS CLOSE***",
              data: payload.myAvgCLBoxFinalResultB,
              backgroundColor: 'rgba(0,177,64, 1)',
              borderColor: 'rgba(0, 0, 0, 0.4)',
              pointBorderColor: 'rgba(0,177,64, 1)',
              order: 6,
            },
          {
            type: 'line',
            label: "12 LINES CORE AVERAGE ",
            data: payload.MASTERCORE,
            backgroundColor: 'rgba(255, 113, 16, 0.7)',
            borderColor: 'rgba(255, 113, 16, 0.9)',
            pointBorderColor: 'rgba(255, 255, 0, 1)',
            order: 7,
          },
        ]
      }, 
                dataH: {
                   exports : [
                    {
                    data: payload.LayerIIHighResultElem2
                    }],
                  labels:payload.epoxResult,
                  datasets: [
                    {
                      type: 'line',
                      label: "MESUREMENT OF OPEN PRICE TREND FORCE VS 0",
                      data: payload.MomYOpenMesurement,
                      backgroundColor: 'rgba(255, 0, 0, 0.4)',
                      borderColor: 'rgba(255, 0, 0, 0.9)',
                      pointBorderColor: 'rgba(25, 16, 0, 1)',
                      order: 1
                      },            
                      {
                      type: 'line',
                      label: "MESUREMENT OF HIGH PRICE TREND FORCE VS 0",
                      data: payload.MomYHighMesurement,
                      backgroundColor: 'rgba(22, 91, 160, 1)',
                      borderColor: '	rgba(22, 91, 160, 1)',
                      pointBorderColor: 'rgba(22, 91, 160, 1)',
                      order: 2
                      },
                      {
                      type: 'line',
                      label: "MESUREMENT OF LOW PRICE TREND FORCE VS 0",
                      data: payload.MomYLowMesurement,
                      backgroundColor: 'rgba(255, 255, 0, 0.7)',
                      borderColor: 'rgba(255, 255, 0, 0.9)',
                      pointBorderColor: 'rgba(255, 255, 0, 1)',
                      order: 7
                      },
                      {
                      type: 'line',
                      label: "MESUREMENT OF CLOSE PRICE TREND FORCE VS 0",  
                      data: payload.MomYCloseMesurement,
                      backgroundColor: 'rgba(0,177,64, 1)',
                      borderColor: 'rgba(0,177,64, 1)',
                      pointBorderColor: 'rgba(0,177,64, 1)',
                      order: 8
                      },
                        {
                          type: 'line',
                          label: "ZER0 LINE",
                          data: payload.theZeroLine,
                          backgroundColor: 'rgba(255, 113, 16, 1)',
                          borderColor: 'rgba(255, 113, 16, 1)',
                          pointBorderColor: 'rgba(255, 113, 16, 1)',
                          order: 9
                          },
                        ]
                      },
                    }
                     default: return state;
                     }
                     }
                      export default brainReducer;

