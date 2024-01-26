import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/modeles/article';

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
    let liste:Array<Article> = [];
    let a1:Article = {idArticle:"XO12", nomArticle:"Vivobook 17",categorie:2, description:"categorie", image:"asus_vivobook17.png", prix:1570, note:5};
    let a2:Article = {idArticle:"XO16", nomArticle:"ROG Strix G18",categorie:1, description:"categorie tyty", image:"asus_rogstrixg18.png", prix:1250, note:3};
    liste.push(a1);
    liste.push(a2);
    liste.push(a1);
    liste.push(a1);
    liste.push(a2);
    liste.push(a1);
    liste.push(a2);
    liste.push(a2);
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
