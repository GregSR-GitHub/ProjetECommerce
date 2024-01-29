import { Component } from '@angular/core';
import { Commande } from '../modeles/commande';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../modeles/client';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  listeCommande: Array<Commande>;
  client:Client;
  adresse:string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit():void{

    let str2: string = sessionStorage.getItem("client");
    let c:Client = JSON.parse(str2);

    this.http.get<Client>("http://localhost:57070/api/Client/"+c.id).subscribe(
      (response) => {
        this.client=response;
        this.adresse = this.client.adresse;
      }
      ,
     (err) => {
        console.log("KO")
        
      },

      () => {
        console.log("*********complete****")
        
      }
    );

    this.http.get<Array<Commande>>("http://localhost:57070/api/Commande").subscribe(
      (response) => {
        this.listeCommande=response.filter((a)=>a.idClient==this.client.id);
       
        console.log(response);
      }
      ,
     (err) => {
        console.log("KO")
        
      },

      () => {
        console.log("*********complete****")
        
      }
    );
    
  }

  update()
  {
    this.client.adresse = this.adresse;
    const body = JSON.stringify(this.client);
    
    this.http.put("http://localhost:57070/api/Client", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

     
        console.log("update ok");

      },

        err => {
        
          console.log("update KO");

        });
  }

}
