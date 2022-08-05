import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultants-detail',
  templateUrl: './consultants-detail.component.html',
  styleUrls: ['./consultants-detail.component.scss']
})
export class ConsultantsDetailComponent implements OnInit {

  contrat = "CDI";
  
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

  listOfColumnCRA = [
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

  
  listOfColumnFacture = [
    {
      title: 'Factures ',
      compare: null,
      priority: false
    },
    {
      title: 'Mission',
      compare: null,
      priority: 3
    },
    {
      title: 'Consultant',
      compare: null,
      priority: 2
    },
    {
      title: 'Client',
      compare: null,
      priority: 1
    },
    {
      title: 'Actions',
      compare: null,
      priority: 1
    }
  ];

  listOfDataFacture = [
    {
      name: 'Fortuneo',
      chinese: 'Audit IT',
      math: '20/04/2022',
      math2: '3',
      english: 'Saisir'
    },
    {
      name: 'Fortuneo',
      chinese: 'Audit IT',
      math: '15/04/2022',
      math2: '1',
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
