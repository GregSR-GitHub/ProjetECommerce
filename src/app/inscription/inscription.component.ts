import { Component } from '@angular/core';
import { Client } from '../modeles/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent {
  status:string = 'New';
  client: Client = new Client();
  login:string;
  pass:string;
  nom:string;
  prenom:string;
  adresse:string;
  errLogin:string;

  constructor(private http:HttpClient){}

  ngOnInit(): void {

  }

  newClient():void{

    this.client.login = this.login;
    this.client.pass = this.pass;
    this.client.nom = this.nom;
    this.client.prenom = this.prenom;
    this.client.adresse = this.adresse;

    const body = JSON.stringify(this.client);
    this.http.post("http://localhost:57070/api/Client/",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      console.log("Ok");
      this.status = "Ok";
    },

      err => {
        this.errLogin="Le formulaire est incomplet ou ce nom d'utilisateur existe déja."
      });
  }

}

