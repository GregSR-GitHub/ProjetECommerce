import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/modeles/article';
import { Categorie } from 'src/app/modeles/categorie';
import { ApiArticles } from 'src/app/services/api-articles';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent {
  idCategorie:string;
  listeArticle:Array<Article>;
  categorie: Categorie;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit():void{
    this.route.params.subscribe(params => {

      this.idCategorie = params['id'];
    });

    if(this.idCategorie==null){

      this.http.get<Array<Article>>("http://localhost:57070/api/Article").subscribe(
        (response) => {
          this.listeArticle=response;
         
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

    }else{

      this.http.get<Array<Article>>("http://localhost:57070/api/Article").subscribe(
        (response) => {
          this.listeArticle=response.filter((a)=>a.categorie==Number(this.idCategorie));
         
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
    }
    this.initCat();
  }

  initCat(): void{
    if(this.idCategorie!=null){
      this.http.get<Categorie>("http://localhost:57070/api/Categorie/"+this.idCategorie).subscribe(
        (response) => {
          this.categorie=response;
        
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
     }else{
      this.categorie = {id:0, nomCategorie:"Tout nos articles", description:"PC portable ou de bureau, mobile, tablette et autres. Vous trouverez tout nos articles ici."} 
     }
    } 

}
