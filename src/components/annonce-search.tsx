import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Annonce from "../models/annonce";
import AnnonceService from "../services/annonce-service";

const AnnonceSearch: FunctionComponent = () => {

    const [term, setTerm] = useState<string>('');
    const [annonces, setAnnonces] = useState<Annonce[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const term = e.target.value;
        setTerm(term);

        if(term.length <= 1) {
            setAnnonces([]);
            return;
        }

        AnnonceService.searchAnnonce(term).then(annonces => setAnnonces(annonces));
    };

    return (
        <div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Rechercher un livre" value={term} onChange={e => handleInputChange(e)} />
                    <div className='collection'>
                    {annonces.map((annonce) => (
                        <Link key={annonce.id} to={`/annonces/${annonce.id}`} className="collection-item">
                            {annonce.titre}
                        </Link>
                    ))}
                 </div>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
        </div>
    );
};

export default AnnonceSearch;