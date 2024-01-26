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
  quantite:number;
  achat: Achat = { idArticle:"XG85", nomArticle:"ASUS", prixArticle: 1500, quantite: 1}
  listeArticle:Array<Achat> =new Array<Achat>();

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //partie 1
    this.route.params.subscribe(params => {

      this.idProduit = params['id'];
      console.log(this.idProduit);
    });
      this.listeArticle = JSON.parse(sessionStorage.getItem("panier")) || [];
  }

  add()
  {
    let i:Achat = new Achat();
    i.idArticle = this.achat.idArticle;
    i.nomArticle = this.achat.nomArticle;
    i.prixArticle = this.achat.prixArticle;
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
