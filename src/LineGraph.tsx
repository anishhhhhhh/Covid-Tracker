import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem: any, data: any) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
};

const LineGraph = () => {
  const [data, setData] = useState({});

  const buildChartData = (data: any, casesType = "cases") => {
    const chartData: any = [];
    let lastDataPoint: any;
    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data["cases"][date];
    }
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const chartData = buildChartData(data);
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <Line
        options={options}
        data={{
          datasets: [
            {
              backgroundColor: "rgba(204, 16, 52 ,0.5)",
              borderColor: "#CC1034",
              data: data,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineGraph;
