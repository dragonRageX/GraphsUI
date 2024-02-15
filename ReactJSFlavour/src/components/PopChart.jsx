import React from "react";
import Chart from "react-apexcharts";

export default function PopChart()
{
    let [graph, setGraph] = React.useState({ 
        options: {
            chart: {
                background: "#f4f4f4",
                foreColor: "333"
            },
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
        }, 
        series: [{
            name: "Population",
            data: [ 8335897, 3822238, 2665039, 2302878, 1644409, 1567258, 1472909, 1381162, 1299544, 974447 ]
        }]
    });

    function toggle()
    {
        setGraph((prevGraph) => {
            return {
                ...prevGraph,
                options: {
                    ...prevGraph.options,
                    plotOptions: {
                        ...prevGraph.options.plotOptions,
                        bar: {
                            ...prevGraph.options.plotOptions.bar,
                            horizontal: !(prevGraph.options.plotOptions.bar.horizontal)
                        }
                    }
                }
            }
        });
    }

    return (
        <>
            <Chart 
                options={graph.options}
                series={graph.series}
                type="bar"
                width="100%"
                height="450"
                />
            <button onClick={toggle}>Toggle {graph.options.plotOptions.bar.horizontal ? "Vertical" : "Horizontal"}</button>
        </>
    )
}