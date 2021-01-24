import * as React from 'react';
import * as ReactDOM from 'react-dom';

 class ListRender extends React.Component  {

    constructor(prop){
        super(prop);
    }

    render()  {
        return (
            <div>
                {
                  this.props.list &&  this.props.list.map(function(listValue){
                        if(listValue.value != "TOTAL INCOME"){
                        return <span style={{display: "block", fontSize:"13px"}}><button style={{background: listValue["color"], padding:"4px", border: "none", verticalAlign:"middle"}}></button>{listValue["value"]}</span>;
                        }
                    })
                }
            </div>
            );
        }
    };


export default ListRender;