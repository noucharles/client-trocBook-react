import Annonce from "../models/annonce";
import axios from "axios";

export default class AnnonceService {

    static getAnnonce(id: number): Promise<Annonce> {
        return axios.get(`http://localhost:3001/api/annonces/${id}`)
            .then(res => this.isEmpty(res.data) ? null : res.data);
    }

    static getAnnoncesParClasse(classe?: string): Promise<Annonce[]> {
            if(classe){

                if(classe === 'all') {
                    return axios.get(`http://localhost:3001/api/annonces?order[created]=desc`)
                        .then(res => res.data["hydra:member"])
                        .catch(error => this.handleError(error));
                }
                return axios.get(`http://localhost:3001/api/annonces?order[created]=desc&classe=${classe}`)
                    .then(res => res.data["hydra:member"])
                    .catch(error => this.handleError(error));
            }
        return axios.get(`http://localhost:3001/api/annonces?order[created]=desc`)
            .then(res => res.data["hydra:member"])
            .catch(error => this.handleError(error));
    }

    static  updateAnnonce(id: any, annonce : any) {
        return axios.put(`http://localhost:3001/api/annonces/${id}`,annonce);
    }

    static deleteAnnonce(id: any, annonce : any) {
        return axios.delete(`http://localhost:3001/api/annonces/${id}`,annonce);
    }

    static  postAnnonce(annonce: any) {
        return axios.post("http://localhost:3001/api/annonces",annonce);
    }

    static getAnnoncesParPage(num: number): Promise<Annonce[]> {
        return fetch(`http://localhost:3001/api/annonces?page=${num}&order[created]=desc`)
            .then(response => response.json())
            .then(res => res["hydra:member"])
            .catch(error => this.handleError(error));
    }


    static searchAnnonce(term: string): Promise<Annonce[]> {
        return axios.get(`http://localhost:3001/annonces?titre=${term}`)
            .then(response => response.data)
            .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}