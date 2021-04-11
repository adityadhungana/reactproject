import React, { Component } from "react";
import scp from "./data.json";
import six from "./scp6.json";

const SCP = scp.map(
    (scp) => 
    {
        return(
           

            <div key={scp}>
                <b><h2>{scp.subject}</h2></b>
                
                <p class="text-justify"> <b>Object class: </b>  {scp.class}</p>
                <p class="text-justify"> <b>Special Containment Procedures: </b> {scp.containment}</p>
                
                <p class="text-justify"> <b>Description: </b> {scp.description}</p>
                
                <hr></hr>
           </div>
           
            );
        }
    );
    const second = six.map(
        (six) => 
        {
            return(
               
    
                <div key={six}>
                    <b><h2>{six.subject}</h2></b>
                    
                    <p class="text-justify"> <b>Object class: </b>  {six.class}</p>
                    <p class="text-justify"> <b>Special Containment Procedures: </b> {six.containment}</p>
                    <ol>
                        <li>{six.id1}</li>
                        <li>{six.id2}</li>
                        <li>{six.id3}</li>
                        <li>{six.id4}</li>
                    </ol>
                    <p class="text-justify"> <b>Description: </b> {six.description}</p>
                    
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
                 {second}
                  </div>
                  </div>
                  
        );
    }
}

export default Content;
