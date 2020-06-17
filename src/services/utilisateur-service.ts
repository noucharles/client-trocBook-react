import Utilisateur from "../models/utilisateur";
import axios from "axios";
import annonce from "../models/annonce";

export default class UtilisateurService {

    static getUtilisateur(id: number) {
        return axios.get(`http://localhost:3001/api/users/${id}`)
            .then(res => this.isEmpty(res.data) ? null : res.data);
    }

    static postUtilisateur(utilisateur: any) {
        return axios.post("http://localhost:3001/api/users",utilisateur);
    }

    static updateUtilisateur(id: any, utilisateur: any) {
        let nbreAnnonce = [];

        for(let i: number = 0; i < utilisateur.annonces.length; i++){
            nbreAnnonce.push(`api/annonces/${utilisateur.annonces[i].id}`);
        }

        return axios.put(`http://localhost:3001/api/users/${id}`, {...utilisateur,
            annonces: nbreAnnonce
        });
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