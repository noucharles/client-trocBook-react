import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import AnnonceList from "./pages/annonce-list";
import AnnonceSearch from "./components/annonce-search";
import AnnonceDetail from "./pages/annonce-detail";

const App: React.FC = () => {

    return (
        <Router>
            <div>
                {/*La barre de navigation commun à toutes les pages*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="navbar-brand">
                        <Link to="/" className="brand-logo center">TrocBook</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <AnnonceSearch />
                    </div>
                </nav>
                {/* Le systéme de gestion des routes de notre application*/}
                <Switch>
                    <Route exact path="/" component={AnnonceList}/>
                    <Route exact path="/annonces" component={AnnonceList}/>
                    <Route exact path="/annonces/:id" component={AnnonceDetail}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;