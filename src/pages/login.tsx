import React, { useState } from 'react';
import AuthenticationService from "../services/authentication-service";
import {useHistory} from "react-router-dom";

type Params = {
    onLogin: any
};

const Login: React.FC<Params> = ({ onLogin }: Params) => {

const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const history = useHistory();

    // Gestion des champs
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;

        setForm({...form, [name]: value});
    };

    // Gestion du submit
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await AuthenticationService.login(form);
            setError("");
            onLogin(true);
            history.replace("/annonces/add");
        } catch (e) {
            setError("Aucun compte ne posséde cet Adresse email ou alors les informations ne correspondent pas");
        }
    };

    return (
        <div  className="container-fluid">
            <h1 className="col-5 offset-3 mt-4">Connexion a l'application</h1>

            <form  onSubmit={handleSubmit} className="col-5 offset-3">
                <div className="form-group">
                    <label htmlFor="username">Adresse email</label>
                    <input type="text" onChange={handleChange} className={"form-control" + (error && " is-invalid") } value={form.username} placeholder="Adresse email de connexion" id="username" name="username"/>
                    {error && <p className="invalid-feedback">{error}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" onChange={handleChange} className="form-control" value={form.password} placeholder="Mot de passe" id="password" name="password"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Je me connecte</button>
                </div>
            </form>
        </div>
    );
};

export default Login;