import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: FunctionComponent = () => {

    return (
        <div className="text-center">
            <h1>Hey, cette page n'existe pas !</h1>
            <Link to="/">
                Retourner à l'accueil
            </Link>
        </div>
    );
};

export default PageNotFound;