import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {

  aSaisir = true;
  enAttente = false;
  rejetees = false;
  validees = false;
  archivees = false;

  listOfColumn = [
    {
      title: 'Évaluations ',
      compare: null,
      priority: false
    },
    {
      title: 'Statut',
      compare: null,
      priority: 3
    },
    {
      title: 'Date de mise en ligne',
      compare: null,
      priority: 2
    },
    {
      title: 'Date limite d’envoi',
      compare: null,
      priority: 1
    },
    {
      title: 'Actions',
      compare: null,
      priority: 1
    }
  ];

  listOfData = [
    {
      name: 'FOR_04_22_2',
      chinese: 'Non démarrée',
      math: '11/06/2022',
      math2: '26/06/2022',
      english: 'Saisir'
    },
  ];


  listOfDataEnAttente = [
    {
      name: 'Décembre 2021',
      chinese: 'Fortuneo',
      math: 'Audit IT',
      english: 'Saisir'
    },
  ];
  listOfDataValidees = [
    {
      name: 'Janvier 2022',
      chinese: 'Fortuneo',
      math: 'Audit IT',
      english: 'Saisir'
    },
    {
      name: 'Novembre 2021',
      chinese: 'Fortuneo',
      math: 'Audit IT',
      english: 'Saisir'
    },
    {
      name: 'Octobre 2021',
      chinese: 'Fortuneo',
      math: 'Audit IT',
      english: 'Saisir'
    },
  ];
  listOfDataArchivees = [
    {
      name: 'Janvier 2022',
      chinese: 'Fortuneo',
      math: 'Audit IT',
      english: 'Saisir'
    },
    {
      name: 'Novembre 2021',
      chinese: 'Fortuneo',
      math: 'Audit IT',
      english: 'Saisir'
    },
    {
      name: 'Octobre 2021',
      chinese: 'Fortuneo',
      math: 'Audit IT',
      english: 'Saisir'
    },
  ];
  constructor() { }

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
