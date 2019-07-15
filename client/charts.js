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

});