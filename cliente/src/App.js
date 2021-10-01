import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Usuario from "./forms/Usuario";
import Salida from "./forms/Salida";

function App() {
    return(
        <Router>
            <Route path="/" exact>
                <Usuario />
            </Route>
            <Route path="/salida">
                <Salida />
            </Route>
        </Router>
    )
}

export default App;