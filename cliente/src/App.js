import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Vistas/Home'
//import Formcine from "./Vistas/formcine";
import Formmusica from "./Vistas/formmusica";



function App () {
    return(
        <Router>

            <Route path="/" exact> 
                <Home />
            </Route>

            <Route path="/formmusica">
                <Formmusica/>
            </Route>



        </Router>
    )

}
export default App;