import React, { useRef, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js';

const MyChart=()=>{
    const chartRef=useRef(null);
    const chartInstanceRef=useRef(null)
    const data={
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[
            {
                label:'My First Dataset',
                data:[65, 59, 80, 81, 56, 55, 40],
                fill:false,
                backgroundColor:'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            }
        ],
    };

    const options={
        scales:{
            y:{
                beginAtZero:true
            }
        }
    }

    useEffect(() => {
        // Destroy the previous chart instance if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        // Create a new chart instance
        chartInstanceRef.current = new Chart(chartRef.current, {
          type: 'line',
          data: data,
          options: options,
        });
    
        // Cleanup function to destroy the chart instance on unmount
        return () => {
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
        };
      }, [data, options]);

    return <canvas ref={chartRef} />;
}
export default MyChart;