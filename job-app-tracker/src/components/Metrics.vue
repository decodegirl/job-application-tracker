<template>
    <div>
        <!--title-->
        <h1 style="padding-top: 60px;padding-left:100px; color:indigo;">Board Metrics</h1>

        <!--start of the metric tables and graphs -->
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 class="pl-5 pt-3 pr-3" style='height:350px;'>
                    <v-card color="white" dark>
                        <v-card-title primary class="title" style="color:black;">Jobs added</v-card-title>
                        <v-card-text style="color:rgba(97, 97, 97, 0.753); padding-top: 0px;"> By Day </v-card-text>
                        <canvas id="barChart" width="400" height="150"></canvas>
                        </graph-bar>


                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 class="pl-3 pt-3 pr-5" style='height:350px;'>
                    <v-card color="white" dark>
                        <v-card-title primary class="title" style="color:black;">Stage Analysis</v-card-title>
                        <canvas id="densityChart" width="400" height="180"></canvas>

                    </v-card>
                </v-flex>


                <v-flex d-flex xs12 sm12 class="pl-5 pr-5 pt-3" style="height:500px;">
                    <v-card color="white" dark>
                        <v-card-title primary class="title" style="color:black;">Job Activity</v-card-title>
                        <v-card-text style="color:rgba(97, 97, 97, 0.753); padding-top: 0px;"> By Stage</v-card-text>
                        <canvas id="speedChart" width="300" height="100"></canvas>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

    import Chart from 'chart.js'

    export default {
    data () {
        return {
            date: new Date().toISOString().substr(0, 10),
            labels: ["7/11", "7/12", "7/13", "7/14", "7/15", "7/16", "7/17", "/7/18"],
            votes: [5, 19, 3, 5, 2, 15, 10, 20],
            props: ["labels", "values", "type"],
            template: '<canvas width="400" height="150"></canvas>',
        }
    },

    mounted: function () {
        //graph two start
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

        //graph three
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
        });


        //start of graph one.

        var canvas = document.getElementById("barChart");
        var ctx = canvas.getContext('2d');

        // Global Options:
        Chart.defaults.global.defaultFontColor = 'dodgerblue';
        Chart.defaults.global.defaultFontSize = 16;


        // Data with datasets options
        var data = {
            labels: ["7/11", "7/12", "7/13", "7/14", "7/15", "7/16", "7/17", "/7/18"],
            datasets: [{
                label: "Jobs Applied ",
                fill: true,
                backgroundColor: "rgba(128, 128, 128, 0.5)",
                hoverBackgroundColor: "rgba(140, 20, 252, 1)",
                borderColor: "rgba(128, 128, 128, 0.5)",

                data: [5, 19, 3, 5, 2, 15, 10, 20]
            }]
        };

        // Notice how nested the beginAtZero is
        var options = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        display: false
                    },
                    gridLines: {
                        display: false
                    }
                }],

                xAxes: [{
                    ticks: {
                        beginAtZero: true

                    },
                    gridLines: {
                        display: false
                    }
                }],


            }
        };

        // Chart declaration:
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }
    }
</script>

