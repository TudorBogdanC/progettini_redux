import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function WeatherChart({ forecast }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (ctx && forecast) {
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: forecast.list.map(entry => {
            const date = new Date(entry.dt_txt);
            const day = date.toLocaleString('it', { weekday: 'long' });
            const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            return `${day} ${time}`;
          }),
          datasets: [{
            label: 'Temperatura',
            data: forecast.list.map(entry => entry.main.temp.toFixed()),
            backgroundColor: "rgba(72, 169, 166, 0.8)",
            borderColor: '#4D5061',
            tension: 0.1
          }]
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: 'white'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: 'white'
              }
            },
            y: {
              ticks: {
                color: 'white'
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [forecast]);

  return <div style={{ width: '700px', height: '700px'}} className="mx-auto"><canvas ref={chartRef}></canvas></div>;
}

export default WeatherChart;