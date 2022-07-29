import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cra',
  templateUrl: './cra.component.html',
  styleUrls: ['./cra.component.scss']
})
export class CraComponent implements OnInit {

  aSaisir = false;
  enAttente = false;
  rejetees = false;
  validees = true;
  archivees = false;

  listOfColumn = [
    {
      title: 'Mois',
      compare: null,
      priority: false
    },
    {
      title: 'Client',
      compare: null,
      priority: 3
    },
    {
      title: 'Mission',
      compare: null,
      priority: 2
    },
    {
      title: 'Action',
      compare: null,
      priority: 1
    }
  ];

  listOfData = [
    {
      name: 'Janvier 2022',
      chinese: 'Fortuneo',
      math: 'Audit IT',
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
