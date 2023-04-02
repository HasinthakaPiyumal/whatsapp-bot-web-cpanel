import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const LineChart = (prop) => {
	const [chartInstance, setChartInstance] = useState(null);
	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current && chartInstance) {
			// destroy the existing chart instance
			chartInstance.destroy();
		}

		if (chartRef.current) {
			const myChartRef = chartRef.current.getContext("2d");
			const newChartInstance = new Chart(myChartRef, {
				type: "line",
				data: {
					labels: prop.data.labels,
					datasets: [
						{
							label: prop.label,
							data: prop.data.values,
							fill: false,
							borderColor: prop.borderColor ||  ["#2196f3","#8F5FE8","#00D25B"],
							tension: 0.1,
							pointStyle: "circle",
							pointRadius: 3,
							pointHoverRadius: 5,
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						y: {
							ticks: {
								color: "#8F5FE8", // change label color for y axis
							},
						},
						x: {
							ticks: {
								color: "#ffaaffaa", // change label color for x axis
							},
						},
					},
                    borderColor: prop.borderColor || '#2196f3'
				},
			});
			setChartInstance(newChartInstance);
		}
	}, [prop.data]);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
		</div>
	);
};

export default LineChart;
