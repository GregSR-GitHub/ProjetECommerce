import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/modeles/article';
import { ApiArticles } from 'src/app/services/api-articles';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent {
  idCategorie:string;
  listeArticle:Array<Article>;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  list():Array<Article>{
    let liste:Array<Article> = ApiArticles.prototype.getArticles();
    return liste;
  }

  ngOnInit():void{
    this.route.params.subscribe(params => {

      this.idCategorie = params['id'];
    });

    if(this.idCategorie==null){
      this.listeArticle = this.list();
    }else{

      this.listeArticle = this.list().filter((a)=>a.categorie==Number(this.idCategorie));
    }

  }

}
