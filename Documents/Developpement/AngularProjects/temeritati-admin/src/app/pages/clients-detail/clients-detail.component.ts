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

  listOfColumn = [
    {
      title: 'Client ',
      compare: null,
      priority: false
    },
    {
      title: 'Mission',
      compare: null,
      priority: 3
    },
    {
      title: 'Date de début',
      compare: null,
      priority: 2
    },
    {
      title: 'Nombre de consultants en mission',
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
