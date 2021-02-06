import React from "react";
import './Video.css'

function Video (props){
    return(
       <div className="Cardvideo">
      
        <iframe width="460" height="315" src= {props.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video