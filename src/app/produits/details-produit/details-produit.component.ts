import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Achat } from 'src/app/modeles/achat';
import { Article } from 'src/app/modeles/article';

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
    let a1:Article = {idArticle:"XO12", nomArticle:"Vivobook 17",categorie:2, description:"categorie", image:"asus_vivobook17.png", prix:1570, note:5};
    let a2:Article = {idArticle:"XO16", nomArticle:"ROG Strix G18",categorie:1, description:"categorie tyty", image:"asus_rogstrixg18.png", prix:1250, note:3};

    if(this.idProduit == a1.idArticle){
      this.achat = a1;

    }else{
      this.achat = a2;
    }
  }

  add()
  {
    let i:Achat = new Achat();
    i.idArticle = this.achat.idArticle;
    i.nomArticle = this.achat.nomArticle;
    i.prixArticle = this.achat.prix;
    i.image = this.achat.image;
    i.quantite = this.quantite;
    this.listeArticle.push(i);
    this.save();
  }
  
  save()
  {
    let str:string = JSON.stringify(this.listeArticle);
    sessionStorage.setItem("panier",str);
  }

}
