import React from 'react';


function Navbar(props){
    return(
    <div>
        <nav class = "navbar navbar-expand-lg navbar-light bg-light">
    <header> 
    
        <h2>Memory Game</h2>
        {props.children}
           {/* <button onClick ={props.NewGame}>New Game</button> */}
        
    </header>
    </nav>
    </div>);
    
    }

    export default Navbar;