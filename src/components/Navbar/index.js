import React from 'react';
import "./style.css"

function Navbar(props){
    return(
    <div className = "jumbotron">
    <header> 
    
        <h2>МЕМОРЫ  ГАМЕ!</h2>
        {props.children}
        
    </header>

    </div>
    );
    
    }

    export default Navbar;