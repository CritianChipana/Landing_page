let ctx = document.getElementById('myChart').getContext('2d');

let meta = [90,89,88,87,86,85];
let desplazo= [90,90,89];

let dataset2 = [
  {
    label: 'META',
    data: meta,
    backgroundColor: [
      'rgb(54, 162, 235)',
    ],
    borderColor:[
    'rgb(54, 162, 235)',
    ],
    parsing: {  
    yAxisKey: 'net'
    }
  },
  {
    label: 'YO',
    data: desplazo,
    backgroundColor: [
      'rgb(255, 99, 132)',
    ],
    borderColor: [
    'rgb(255, 99, 132)',
    ],            
    parsing: {
        yAxisKey: 'cogs'
    }
  },
  // {
  //   label: 'Tercer Arreglo',
  //   data: [50,40,30,20,10,0],
  //   backgroundColor: [
  //     'rgb(255, 205, 86)'
  //   ],
  //   borderColor: [
  //   'rgb(255, 205, 86)'
  //   ],
  //   parsing: {
  //       yAxisKey: 'cogs'
  //   }
  // }
];


let data2 ={

  labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Dicienbre"],
  datasets: dataset2
};


let myChart = new Chart(ctx, {
  type: 'line',
  data: data2
});