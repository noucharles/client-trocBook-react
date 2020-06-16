import React, {useState} from 'react';
import Field from "../components/forms/Field";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import AnnonceService from "../services/annonce-service";
import axios from "axios";
import {number} from "prop-types";

const AnnonceAdd: React.FC = () => {

    const [form, setForm] = useState({
        ville: "",
        classe: '6 éme',
        titre: "",
        editeur: "",
        parution: 2010,
        description: ""
    });

    const classes: string[] = ['6 éme', '5 éme', '4 éme', '3 éme', '2 nde', '1 er', 'Tle'];

    const [error, setError] = useState({
        ville: "",
        titre: "",
        editeur: "",
        parution: "",
        description: ""
    });

    const history = useHistory();

    // Gestion des champs Input
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setForm({...form, [name]: value});
    };

    // Gestion des champs Select
    const handleChangeSelect = (event : React.ChangeEvent<HTMLSelectElement>): void => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setForm({...form, [name]: value});
    };

    // Gestion des champs TextArea
    const handleChangeTextArea = (event : React.ChangeEvent<HTMLTextAreaElement>): void => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setForm({...form, [name]: value});
    };

    // Gestion du submit
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/api/annonces",form);
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }

    };

    return (
        <>
            <h1 className="col-5 offset-3">Création d'une annonce</h1>

            <form onSubmit={handleSubmit} className="col-5 offset-3">
                <Field name="titre" label="Titre" value={form.titre} onChange={handleChange} placeholder="Titre du livre" type="text" error={error.titre}/>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="classes">Classe</label>
                    </div>
                    <select value={form.classe} name="classe" onChange={handleChangeSelect} className="custom-select" id="classes">
                        {classes.map(classe => (
                            <option key={classe} value={classe}>{classe}</option>
                        ))}
                    </select>
                </div>

                <Field name="editeur" label="Maison d'édtition" value={form.editeur} onChange={handleChange} placeholder="Maison d'édtition du livre" type="text" error={error.editeur}/>

                <div className="form-group">
                    <label htmlFor="parution">Année de parution</label>
                    <input type="number" onChange={handleChange} value={form.parution} min="1970" id="parution" className={"form-control" + (error.parution && " is-invalid") } name="parution" />
                    {error && <p className="invalid-feedback">{error.parution}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description du livre</label>
                    <textarea className={"form-control" + (error.description && " is-invalid") }  onChange={handleChangeTextArea} placeholder="Veuillez précisez ici l'état du livre et donner le maximun d'information possible" value={form.description} id="description" name="description" rows={4} />
                    {error && <p className="invalid-feedback">{error.description}</p>}
                </div>

                <Field name="ville" label="Quartier" value={form.ville} onChange={handleChange} placeholder="Votre quartier" type="text" error={error.ville}/>

                <div className="form-group">
                    <button type="submit" className="btn btn-success">Enregistrer</button>
                    <Link to="/annonces" className="btn btn-link">Retour à la liste d'annonces</Link>
                </div>
            </form>
        </>
    )
};

export default AnnonceAdd;