import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { PanierComponent } from './achats/panier/panier.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailsProduitComponent } from './produits/details-produit/details-produit.component';
import { CommandeComponent } from './produits/commande/commande.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionFormComponent } from './shared/header/connexion-form/connexion-form.component';
import { StarsComponent } from './shared/stars/stars.component';
import { AddProduitComponent } from './produits/add-produit/add-produit.component';
import { CardProduitComponent } from './produits/card-produit/card-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    ListeProduitsComponent,
    PanierComponent,
    ProfilComponent,
    DetailsProduitComponent,
    CommandeComponent,
    ConnexionFormComponent,
    StarsComponent,
    AddProduitComponent,
    CardProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
