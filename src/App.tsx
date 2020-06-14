import React, {useState} from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AnnonceList from "./pages/annonce-list";
import AnnonceDetail from "./pages/annonce-detail";
import AnnonceUtilisateur from "./pages/annonce-utilisateur";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import AnnonceAdd from "./pages/annonce-add";
import PrivateRoute from "./PrivateRoute";
import Bibliotheque from "./pages/bibliotheque";
import AuthenticationService from "./services/authentication-service";

AuthenticationService.setup();

const App: React.FC = () => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AuthenticationService.isAuthenticated);

    return (
        <Router>
            <div>
                {/*La barre de navigation commun à toutes les pages*/}
                <Navbar isAuthenticated={isAuthenticated} onLogout={setIsAuthenticated} />
                {/* Le systéme de gestion des routes de notre application*/}
                <Switch>
                    <Route exact path="/" component={AnnonceList}/>
                    <Route exact path="/login" render={props => <Login onLogin={setIsAuthenticated}/>}/>
                    <Route exact path="/annonces" component={AnnonceList}/>
                    <PrivateRoute exact path="/annonces/add" component={AnnonceAdd}/>
                    <Route exact path="/annonces/utilisateur/:id" component={AnnonceUtilisateur}/>
                    <Route exact path="/annonces/:id" component={AnnonceDetail}/>
                    <PrivateRoute exact path="/Ma_Bibliothéque" component={Bibliotheque}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;