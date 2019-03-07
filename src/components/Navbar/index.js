import React from 'react';
import "./style.css"

function Navbar(props){
    return(
    <div class = "jumbotron">
        {/* <nav class = "navbar navbar-expand-lg navbar-light bg-light"> */}
    <header> 
    
        <h2>МЕМОРЫ  ГАМЕ!</h2>
        {props.children}
           {/* <button onClick ={props.NewGame}>New Game</button> */}
        
    </header>
    </div>
    );
    
    }

    export default Navbar;