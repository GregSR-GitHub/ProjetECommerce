import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Achat } from 'src/app/modeles/achat';
import { Client } from 'src/app/modeles/client';
import { Commande } from 'src/app/modeles/commande';
import { PanierService } from 'src/app/services/panier-service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  listeAchat: Array<Achat>;
  client: Client;
  step: number = 0;
  commande: Commande = new Commande();
  total:number = 0;
  totalCommande:number = 0;

  constructor(private http: HttpClient, private panierService : PanierService) { }

  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    this.listeAchat=JSON.parse(str);
    let str2: string = sessionStorage.getItem("client");
    this.client=JSON.parse(str2);
    console.log(this.client);

    for(let x of this.listeAchat){
      this.total += x.prixArticle*x.quantite;
    }
  }

  vider():void{
    sessionStorage.removeItem('panier');
    this.listeAchat = null;
    this.total = 0;
    this.panierService.setRefresh(0);
  }


  valider():void{
    this.step = 1;
    this.commande.idClient = this.client.id;
    this.commande.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.commande.infos = JSON.stringify(this.listeAchat);
    this.commande.prixTotal = this.total;
    this.totalCommande = this.total;
    console.log(this.commande);

    const body=JSON.stringify(this.commande);
   
    this.http.post("http://localhost:57070/api/Commande",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {

     
      console.log("OK");
      this.vider();
      this.step = 2;

    },

      err => {
       
        console.log("KO");
        this.step = 0;
      });

  }
}
