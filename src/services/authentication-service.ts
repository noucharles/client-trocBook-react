import axios from "axios";

export default class AuthenticationService {

    static login(form : object) : Promise<boolean>{
        return axios.post(`http://localhost:3001/api/login_check`, form)
            .then(response  => response.data.token)
            .then(token => {
                // Je stocke mon token dans le localStorage
                window.localStorage.setItem("authToken", token);
                // On prévient axios qu'on a maintenant un header par défaut sur toutes nos futures requetes
                axios.defaults.headers["Authorization"] = "Bearer " + token;
                return true;
            });
    }

    static logout() {
        window.localStorage.removeItem("authToken");
        delete axios.defaults.headers["Authorization"];
    }
}