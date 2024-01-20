import React from "react";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
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
    <div className="flex flex-col items-center justify-center h-screen py-10">
      <h2 className="text-3xl font-bold">Big Five Personality Traits</h2>
      <div className="flex items-center justify-center w-full h-full ml-12 pl-5">
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
};

export default BigFiveChart;
