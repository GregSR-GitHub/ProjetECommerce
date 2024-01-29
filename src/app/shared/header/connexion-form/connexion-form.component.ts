import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.css']
})
export class ConnexionFormComponent {
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
        window.location.reload();
      }else{
        this.errPass="Mot de passe invalide"
      }

    }else{
      this.errLogin="Ce login est invalide"
    }
  }
}
