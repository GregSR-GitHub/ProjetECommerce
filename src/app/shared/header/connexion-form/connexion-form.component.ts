import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/modeles/client';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.css']
})
export class ConnexionFormComponent {
  login:string;
  pass:string;
  client:string;
  c:Client;
  errLogin:string;
  errPass:string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit():void{
    this.init();
  }

  init():void{
    this.client = sessionStorage.getItem("client");
  }


  connexion(){
    this.errLogin=null;
    this.errPass=null;

    this.http.get<Array<Client>>("http://localhost:57070/api/Client/").subscribe(
      (response) => {
        this.c=response.filter((a)=>a.login==this.login)[0];
        console.log(response);
        if(this.pass==this.c.pass){
          sessionStorage.setItem("client",JSON.stringify({id:this.c.id,login:this.c.login,nom:this.c.nom,prenom:this.c.prenom}))
          this.init();
          window.location.reload();
        }else{
          this.errPass="Mot de passe invalide"
        }
      }
      ,
     (err) => {
         this.errLogin="Ce login est invalide"
        console.log("*************KO")
        
      },

      () => {
        console.log("*********complete****")
        
      }
    );
  }
}
