import React, {useEffect, useState} from 'react';
import Utilisateur from "../models/utilisateur";
import AuthenticationService from "../services/authentication-service";
import AnnonceCardColunn from "../components/annonce-cardColunn";
import Pagination from "../components/pagination";

const Bibliotheque: React.FC = () => {

    const [user, setUser] = useState<Utilisateur|null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentCategorie, setCurrentCategorie] = useState<string>();

    useEffect(() => {
        AuthenticationService.getUtilisateurLogin().then(user => setUser(user));
    }, );


    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    const handleChangeCategorie = (categorie: string) => {
        setCurrentCategorie(categorie);
    };

    const itemsPerPage = 10;
    const start = currentPage * itemsPerPage - itemsPerPage;

    return (
        <>
            <div>
                <h1 className="text-center">Votre Bibliotheque !</h1>
                { user ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card bg-light mt-4">
                                    <div className="card-header">Mes informations:</div>
                                    <div className="card-body">
                                        <p><b>Votre nom :</b></p>
                                        <p>{user.firstName}&nbsp;{user.lastName}</p>
                                        <p><b>Votre numéro :</b></p>
                                        <p>{user.number}</p>
                                        <hr />
                                        <p><b>Votre adresse Email :</b></p>
                                        <p><small>{user.email}</small></p>
                                    </div>
                                </div>
                                <div className="card bg-light mt-4">
                                    <div className="card-header">Ces exigences pour le(s) troc(s):</div>
                                    <div className="card-body">
                                        <p>{user.exigences}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="card-columns">
                                    {user.annonces!.map(annonce => (
                                        <AnnonceCardColunn key={annonce.id} annonce={annonce} biblio={true}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} length={user.annonces!.length} onPageChanged={handleChangePage}/>
                    </div>
                ) : (
                    <h4 className="center">CHARGEMENT ...</h4>
                )}
            </div>
        </>
    )
};

export default Bibliotheque;