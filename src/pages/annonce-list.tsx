import React, { FunctionComponent, useState, useEffect } from 'react';
import Annonce from "../models/annonce";
import AnnonceService from "../services/annonce-service";
import {Link} from "react-router-dom";
import AnnonceCard from "../components/annonce-card";
import Pagination from "../components/pagination";

const AnnonceList: FunctionComponent = () => {

    const [annonces, setAnnonces] = useState<Annonce[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [categories, setCategories] = useState<Array<string>>(['all', '6 éme', '5 éme', '4 éme', '3 éme', '2 nde', '1 er', 'Tle']);
    const [currentCategorie, setCurrentCategorie] = useState<string>();

    useEffect(() => {
        AnnonceService.getAnnoncesParClasse(currentCategorie).then(annonces => setAnnonces(annonces));
    }, [currentCategorie]);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    const handleChangeCategorie = (categorie: string) => {
        setCurrentCategorie(categorie);
    };

    const itemsPerPage = 10;


    const start = currentPage * itemsPerPage - itemsPerPage;
    const paginationAnnonces = annonces.slice(start, start+itemsPerPage);


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <h1 className="my-4">Catégories</h1>
                        <div className="list-group">
                            {categories.map(categorie => (
                                <button  className={"list-group-item" + (currentCategorie === categorie && " active")} onClick={() => handleChangeCategorie(categorie)}>{categorie}</button>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="row">
                            {paginationAnnonces.map(annonce => (
                                <AnnonceCard key={annonce.id} annonce={annonce}/>
                            ))}
                        </div>
                    </div>
                </div>


                <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} length={annonces.length} onPageChanged={handleChangePage}/>

                <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3" style={{position: 'fixed', bottom:'25px' , right: '25px'}} to="/pokemon/add">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default AnnonceList;