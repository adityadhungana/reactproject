import React, { Component } from "react";
import scp from "./data.json";

const SCP = scp.map(
    (scp) => 
    {
        return(
           

            <div key={scp}>
                <b><h2>{scp.subject}</h2></b>
                
                <p> <b>Object class: </b>  {scp.class}</p>
                <p> <b>Special Containment Procedures: </b> {scp.containment}</p>
                <p> <b>Description: </b> {scp.description}</p>
                
                <hr></hr>
           </div>
           
            );
        }
    );
    
    

class Content extends Component {
    render() {
        return (
            <div class="jumbotron">
                <div class="container">          
                 {SCP}
                  </div>
                  </div>
                  
        );
    }
}

export default Content;
