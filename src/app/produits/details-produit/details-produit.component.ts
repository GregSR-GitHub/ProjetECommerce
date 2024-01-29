import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Achat } from 'src/app/modeles/achat';
import { Article } from 'src/app/modeles/article';
import { ApiArticles } from 'src/app/services/api-articles';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent {
  idProduit:string;
  quantite:number = 1;
  achat: Article;
  listeArticle:Array<Achat> =new Array<Achat>();

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //partie 1
    this.route.params.subscribe(params => {

      this.idProduit = params['id'];
      console.log(this.idProduit);
    });
      this.listeArticle = JSON.parse(sessionStorage.getItem("panier")) || [];
      this.init();
  }

  init() {
    this.http.get<Article>("http://localhost:57070/api/Article/?idArticle="+this.idProduit).subscribe(
      (response) => {
        this.achat=response;
       
        console.log(response);
      }
      ,
     (err) => {
        console.log("Impossible de trouver l'article")
        
      },

      () => {
        console.log("Sucess")
        
      }
    );
  }

}
