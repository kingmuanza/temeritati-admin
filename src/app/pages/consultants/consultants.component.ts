import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss']
})
export class ConsultantsComponent implements OnInit {

  aSaisir = true;
  enAttente = false;
  rejetees = false;
  validees = false;
  archivees = false;

  listOfColumn = [
    {
      title: 'Consultant ',
      compare: null,
      priority: false
    },
    {
      title: 'Poste',
      compare: null,
      priority: 3
    },
    {
      title: 'Statut',
      compare: null,
      priority: 2
    },
    {
      title: 'Mission en cours',
      compare: null,
      priority: 1
    },
    {
      title: 'TJ',
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
      name: 'Dayan Mammou',
      chinese: 'Consultant confimé',
      math: 'Interne',
      math2: 'Oui',
      english: '1200e'
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
