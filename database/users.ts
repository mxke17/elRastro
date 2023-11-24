//import { ObjectId } from "mongodb";
import { DatabaseItem } from "./databaseItem";

//export enum User {
//
//}

export class User extends DatabaseItem {
    email: string;
    username: string;
    //password: string;
    profilePicture: string;

    constructor() {
        super();

        this.email = "Correo electronico";
        this.username = "Nombre de usuario";
        //this.password = "Contraseña";
        this.profilePicture = "https://previews.123rf.com/images/iimages/iimages1601/iimages160100313/50692473-el-peque%C3%B1o-mono-comiendo-pl%C3%A1tanos-ilustraci%C3%B3n.jpg";
    }
}