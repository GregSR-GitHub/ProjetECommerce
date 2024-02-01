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
  listeArticleSave:Array<Article>;
  categorie: Categorie;
  searchname:string;
  searchnote:number;
  searchprixmin:number;
  searchprixmax:number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit():void{
    this.route.params.subscribe(params => {

      if(params['id']!=0){
        this.idCategorie = params['id'];
      }
      let search =  params['search'];
      if(search!=null){
        this.searchname = search;
      }
    });

    if(this.idCategorie==null){

      this.http.get<Array<Article>>("http://localhost:57070/api/Article").subscribe(
        (response) => {
          this.listeArticle=response;
          this.listeArticleSave=response;
         
          console.log(response);
        }
        ,
       (err) => {
          console.log("*************KO")
          
        },
  
        () => {
          if(this.searchname!=null){
            this.listeArticle = this.listeArticle.filter((a)=>new RegExp(this.searchname,'i').test(a.nomArticle));
           }
          console.log("*********complete****")
          
        }
      );

    }else{

      this.http.get<Array<Article>>("http://localhost:57070/api/Article").subscribe(
        (response) => {
          this.listeArticle=response.filter((a)=>a.categorie==Number(this.idCategorie));
          this.listeArticleSave=this.listeArticle;
         
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

    search():void{
      let filterListe = this.listeArticleSave;
      if(this.searchname!=null){
        filterListe=filterListe.filter((a)=>new RegExp(this.searchname,'i').test(a.nomArticle));
      }
      if(this.searchnote>=1){
        filterListe=filterListe.filter((a)=>a.note>=this.searchnote);
      }
      if(this.searchprixmin!=null){
        filterListe=filterListe.filter((a)=>a.prix>=this.searchprixmin);
      }
      if(this.searchprixmax!=null){
        filterListe=filterListe.filter((a)=>a.prix<=this.searchprixmax);
      }
      this.listeArticle=filterListe;
    }

}
