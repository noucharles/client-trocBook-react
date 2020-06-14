import Utilisateur from "../models/utilisateur";
import axios from "axios";

export default class UtilisateurService {

    static getUtilisateur(id: number): Promise<Utilisateur|null> {
        return axios.get(`http://localhost:3001/api/users/${id}`)
            .then(res => this.isEmpty(res.data) ? null : res.data)
            .catch(error => this.handleError(error));
    }

    static login(form: object): Promise<object> {
        return fetch(`http://localhost:3001/api/login_check`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static getUtilisateurParClasse(classe?: string): Promise<Utilisateur[]> {
        if(classe){

            if(classe === 'all') {
                return fetch(`http://localhost:3001/api/users?order[created]=desc`)
                    .then(response => response.json())
                    .then(res => res["hydra:member"])
                    .catch(error => this.handleError(error));
            }
            return fetch(`http://localhost:3001/api/users?order[created]=desc&classe=${classe}`)
                .then(response => response.json())
                .then(res => res["hydra:member"])
                .catch(error => this.handleError(error));
        }
        return fetch(`http://localhost:3001/api/users?order[created]=desc`)
            .then(response => response.json())
            .then(res => res["hydra:member"])
            .catch(error => this.handleError(error));
    }

    static searchUtilisateur(term: string): Promise<Utilisateur[]> {
        return fetch(`http://localhost:3001/annonces?titre=${term}`)
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}