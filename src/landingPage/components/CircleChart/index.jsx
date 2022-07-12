import React from 'react'

import {CanvasJSChart} from 'canvasjs-react-charts'


export default function CircleChart() {

    const options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        data: [{
            type: "doughnut",
            showInLegend: false,
            colorSet: "greenShades",
            indexLabelFontColor:"#fff",
            indexLabelFontWeight: "bold",
            indexLabelFontSize: 16,
            // yValueFormatString: "#'%'",
            dataPoints: [
                { name:"ICO Program", y: 60.25 ,color: "#07BAF3"},
                { name:"Marketing and Community Development", y: 7.10 ,color: "#6FD6C2"},
                { name:"Dev Team",y: 12.65 ,color: "#FFC002"},
                { name:"Ecosystem Application",y: 12,color: "#F29609" },
                { name:"Partners and Venture Capitals",y: 8 ,color: "#FFEF85"}
            ]
        }]
    }
  return (
    <div className="circhart">
        <CanvasJSChart options = {options}
        />
    </div>
  )
}
