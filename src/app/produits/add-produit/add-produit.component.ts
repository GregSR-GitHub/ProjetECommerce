import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Achat } from 'src/app/modeles/achat';
import { Article } from 'src/app/modeles/article';
import { PanierService } from 'src/app/services/panier-service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  @Input() achat: Article;
  @Input() quantite:number = 1;
  state: number = 0;

  constructor(private http: HttpClient, private panierService : PanierService) { }

  add()
  {
    let listeArticle:Array<Achat> = JSON.parse(sessionStorage.getItem("panier")) || new Array<Achat>();
    let testArticle:Achat = listeArticle.find((a) => a.idArticle == this.achat.idArticle);
    let indexTA = listeArticle.indexOf(testArticle);

    if(testArticle!=null){
      console.log(indexTA);
      listeArticle[indexTA].quantite += this.quantite;
    }else{
      let i:Achat = new Achat();
      i.idArticle = this.achat.idArticle;
      i.nomArticle = this.achat.nomArticle;
      i.prixArticle = this.achat.prix;
      i.image = this.achat.image;
      i.quantite = this.quantite;
      listeArticle.push(i);
    }

    let str:string = JSON.stringify(listeArticle);
    sessionStorage.setItem("panier",str);
    this.state = 1;
    this.panierService.setRefresh(listeArticle.length);
  }
}
