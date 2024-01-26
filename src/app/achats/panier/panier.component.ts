import { Component } from '@angular/core';
import { Achat } from 'src/app/modeles/achat';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  listeAchat: Array<Achat>;
  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    this.listeAchat=JSON.parse(str);
  }

  vider():void{
    sessionStorage.removeItem('panier');
    this.listeAchat = null;
  }
}
