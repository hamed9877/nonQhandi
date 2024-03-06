/* eslint-disable prefer-rest-params */
import { useEffect, useRef, useState } from 'react';
import { Chart, ChartData } from 'chart.js';
// import { centerTextPlugin } from './util';

interface IDoughnutProps {
  data: ChartData;
}

const Doughnut = ({ data }: IDoughnutProps) => {
  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
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

export default Doughnut;
