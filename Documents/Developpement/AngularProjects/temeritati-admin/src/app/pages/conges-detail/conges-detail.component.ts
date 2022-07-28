import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conges-detail',
  templateUrl: './conges-detail.component.html',
  styleUrls: ['./conges-detail.component.scss']
})
export class CongesDetailComponent implements OnInit {

  aSaisir = true;
  enAttente = false;
  rejetees = false;
  validees = false;
  archivees = false;

  listOfColumn = [
    {
      title: 'Nom ',
      compare: null,
      priority: false
    },
    {
      title: 'Types de congés',
      compare: null,
      priority: 3
    },
    {
      title: 'Demandes',
      compare: null,
      priority: 2
    },
    {
      title: 'Nombre total',
      compare: null,
      priority: 1
    },
    {
      title: 'Nombre restant',
      compare: null,
      priority: 1
    }
  ];

  listOfData = [
    {
      name: 'FOR_04_22_16',
      chinese: 'Audit IT',
      math: 'Dayan Mammou',
      math2: 'Fortuneo',
    },
  ];

  typesConges = [
    { icone: 'global', libelle: 'Congés payés', demandes: 1, total: 7, restants: 3},
    { icone: 'fork', libelle: 'Congés maladie', demandes: 1, total: 7, restants: 3},
    { icone: 'home', libelle: 'Récupération', demandes: 1, total: 7, restants: 3},
    { icone: 'global', libelle: 'Congés payés', demandes: 1, total: 7, restants: 3},
    { icone: 'fork', libelle: 'Congés maladie', demandes: 1, total: 7, restants: 3},
    { icone: 'home', libelle: 'Récupération', demandes: 1, total: 7, restants: 3},
  ]

  conges = [
    {
      user: {
        nom: 'Dayan Mammou',
        statut: 'Consultant confirmé',
        pp: '../../../assets/img/pp.jpg',
        conges: []
      }
    },
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  selectionner(menu: string) {
    this.aSaisir = false;
    this.enAttente = false;
    this.rejetees = false;
    this.validees = false;
    this.archivees = false;
    if (menu === 'aSaisir') {
      this.aSaisir = true;
    }
    if (menu === 'enAttente') {
      this.enAttente = true;
    }
    if (menu === 'rejetees') {
      this.rejetees = true;
    }
    if (menu === 'validees') {
      this.validees = true;
    }
    if (menu === 'archivees') {
      this.archivees = true;
    }
  }

}
