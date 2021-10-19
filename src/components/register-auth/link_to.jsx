import React from 'react'
import { Link } from "react-router-dom";

function Link_to(props){
    return (
        <>
            <Link to={props.link}><p>{props.text}</p></Link>
            
        </>
    )
}

export default Link_to;