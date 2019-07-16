<<<<<<< HEAD
var densityCanvas = document.getElementById("densityChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
    label: 'Jobs',
    data: [16, 12, 10, 5, 0],
    backgroundColor: [
        'rgba(128, 0, 128, 1)',
        'rgba(0,255,255)',
        'rgba(255,0,255,1)',
        'rgba(255,140,0,1)',
        'rgba(0,128,0,1)'


    ],
    borderColor: [
        'rgba(128, 0, 128, 1)',
        'rgba(0,255,255)',
        'rgba(255,0,255,1)',
        'rgba(255,140,0,1)',
        'rgba(0,128,0,1)'


    ],
    borderWidth: 2,
    hoverBorderWidth: 0
};

var chartOptions = {
    scales: {
        yAxes: [{
            barPercentage: 1,
            gridLines: {
                display: false
            }
        }],
        xAxes: [{
            barPercentage: 1,
            gridLines: {
                display: false
            },
            beginAtZero: true,
            ticks: {
                display: false
            }
        }]
    },
    elements: {
        rectangle: {
            borderSkipped: 'left',
        }
    }
};

var barChart = new Chart(densityCanvas, {
    type: 'horizontalBar',
    data: {
        labels: ["wishlist", "applied", "interview", "offer", "rejected"],
        datasets: [densityData],
    },
    options: chartOptions
});
var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "wishlist",
    data: [0, 20, 20, 20, 55, 40],
    lineTension: 0.3,
    fill: false,
    borderColor: 'red',
    backgroundColor: 'transparent',
    pointBorderColor: 'blue',
    pointBackgroundColor: 'blue',
    pointRadius: 5,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rect'
};

var dataSecond = {
    label: "applied",
    data: [0, 0, 20, 22, 40, 20, 3],
    lineTension: 0.3,
    fill: false,
    borderColor: 'purple',
    backgroundColor: 'transparent',
    pointBorderColor: 'lightgreen',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 2
};

var dataThird = {
    label: "offered",
    data: [3, 5, 7, 13, 18, 30, 2],
    lineTension: 0.3,
    fill: false,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    pointBorderColor: 'yellow',
    pointBackgroundColor: 'red',
    pointRadius: 5,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 2
};

var dataFourth = {
    label: "Interview",
    data: [0, 0, 0, 0, 30, 18, 2],
    lineTension: 0.3,
    fill: false,
    borderColor: 'indigo',
    backgroundColor: 'transparent',
    pointBorderColor: 'purple',
    pointBackgroundColor: 'white',
    pointRadius: 5,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 2
};

var dataFifth = {
    label: "rejected",
    data: [0, 0, 0, 0, 24, 20, 5],
    lineTension: 0.3,
    fill: false,
    borderColor: 'green',
    backgroundColor: 'transparent',
    pointBorderColor: 'purple',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 2
};





var speedData = {
    labels: ["Sun Jul 14", "Mon Jul 15", "Tue Jul 16", "Wed Jul 17", "Thur Jul 18", "Fri Jul 19", "Sat Jul 20"],
    datasets: [dataFirst, dataSecond, dataThird, dataFourth, dataFifth]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'right',
        labels: {
            boxWidth: 0,
            fontColor: 'purple'
        }
    },

    scales: {
        yAxes: [{

            gridLines: {
                display: false
            },
            ticks: {
                display: false
            }
        }],
        xAxes: [{

            gridLines: {
                display: false
            }
        }],
    }

};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
=======
// Start of Chats code

google.charts.load('current', {'packages':['corechart']}); // Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['bar']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawBarGraph);
google.charts.setOnLoadCallback(columnGraph);
google.charts.setOnLoadCallback(lineGraph);

function columnGraph() {

    var data = google.visualization.arrayToDataTable([
        ['Date', 'Jobs added', { role: 'style' } ],
        ['10/29', 4, '#b87333'],
        ['10/30', 7, 'silver'],
        ['11/01', 3, 'gold'],
        ['11/02', 5, 'color: #e5e4e2']
      ]);

      var options = {
        chart: {
          title: 'Jobs Added',
          subtitle: 'By day',
        },
      };

      var chart = new google.charts.Bar(document.getElementById('column-graph'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
  }

function drawBarGraph() {

    var data = google.visualization.arrayToDataTable([
      ['Collection', 'Jobs', { role: 'style' }],
      ['Wishlist', 6, 'purple'],
      ['Applied', 5, 'blue'],
      ['Interview', 4, 'green'],
      ['Offer', 3, 'yellow'],
      ['Rejected', 0, 'white']
    ]);

    var options = {
      title: 'Stage analysis',
      chartArea: {width: '100%'},
      animation:{
        duration: 1000,
        easing: 'in',
      },
      animation: {"startup": true}
      
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar-graph'));

    chart.draw(data, options);
  }

function lineGraph() {
    var data = google.visualization.arrayToDataTable([
      ['Date', 'Wishlist', 'Offers', 'Applied', 'Rejected','Interveiv'],
      ['10/29',     1,          1,          1,          1,          1],
      ['10/30',     1,          1,          1,          1,          1],
      ['11/01',     2,          1,          1,          1,          1],
      ['11/02',     3,          2,          1,          2,          1],
      ['11/03',     4,          3,          1,          3,          2],
      ['11/04',     3,          4,          2,          4,          3],
      ['11/05',     2,          5,          3,          5,          4],
      ['11/06',     1,          4,          4,          4,          3],
      ['11/07',     0,          3,          3,          3,          2],
      ['11/08',     0,          2,          2,          2,          1],
      ['11/09',     0,          1,          1,          1,          0],
      ['11/10',     0,          0,          0,          0,          0],
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('line-graph'));

    chart.draw(data, options);
  }
// End of charts code


// Vue Object
var metrics = new Vue({
    el: "#metrics",
    data: {
        map: null,
        tileLayer: null,
        dropdown_font: ['My firstBoard'],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        items: [
            { icon: 'images/huntr_logo_mini.png' },
            { icon: 'images/microphone.png' },
            { icon: 'images/thumbtack.png' },
            { icon: 'images/settings.png' },
            { icon: 'images/power-off.png' }
        ],
    },

    mounted: {

    },

    methods: {

    },

    computed: {

    },

>>>>>>> e0983eca7e4717e90075e709cfb0094ef9e8f5bf
});