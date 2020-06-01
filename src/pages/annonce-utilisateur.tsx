import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import 'moment/locale/fr';
import UtilisateurService from "../services/utilisateur-service";
import Utilisateur from "../models/utilisateur";
import AnnonceCard from "../components/annonce-card";
import './annonce-utilisateur.css';

type Params = { id: string };

const AnnonceUtilisateur: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [user, setUser] = useState<Utilisateur|null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        UtilisateurService.getUtilisateur(+match.params.id).then(utilisateur =>setUser(utilisateur));
    }, [match.params.id]);

    const formatDate = (str: any) => {
        return moment(str).format('ll');
    };

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };
    const itemsPerPage = 10;
    const start = currentPage * itemsPerPage - itemsPerPage;

    return (
        <div>
            { user ? (
                        <div className="container ml-3 mt-4 ">
                            <h2 className="text-center text-capitalize">Bibliothéque {user.firstName}</h2>

                                <div className="row">
                                    {  user.annonces!.map(annonce => (
                                        <AnnonceCard key={annonce.id} annonce={annonce}/>
                                    ))}
                                </div>

                                    <div className="card card-outline-secondary ml-auto my-4">
                                        <div className="card-header">
                                            Informations
                                        </div>
                                        <div className="card-body">
                                            <h3 className="text-lg-center">Qu'avez-vous à troquez ?</h3><br />
                                            <p className="text-center">Troquez tout vos livres scolaires gratuitement sur TrocBook</p>
                                            <button type="button" className="offset-3 btn btn-primary btn-lg ">Publiez votre annonce gratuitement</button>
                                            <hr />
                                            <ul>
                                                <h4>Nos Conseils de Sécurité</h4>
                                                <li>Ne troquez, sous aucun prétexte, avant d'avoir vu le livre.</li>
                                                <li>N'envoyez jamais d'argent pour « Réserver » un livre.</li>
                                                <li>Vérifiez la qualité du produit avant de troquer.</li>
                                                <li>Ne donnez pas d’informations personnelles (coordonnées bancaires, numéro de carte de crédit ...).</li>
                                            </ul>
                                        </div>
                                    </div>

                        </div>
            ) : (
                <h4 className="center">CHARGEMENT ...</h4>
            )}
        </div>
    );
};

export default AnnonceUtilisateur;