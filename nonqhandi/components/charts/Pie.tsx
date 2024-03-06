/* eslint-disable prefer-rest-params */
import { Chart, ChartData } from "chart.js";
import { useEffect, useRef } from "react";

interface IPieProps {
  data: ChartData;
}

const Pie = ({ data }: IPieProps) => {
  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = data;
      chartRef.current.update();
    }
  }, [data]);

  return <canvas ref={canvasCallback} />;
};

export default Pie;
