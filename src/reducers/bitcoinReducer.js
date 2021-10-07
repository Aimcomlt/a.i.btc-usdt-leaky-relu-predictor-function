//Random color generator
//var r = () => Math.random() * 256 >> 0;
//var color = `rgb(${r()}, ${r()}, ${r()})`;
//import number from '../App'
const initalState = {
  loading: false,
  data: {
    labels: [],
    datasets: [{
      type: 'line',
      label: "TRAINNING CHART",
      data: [],
      backgroundColor: 'rgba(226, 153, 18, 0.9)',
      borderColor: 'rgba(178, 116, 0, 1)',
      pointBorderColor: 'rgba(25, 16, 0, 1)',
      borderWidth: 0.5
    }],
    options : {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
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
};




const bitcoinReducer = (state = initalState, action) => {
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
        data: {
          labels: payload.TempepoxNum,
          datasets: [
          {
            type: 'line',
            label: "BTC OPEN",
            data: payload.TempXopen,
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            borderColor: 'rgba(255, 0, 0, 0.9)',
            pointBorderColor: 'rgba(25, 16, 0, 1)',
            order: 1,
            borderWidth: 0.5
          },{
            type: 'line',
            label: "BTC HIGH",
            data: payload.TempXhigh,
            backgroundColor:'rgba(22, 91, 160, 0.9)',
            borderColor: 'rgba(14, 38, 62,0.9)',
            pointBorderColor: 'rgba(22, 91, 160, 1)',
            order: 2 ,
            borderWidth: 0.5             
          },{
            type: 'line',
            label: "BTC LOW",
            data: payload.TempXlow,
            backgroundColor:'rgba(246, 239, 28, 0.48)',
            borderColor: 'rgba(255,255,0, 0.9)',
            pointBorderColor: 'rgba(255,255,0, 0.9)',
            order: 3,
            borderWidth: 0.5
          },
          {
            label: "BTC CLOSE",
            data: payload.TempXclose,
            backgroundColor: 'rgba(0,177,64, 1)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
            pointBorderColor: 'rgba(0, 0, 0 , 0.8)',
            order: 4,
            borderWidth: 0.5
          },
        ],
        options : {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Horizontal Bar Chart',
            },
          },
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
      

        }
         default: return state;
          }
         }
          export default bitcoinReducer;
      
