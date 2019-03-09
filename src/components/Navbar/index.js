import React from 'react';
import "./style.css"

function Navbar(props){
    return(
    <div className = "jumbotron">
    <header> 
    
        <h2>МЕМОРЫ  ГАМЕ!</h2>
        {props.children}
     <p>Click on an image to score points, but don't click the same one twice comrade! </p>   
    </header>

    </div>
    );
    
    }

    export default Navbar;