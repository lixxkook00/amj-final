import React , {useRef} from 'react';

import {CanvasJSChart} from 'canvasjs-react-charts'

import './CommisionChart.scss'

export default function CommisionChart() {

    return (
        <div className="commision-chart">
            <img src="./images/chart.png" alt="" />
        </div>
    )
    // const chartInit = useRef();

    // const createPareto = () => {
	// 	var dps = [];
	// 	var chart = chartInit;
	// 	var yValue, yTotal = 0, yPercent = 0;

	// 	for(var i = 0; i < chart.data[0].dataPoints.length; i++)
	// 		yTotal += chart.data[0].dataPoints[i].y;
	// 	for(var i = 0; i < chart.data[0].dataPoints.length; i++){
	// 		yValue = chart.data[0].dataPoints[i].y;
	// 		yPercent += (yValue / yTotal * 100);
	// 		dps.push({label: chart.data[0].dataPoints[i].label, y: yPercent});
	// 	}
	// 	chart.addTo("data",{type:"line", yValueFormatString: "0.##"%"", dataPoints: dps});
	// 	chart.data[1].set("axisYType", "secondary", false);
	// 	chart.axisY[0].set("maximum", Math.round(yTotal / 20) * 20);
	// 	chart.axisY2[0].set("maximum", 100);
	// }

    // const options = {
	// 		title:{
	// 			text: "Customer Complaints"
	// 		},
	// 		axisX : {
	// 			title: "Type of Defect"
	// 		},
	// 		axisY: {
	// 			title: "Number of Defects",
	// 			lineColor: "#4F81BC",
	// 			tickColor: "#4F81BC",
	// 			labelFontColor: "#4F81BC"
	// 		},
	// 		axisY2: {
	// 			title: "Percent",
	// 			suffix: "%",
	// 			lineColor: "#C0504E",
	// 			tickColor: "#C0504E",
	// 			labelFontColor: "#C0504E"
	// 		},
	// 		data: [{
	// 			type: "column",
	// 			dataPoints: [
	// 				{ label: "Strain", y: 104 },
	// 				{ label: "Scratch", y: 42 },
	// 				{ label: "Pinhole", y: 20 },
	// 				{ label: "Crack", y: 10 },
	// 				{ label: "Gap", y: 4 },
	// 				{ label: "Others", y: 14 }
	// 			]
	// 		}]
	// 	}
	// 	return (
    //         <div>
    //             <CanvasJSChart options = {options}
    //                 ref={chartInit}
    //             />
    //             {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    //         </div>
	// 	);

//   const options = {
// 			animationEnabled: true,
// 			colorSet: "colorSet2",
// 			title: {
// 				text: "Monthly Sales"
// 			},
// 			axisX: {
// 				valueFormatString: "MMMM"
// 			},
// 			axisY: {
// 				prefix: "$",
// 			},
//             axisY2: {
// 				title: "Percent",
// 				suffix: "%",
// 				lineColor: "#C0504E",
// 				tickColor: "#C0504E",
// 				labelFontColor: "#C0504E"
// 			},
// 			toolTip: {
// 				shared: true
// 			},
// 			legend: {
// 				cursor: "pointer",
// 				verticalAlign: "top"
// 			},
// 			data: [{
// 				type: "column",
// 				name: "Actual Sales",
// 				showInLegend: true,
// 				// xValueFormatString: "",
// 				yValueFormatString: "$#,##0",
// 				dataPoints: [
// 					{ x: new Date(2017, 0), y: 100 },
// 					{ x: new Date(2017, 1), y: 500 },
// 					{ x: new Date(2017, 2), y: 1000 },
// 					{ x: new Date(2017, 3), y: 5000 },
// 					{ x: new Date(2017, 4), y: 10000 },
// 					{ x: new Date(2017, 5), y: 20000 },
// 					{ x: new Date(2017, 6), y: 50000 }
// 				]
// 			},
//             {
// 				type: "column",
// 				name: "Actual Sales",
// 				showInLegend: true,
// 				// xValueFormatString: "",
// 				yValueFormatString: "$#,##0",
// 				dataPoints: [
// 					{ x: new Date(2017, 0), y: 100 },
// 					{ x: new Date(2017, 1), y: 500 },
// 					{ x: new Date(2017, 2), y: 1000 },
// 					{ x: new Date(2017, 3), y: 5000 },
// 					{ x: new Date(2017, 4), y: 10000 },
// 					{ x: new Date(2017, 5), y: 20000 },
// 					{ x: new Date(2017, 6), y: 50000 }
// 				]
// 			},{
// 				type: "line",
// 				name: "Expected Sales",
// 				showInLegend: true,
// 				yValueFormatString: "$#,##0",
// 				dataPoints: [
// 					{ x: new Date(2017, 0), y: 38000 },
// 					{ x: new Date(2017, 1), y: 39000 },
// 					{ x: new Date(2017, 2), y: 35000 },
// 					{ x: new Date(2017, 3), y: 37000 },
// 					{ x: new Date(2017, 4), y: 42000 },
// 					{ x: new Date(2017, 5), y: 48000 },
// 					{ x: new Date(2017, 6), y: 41000 }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}/>
// 		</div>
//     )
}
// 