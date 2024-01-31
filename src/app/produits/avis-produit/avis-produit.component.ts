import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Article } from 'src/app/modeles/article';
import { Avis } from 'src/app/modeles/avis';
import { Client } from 'src/app/modeles/client';

@Component({
  selector: 'app-avis-produit',
  templateUrl: './avis-produit.component.html',
  styleUrls: ['./avis-produit.component.css']
})
export class AvisProduitComponent {
  @Input() article: Article;
  client:Client;
  textAvis:string;
  note:number;
  state:number = 0;
  listeAvis: Array<Avis> = new Array<Avis>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.client=JSON.parse(sessionStorage.getItem("client"));
      this.init();
  }

  init():void{

    this.http.get<Array<Avis>>("http://localhost:57070/api/Avis/?idArticle="+this.article.idArticle).subscribe(
      (response) => {
        this.listeAvis = response;
       
        console.log("Avis:" + this.listeAvis);
      }
      ,
     (err) => {
        console.log("*************KO")
        
      },

      () => {
        console.log("*********complete****");
        this.listeAvis.forEach((a)=>{
          a.dateCreation = a.dateCreation.replace('T', ' ');
        });
        
      }
    );
  }

  getIdClient(idClient:number): Client {
    let c:Client;

    this.http.get<Client>("http://localhost:57070/api/Client/"+idClient).subscribe(
      (response) => {
        c=response;
      }
      ,
     (err) => {
        console.log("KO")
        
      },

      () => {
        console.log(c.prenom)
        
      }
    );
    return c;
  }

  postAvis(): void {
    let avis: Avis = new Avis();
    avis.contenu = this.textAvis;
    avis.idArticle = this.article.idArticle;
    avis.idClient = this.client.id;
    avis.dateCreation = new Date().toISOString().slice(0, 19).replace('T', ' ');
    avis.note = this.note;
    this.state = 1;
    const body=JSON.stringify(avis);

    this.http.post("http://localhost:57070/api/Avis",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {

     
      console.log("OK");
      this.state = 1;
    },

      err => {
       
        console.log("KO");
        this.state = 2;
      });

}
}
