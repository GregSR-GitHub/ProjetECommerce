import { Component, OnDestroy } from '@angular/core';
import { Achat } from 'src/app/modeles/achat';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PanierService } from 'src/app/services/panier-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnDestroy {
  client:string;
  panier: Array<Achat> = Array<Achat>();
  subPanier : Subscription;
  nbPanier: number;
  search: string;

  constructor(private panierService : PanierService) {
    this.subPanier = this.panierService.getRefresh().subscribe((value) => {
      this.init()
      });
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subPanier.unsubscribe();
  }

  init():void{
    let str: string = sessionStorage.getItem("panier");
    this.panier=JSON.parse(str);
    this.client = sessionStorage.getItem("client") || null;
    if(this.panier!=null)
      this.nbPanier = this.panier.length;
    else
    this.nbPanier = 0;
  }

  deconnexion(){
      sessionStorage.clear();
      this.client = null;
  }
}
