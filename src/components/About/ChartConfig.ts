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
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      borderColor: "rgba(255, 255, 255, 1)",
      borderWidth: 1,
      pointBackgroundColor: "rgba(50, 50, 50, 1)",
    },
  ],
};

export const options = {
  scales: {
    r: {
      angleLines: { display: false },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: { display: false },
      pointLabels: {
        display: true,
        font: { size: 18 },
      },
    },
  },
  plugins: {
    legend: { display: false },
  },
};
