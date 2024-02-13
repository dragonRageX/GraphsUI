//Chart Options
const options = {
    chart: {
        height: 450,
        width: "100%",
        type: "bar",
        background: "#f4f4f4",
        foreColor: "333"
    },
    series: [
        {
            name: "Population",
            data: [ 8335897, 3822238, 2665039, 2302878, 1644409, 1567258, 1472909, 1381162, 1299544, 974447 ]
        }
    ],
    xaxis: {
        categories: [ "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin" ]
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    fill: {
        colors: ["#f44336"]
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: "Largest US Cities by Population",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: "18px"
        }
    }
};

//Initialize Chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

//Render Chart
chart.render();