import React from 'react';
import {Link} from "react-router-dom";
import AuthenticationService from "../services/authentication-service";
import AnnonceSearch from "./annonce-search";

const Navbar: React.FC = () => {

    const handleLogout = (): void => {
        AuthenticationService.logout();
    };

    return (
        <>
                {/*La barre de navigation commun à toutes les pages*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand">
                        <Link to="/" className="brand-logo center">TrocBook</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <AnnonceSearch />
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Inscription</a>
                        </li>
                        <li className="nav-item ml-2">
                            <a href="#" className="btn btn-success">Connexion</a>
                        </li>
                        <li className="nav-item ml-2">
                            <button onClick={handleLogout} className="btn btn-danger">Déconnexion</button>
                        </li>
                    </ul>
                </nav>
        </>
    )
};

export default Navbar;