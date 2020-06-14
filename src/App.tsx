import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AnnonceList from "./pages/annonce-list";
import AnnonceDetail from "./pages/annonce-detail";
import AnnonceUtilisateur from "./pages/annonce-utilisateur";
import Login from "./pages/login";
import Navbar from "./components/navbar";

const App: React.FC = () => {

    return (
        <Router>
            <div>
                {/*La barre de navigation commun à toutes les pages*/}
                <Navbar />
                {/* Le systéme de gestion des routes de notre application*/}
                <Switch>
                    <Route exact path="/" component={AnnonceList}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/annonces" component={AnnonceList}/>
                    <Route exact path="/annonces/utilisateur/:id" component={AnnonceUtilisateur}/>
                    <Route exact path="/annonces/:id" component={AnnonceDetail}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;