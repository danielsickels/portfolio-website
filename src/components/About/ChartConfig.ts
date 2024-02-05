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
        "rgba(255, 99, 132, 0.3)",
        "rgba(54, 162, 235, 0.3)",
        "rgba(255, 206, 86, 0.3)",
        "rgba(75, 192, 192, 0.3)",
        "rgba(153, 102, 255, 0.3)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 2,
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
