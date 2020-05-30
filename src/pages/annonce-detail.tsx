import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Annonce from "../models/annonce";
import AnnonceService from "../services/annonce-service";

type Params = { id: string };

const AnnonceDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [annonce, setAnnonce] = useState<Annonce|null>(null);

    useEffect(() => {
        AnnonceService.getAnnonce(+match.params.id).then(annonce =>setAnnonce(annonce));
    }, [match.params.id]);

    return (
        <div>
            { annonce ? (
                <div className="row">
                    <div className="col-12 m-4 offset-2">
                        <h2 className="text-center">{ annonce.ville }</h2>
                        <div className="card" data-toggle="tooltip">
                            <div className="card-image">
                                <img src="https://via.placeholder.com/250C/808080 C/O https://placeholder.com/O https://placeholder.com/" alt="image" style={{width: '250px', margin: '0 auto'}}/>
                                <Link to={`/pokemons/edit/${annonce.id}`} className="btn btn-floating halfway-fab waves-effect waves-light">
                                    <i className="material-icons">edit</i>
                                </Link>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <table className="">
                                        <tbody>
                                        <tr>
                                            <td>Nom</td>
                                            <td><strong>{ annonce.classe }</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Points de vie</td>
                                            <td><strong>{ annonce.parution }</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Dégâts</td>
                                            <td><strong>{ annonce.editeur}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Date de création</td>
                                            <td>{annonce.created}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-action">
                                    <Link to="/">Retour</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 className="text-center">CHARGEMENT ...</h4>
            )}
        </div>
    );
};

export default AnnonceDetail;