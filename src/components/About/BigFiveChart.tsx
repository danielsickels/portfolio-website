import React from "react";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";
import "./BigFiveChart.css";

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }>;
}

interface ChartOptions {
  scales: {
    r: {
      angleLines: {
        display: boolean;
      };
      suggestedMin: number;
      suggestedMax: number;
    };
  };
}

interface BigFiveChartProps {
  data: ChartData;
  options: ChartOptions;
}

const BigFiveChart: React.FC<BigFiveChartProps> = ({ data, options }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold py-10">My Personality Traits</h2>
      <div className="chart-container">
        <PolarArea data={data} options={options} />
      </div>
      <div className="chartLegend">
        {data.labels.map((label, index) => (
          <div key={label} className="legendItem">
            <span
              className="legendColorBox"
              style={{
                backgroundColor: data.datasets[0].borderColor[index],
              }}
            ></span>
            <span className="legendLabel">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigFiveChart;
