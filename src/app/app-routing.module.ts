import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { PanierComponent } from './achats/panier/panier.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailsProduitComponent } from './produits/details-produit/details-produit.component';
import { CommandeComponent } from './produits/commande/commande.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'liste', component: ListeProduitsComponent},
  {path: 'liste/:id', component: ListeProduitsComponent},
  {path: 'liste/:id/:search', component: ListeProduitsComponent},
  {path: 'details/:id', component: DetailsProduitComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'commander', component: CommandeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
