
import * as ReactDOM from 'react-dom';
import {Doughnut} from 'react-chartjs-2';
import * as React from 'react';

class DoughnutChart extends React.Component {

    //if(json != null){
    
    dataSet(json) {
            var items = Array.prototype.slice.call(arguments[0]);
            var results = [];
            json.forEach(element => {
                var prop = Object.keys(element)[0];
                results.push({ color: element["color"], value: "" + element["value"]  , label: element["label"]});
            });
            return results;
    }

    render() {
    

    var json = this.props.JSON;
    var labels = this.props.Labels;
    const options={
        legend: {
            display: false,
        },
      };

    var items = [];
    var backgroundColor = [];
    var datasets = []

    if(json != null){

    var result = this.dataSet(json);

    result.forEach(element => {
            if (element.label != "TOTAL INCOME"){
            items.push(element.value);
            backgroundColor.push(element.color);
            }
    } )
    
    var data1 = {};

    data1["data"] = items;
    data1["backgroundColor"] = backgroundColor;

    var data = {};

    data["datasets"] = [data1];

    data["labels"] =  labels;
    
       return <Doughnut  data={ data} style={{float:"right"}} options={options} />;
    }else{
        return <div></div>
    }


    }
};


export default DoughnutChart;

