import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.scss']
})
export class ClientsDetailComponent implements OnInit {

  aSaisir = true;
  enAttente = false;
  rejetees = false;
  validees = false;
  archivees = false;

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

  listOfColumnDocuments = [
    {
      title: 'Documents contractuels ',
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

  listOfData = [
    {
      name: 'FOR_04_22_16',
      chinese: 'Audit IT',
      math: 'Dayan Mammou',
      math2: 'Fortuneo',
    },
  ];

  panels = [
    {
      active: true,
      name: 'Mission N°FOR_020422_1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'Mission N°FOR_020422_2'
    },
    {
      active: false,
      disabled: false,
      name: 'Mission N°FOR_020422_3'
    },
  ];
  constructor(
    private router: Router
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

  voir() {
    this.router.navigate(['clients', 'detail']);
  }

}
