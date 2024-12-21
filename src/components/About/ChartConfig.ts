export const bigFiveData = {
  labels: [
    "Openness",
    "Conscientiousness",
    "Extraversion",
    "Agreeableness",
    "Neuroticism",
  ],
  datasets: [
    {
      label: "Score",
    data: [90, 77, 31, 90, 4],
    backgroundColor: [
      "rgba(7, 13, 89, 0.3)",   // Dark Blue
      "rgba(31, 60, 136, 0.3)", // Blue
      "rgba(238, 95, 87, 0.3)", // Coral Red
      "rgba(255, 215, 215, 0.3)", // Light Pink
      "rgba(255, 255, 255, 0.3)", // White
    ],
    borderColor: [
      "rgba(7, 13, 89, 1)",   // Dark Blue
      "rgba(31, 60, 136, 1)", // Blue
      "rgba(238, 95, 87, 1)", // Coral Red
      "rgba(255, 215, 215, 1)", // Light Pink
      "rgba(255, 255, 255, 1)", // White
    ],
    borderWidth: 2,
    },
  ],
};

export const options = {
  scales: {
    r: {
      angleLines: { display: true },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: { display: false },
      pointLabels: {
        display: false,
        font: { size: 14 },
      },
    },
  },
  plugins: {
    legend: { display: false },
  },
};
