import React, { FunctionComponent, useState, useEffect } from 'react';
import Annonce from "../models/annonce";
import AnnonceService from "../services/annonce-service";
import {Link} from "react-router-dom";
import AnnonceCard from "../components/annonce-card";
import AnnonceSearch from "../components/annonce-search";

const AnnonceList: FunctionComponent = () => {

    const [annonces, setAnnonces] = useState<Annonce[]>([]);
    const [totalAnnonces, setTotalAnnonces] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(3)

    useEffect(() => {
        AnnonceService.getAnnonces().then(annonces => setAnnonces(annonces))
    }, []);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    const itemsPerPage = 20;
    const pages = [];

    const pagesCount = Math.ceil(annonces.length / itemsPerPage);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log(pages);

    return (
        <div>
            <div className="container offset-1.5">
                <div className="row">
                    {annonces.map(annonce => (
                        <AnnonceCard key={annonce.id} annonce={annonce}/>
                    ))}
                </div>
                <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3" style={{position: 'fixed', bottom:'25px' , right: '25px'}} to="/pokemon/add">
                    <i className="material-icons">add</i>
                </Link>
                <ul className="pagination center-align">
                    <li className={ "waves-effect" + (currentPage === 1 && "disabled")}><button className={ "waves-effect" + (currentPage === 1 && "disabled")} onClick={() => handleChangePage(currentPage - 1)}><i className="material-icons">chevron_left</i></button></li>
                    {pages.map( page =>
                        <li key={page} className={"waves effect" + (currentPage === page && "active")}><button onClick={() => handleChangePage(page)}>{page}</button></li>
                    )}
                    <li className={"" + (currentPage === pagesCount && "disabled")} onClick={() => handleChangePage(currentPage + 1)}><button ><i className="material-icons">chevron_right</i></button></li>
                </ul>

            </div>
        </div>
    );
};

export default AnnonceList;