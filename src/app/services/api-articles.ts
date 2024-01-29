import { Observable } from "rxjs";
import { Article } from "../modeles/article";
import { HttpClient } from "@angular/common/http";

export class ApiArticles {

    
  constructor(private http: HttpClient) { }

    getArticles(): Array<Article>{
        let liste:Array<Article> = [];
        // let a1:Article = {idArticle:"ASVOB12", nomArticle:"ASUS Vivobook 17",categorie:2, description:"categorie", image:"asus_vivobook17.png", prix:1570, note:5};
        // let a2:Article = {idArticle:"ASRSG18", nomArticle:"ASUS ROG Strix G18",categorie:2, description:"categorie tyty", image:"asus_rogstrixg18.png", prix:1250, note:3};
        // let a3:Article = {idArticle:"DAR16", nomArticle:"DELL ALIENWARE Aurora R16",categorie:1, description:"categorie tyty", image:"dell_alienwareaurorar16.png", prix:1380, note:4};
        // let a4:Article = {idArticle:"LEID816", nomArticle:"LENOVO IDEAPAD Slim gen8",categorie:1, description:"categorie tyty", image:"lenovo-ideapad-slim-5i-gen8-16inch-01.png", prix:699, note:4};
        // let a5:Article = {idArticle:"APIF128", nomArticle:"APPLE IPHONE 15 Pro 128Go ",categorie:3, description:"categorie tyty", image:"iphone15pro-128go-titane-noir.png", prix:1499, note:5};
        // liste.push(a1);
        // liste.push(a2);
        // liste.push(a3);
        // liste.push(a1);
        // liste.push(a2);
        // liste.push(a5);
        // liste.push(a3);
        // liste.push(a4);
        // liste.push(a1);
        // liste.push(a3);
        // liste.push(a2);
        // liste.push(a4);
        // liste.push(a5);
        // liste.push(a1);
        // liste.push(a3);
        // liste.push(a2);
        // liste.push(a4);
        // liste.push(a2);
        // liste.push(a5);
        this.http.get<Array<Article>>("http://localhost:57070/api/Article").subscribe(
            (response) => {
              liste=response;
             
              console.log(response);
            }
            ,
           (err) => {
              console.log("*************KO")
              
            },
      
            () => {
              console.log("*********complete****")
              
            }
          );
        return liste;
    }

    getArticleById(id:string): Article{
        let liste:Array<Article> = [];
        let a1:Article = {idArticle:"ASVOB12", nomArticle:"Vivobook 17",categorie:2, description:"categorie", image:"asus_vivobook17.png", prix:1570, note:5};
        let a2:Article = {idArticle:"ASRSG18", nomArticle:"ROG Strix G18",categorie:2, description:"categorie tyty", image:"asus_rogstrixg18.png", prix:1250, note:3};
        let a3:Article = {idArticle:"DAR16", nomArticle:"DELL ALIENWARE Aurora R16",categorie:1, description:"categorie tyty", image:"dell_alienwareaurorar16.png", prix:1350, note:4};
        let a4:Article = {idArticle:"LEID816", nomArticle:"LENOVO IDEAPAD Slim gen8",categorie:1, description:"categorie tyty", image:"lenovo-ideapad-slim-5i-gen8-16inch-01.png", prix:699, note:4};
        let a5:Article = {idArticle:"APIF128", nomArticle:"APPLE IPHONE 15 Pro 128Go ",categorie:3, description:"categorie tyty", image:"iphone15pro-128go-titane-noir.png", prix:1499, note:5};
        liste.push(a1);
        liste.push(a2);
        liste.push(a3);
        liste.push(a4);
        liste.push(a5);
        return liste.filter((a)=>a.idArticle==id)[0];
    }
}
