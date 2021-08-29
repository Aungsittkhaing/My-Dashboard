$('.counter').counterUp({
    delay: 10,
    time: 1000
});
//charts
let  orderCountArr = [7, 5, 6, 4, 6, 4, 8, 6, 8, 9, 6];
let viewCountArr = [13, 12, 15, 14, 20, 17, 19, 16, 23, 33, 16];

var ctx = document.getElementById('ov').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
            label: 'Orders Lists',
            data: [12, 19, 3, 5, 2, 3, 8 ,9, 10, 13, 15, 14],
            backgroundColor: [
                'rgba(0,0,0,0)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1,
            lineTension: 0
        },
        {
            label: 'Months',
            data: [4, 8, 7, 9, 3, 3, 6, 1, 2, 4, 5, 10],
            backgroundColor: [
                'rgba(0,0,0,0)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1,
            lineTension: 0
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                display:true,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes:[
                {display: true,
                gridLines:[
                    {
                        display: false
                    }
                ]
                }
            ]
        },
        legend:{
            display: true,

            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});
//barChart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Email Statists',
            data: [12, 19, 3, 5, 2, 3, 8, 9, 10, 4, 7,1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B',
                '#2C394B'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:true,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes:[
                {display: true,
                gridLines:[
                    {
                        display: false
                    }
                ]
                }
            ]
        },
        legend:{
            display: true,

            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});

var ctx = document.getElementById('op').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Technologies', 'Economics', 'Political', 'Medicine', 'Socials', 'Sciences','Educations'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});