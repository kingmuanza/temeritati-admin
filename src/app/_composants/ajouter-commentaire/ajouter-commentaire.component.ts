import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.scss']
})
export class AjouterCommentaireComponent implements OnInit {

  @Input()
  libelle = "Commentaire de l’évaluateur";
  
  commentaire = "";
  ajouterCommentaireRole = false;

  constructor() { }

  ngOnInit(): void {
  }

  commenter() {
    this.ajouterCommentaireRole = !this.ajouterCommentaireRole;
  }

}
