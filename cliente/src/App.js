import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Usuario from "./forms/Usuario";
import Cine from "./forms/Cine";
import Concierto from "./forms/Concierto";
import Carro from "./forms/Carro";
import Deporte from "./forms/Deporte";
import Musica from "./forms/Musica";
import Salida from "./forms/Salida";

function App() {
    return(
        <Router>
            <Route path="/" exact>
                <Usuario />
            </Route>
            <Route path="/cine">
                <Cine />
            </Route>
            <Route path="/car">
                <Carro />
            </Route>
            <Route path="/concert">
                <Concierto />
            </Route>
            <Route path="/sport">
                <Deporte />
            </Route>
            <Route path="/music">
                <Musica />
            </Route>
            <Route path="/salida">
                <Salida />
            </Route>
        </Router>
    )
}

export default App;