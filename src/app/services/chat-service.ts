import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable()
export class ChatService {
  constructor() {}
  conversation = new Subject<Message[]>();

  reponseMap = {
    "Bonjour1": "Bonjour !",
    "Bonjour2": "Salutation !",
    "Bonjour3": "Bonsoir, si vous avez besoin d'aide je suis disponible !",
    "Bonjour4": "Bien le bonjour !",

    "Dememe": "Moi de même !",

    "Merci1": "De rien, si vous avez une autre question, n'hésitez pas !",
    "Merci2": "Heureux d'avoir pu vous venir en aide !",

    "Aurevoir": "Heureux d'avoir pu vous venir en aide !",

    "Commande": "Pour passer une commande, il suffit de trouver l'article de votre choix et de cliquer sur \"Ajouter au panier\". Selectionnez ensuite votre panier en haut à droite de l'écran. Depuis la page Panier cliquer sur \"Valider le Panier\".",
    "Panier": "Selectionnez votre Panier en haut à droite de l'écran. Depuis la page Panier cliquer sur \"Valider le Panier\".",

    "Retour1" : "Si le produit que vous avez reçu ne vous convient pas, vous disposez de 15 jours après réception pour nous le retourner par voie postale (retour à vos frais en cas de changement d'avis).",
    "Retour2" : "Si votre produit est arrivé défectueux, incomplet ou hors service, contactez-nous dès que possible, nous trouverons une solution (échange, remboursement, réparation...).",

    "Compte": "Vous pouvez créer un compte en cliquant sur Inscription en haut à droite de l'écran. Vous aurez besion d'une adresse e-mail valide.",

    "Recherche": "Vous pouvez rechercher un article depuis le menu du haut en tappant son nom ou sa marque. Depuis la liste des produits vous pouvez aussi utilisez l'option filtrer afin d'affiner votre recherche.",

  }

  messageMap = {
    "hi": this.reponseMap["Bonjour1"],
    "salut": this.reponseMap["Bonjour1"],
    "bonjour": this.reponseMap["Bonjour2"],
    "bonsoir": this.reponseMap["Bonjour3"],
    "salutation": this.reponseMap["Bonjour4"],
    "slt": this.reponseMap["Bonjour4"],
    "hitechbot": this.reponseMap["Bonjour1"],
    "saluttechbot": this.reponseMap["Bonjour1"],
    "bonjourtechbot": this.reponseMap["Bonjour2"],
    "bonsoirtechbot": this.reponseMap["Bonjour3"],
    "salutationtechbot": this.reponseMap["Bonjour4"],
    "slttechbot": this.reponseMap["Bonjour4"],

    "enchanté": this.reponseMap["Dememe"],
    "enchantée":this.reponseMap["Dememe"],
    "enchantétechbot": this.reponseMap["Dememe"],
    "enchantéetechbot": this.reponseMap["Dememe"],

    "merci": this.reponseMap["Merci1"],
    "mercibeaucoup":  this.reponseMap["Merci2"],
    "mercitechbot":  this.reponseMap["Merci1"],
    "mercibeaucouptechbot":  this.reponseMap["Merci2"],

    "aurevoir": this.reponseMap["Aurevoir"],
    "adieu": this.reponseMap["Aurevoir"],
    "aurevoirtechbot": this.reponseMap["Aurevoir"],
    "adieutechbot": this.reponseMap["Aurevoir"],

    "jetaime": "Je sais.",
    "jetaimetechbot": "Je sais.",
    "techbotjetaime": "Je sais.",

    "quiestu": "Je me nomme TechBot, je suis là pour vous aider.",
    "tappeltu": "Je me nomme TechBot, je suis là pour vous aider.",
    "tenommetu": "Je me nomme TechBot, je suis là pour vous aider.",
    "quefaistu": "Je suis là pour vous aider.",

    "jaibesoindaide": "Je suis là pour vous aider.",
    "peuttumaider": "Oui, je suis là pour vous aider.",
    "defaultmsg": "Désolé je ne comprend pas, veuillez reformuler.",

    "passercommande": this.reponseMap["Commande"],
    "faireunachat": this.reponseMap["Commande"],
    "acheter": this.reponseMap["Commande"],
    "acheterunarticle": this.reponseMap["Commande"],
    "acheterquelquechose": this.reponseMap["Commande"],
    "fairecommande": this.reponseMap["Commande"],

    "validersonpanier": this.reponseMap["Commande"],
    "validersunpanier": this.reponseMap["Commande"],
    "validerpanier": this.reponseMap["Commande"],
    "validermacommande": this.reponseMap["Commande"],

    "retournerunproduit": this.reponseMap["Retour1"],
    "retournerunarticle": this.reponseMap["Retour1"],
    "jaiunproduitcassé": this.reponseMap["Retour2"],
    "retournerunarticlecassé": this.reponseMap["Retour2"],
    "retournerunarticledefectueux": this.reponseMap["Retour2"],
    "retournerunproduitcassé": this.reponseMap["Retour2"],
    "retournerunproduitdefectueux": this.reponseMap["Retour2"],

    "sinscrire":  this.reponseMap["Compte"],
    "sinscrir": this.reponseMap["Compte"],
    "créeruncompte": this.reponseMap["Compte"],
    "devenirclient": this.reponseMap["Compte"],
  }
  
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let firstAnswer = question.toLocaleLowerCase();
    firstAnswer = firstAnswer.replaceAll(' une ','');
    firstAnswer = firstAnswer.replaceAll('.','');
    firstAnswer = firstAnswer.replaceAll('-','');
    firstAnswer = firstAnswer.replaceAll('!','');
    firstAnswer = firstAnswer.replaceAll('?','');
    firstAnswer = firstAnswer.replaceAll("'",'');
    firstAnswer = firstAnswer.replaceAll(",",'');
    firstAnswer = firstAnswer.replaceAll(' ','');
    firstAnswer = firstAnswer.replaceAll('jaimerais','');
    firstAnswer = firstAnswer.replaceAll('jeveux','');
    firstAnswer = firstAnswer.replaceAll('comment','');
    firstAnswer = firstAnswer.replaceAll('jaibesoindaidepour','');
    firstAnswer = firstAnswer.replaceAll('peuxtumaiderà','');
    firstAnswer = firstAnswer.replaceAll('peuxtumaidera','');
    console.log(firstAnswer);
    let answer = this.messageMap[firstAnswer];
    return answer || this.messageMap['defaultmsg'];
  }
}