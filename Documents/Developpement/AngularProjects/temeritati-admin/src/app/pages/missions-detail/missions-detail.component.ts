import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missions-detail',
  templateUrl: './missions-detail.component.html',
  styleUrls: ['./missions-detail.component.scss']
})
export class MissionsDetailComponent implements OnInit {

  aSaisir = true;
  enAttente = false;
  rejetees = false;
  validees = false;
  archivees = false;

  listOfColumn = [
    {
      title: 'Mission ',
      compare: null,
      priority: false
    },
    {
      title: 'Client',
      compare: null,
      priority: 3
    },
    {
      title: 'Consultant',
      compare: null,
      priority: 2
    },
    {
      title: 'Date début',
      compare: null,
      priority: 1
    },
    {
      title: 'Date fin',
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
      name: 'Audit IT',
      chinese: 'Fortuneo',
      math: 'Dayan Mammou',
      math2: '02/01/2022',
      english: '03/03/2022'
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
