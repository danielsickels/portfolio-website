import React from "react";
import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";

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
      <h2 className="text-5xl font-bold py-10">Who Am I?</h2>
      <h3 className="text-2xl font-bold">My Big Five Traits</h3>
      <div className="flex items-center justify-center w-1/2 h-1/2 ml-12 pl-5 mt-4">
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
};

export default BigFiveChart;
