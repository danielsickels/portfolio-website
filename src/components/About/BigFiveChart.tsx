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
    <div className="mt-10">
      <h2 className="text-4xl font-bold">Big Five Personality Traits</h2>
      <div>
        <div style={{ maxWidth: "850px" }}>
          <PolarArea data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BigFiveChart;
