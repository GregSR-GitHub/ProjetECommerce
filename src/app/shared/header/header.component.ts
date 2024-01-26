import { Component } from '@angular/core';
import { Achat } from 'src/app/modeles/achat';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  client:string;
  panier: Array<Achat>;

  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    this.panier=JSON.parse(str);
    this.init();
  }

  init():void{
    this.client = sessionStorage.getItem("client") || null;
  }

  deconnexion(){
      sessionStorage.clear();
      this.client = null;
  }
}
