import { Achat } from "./achat";

export class Commande {

    id:number;
    idClient: number;
    date:string;
    prixTotal:number;
    infos:string;
    infos2:Array<Achat>;
    
}
