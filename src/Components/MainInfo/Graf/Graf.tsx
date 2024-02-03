import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Operation } from "../types/Type";

let chart: Chart | null = null;

const Graf = ({ operations }: { operations: Operation[] }): JSX.Element => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const amounts: number[] = operations.map(
    (transaction: Operation) => transaction.amount
  );
  const createdAts: string[] = operations.map(
    (transaction: Operation) => transaction.created_at
  );
  const timeArray = createdAts.map(
    (dateTime) => dateTime.split("T")[1].split(":")[0] + ":" + dateTime.split(":")[1]
  );

  useEffect(() => {
    const data = {
      labels: [...timeArray],
      datasets: [
        {
          label: "",
          data: [...amounts],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      }
    };

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        if (chart) {
          chart.destroy();
        }
        chart = new Chart(ctx, {
          type: "line",
          data: data,
          options: options,
        });
      }
    }
  }, [operations, amounts, timeArray]);

  return <canvas ref={chartRef} width="430" height="255"></canvas>;
};

export default Graf;
