import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  login:string;
  pass:string;
  client:string;
  errLogin:string;
  errPass:string;

  ngOnInit():void{
    this.init();
  }

  init():void{
    this.client = sessionStorage.getItem("client");
  }

  connexion(){
    this.errLogin=null;
    this.errPass=null;
    if(this.login=="toto"){
      if(this.pass=="toto"){
        sessionStorage.setItem("client",this.login)
        this.init();
      }else{
        this.errPass="Mot de passe invalide"
      }

    }else{
      this.errLogin="Ce login est invalide"
    }
  }
}
