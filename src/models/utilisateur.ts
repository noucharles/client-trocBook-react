export default class Utilisateur {
    // 1. Typage des propiétés d'un utilisateur.
    id ?: number;
    email ?: string;
    roles ?: string;
    password ?: string;
    firstName ?: string;
    lastName ?: string;
    number ?: number;
    annonces ?: Array<string>;

    // 2. Définition des valeurs par défaut des propriétés d'un utilisateur.
    constructor(
        id ?: number,
        email ?: string,
        roles?: string,
        password ?: string,
        firstName ?: string,
        lastName ?: string,
        number ?: number,
        annonces ?: Array<string>
    ) {
        // 3. Initialisation des propiétés d'un utilisateur.
        this.id = id;
        this.email = email;
        this.roles = roles;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
        this.annonces = annonces;
    }
}