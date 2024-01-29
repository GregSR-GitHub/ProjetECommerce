import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Achat } from 'src/app/modeles/achat';
import { Client } from 'src/app/modeles/client';
import { Commande } from 'src/app/modeles/commande';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  listeAchat: Array<Achat>;
  client: Client;
  commande: Commande = new Commande();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    this.listeAchat=JSON.parse(str);
    let str2: string = sessionStorage.getItem("client");
    this.client=JSON.parse(str2);
    console.log(this.client);
  }

  vider():void{
    sessionStorage.removeItem('panier');
    this.listeAchat = null;
  }


  valider():void{
    this.commande.idClient = this.client.id;
    this.commande.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.commande.infos = JSON.stringify(this.listeAchat);
    this.commande.prixTotal = 3000;
    console.log(this.commande);

    const body=JSON.stringify(this.commande);
   
    this.http.post("http://localhost:57070/api/Commande",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {

     
      console.log("OK");
      this.vider();

    },

      err => {
       
        console.log("KO");
      });

  }
}
