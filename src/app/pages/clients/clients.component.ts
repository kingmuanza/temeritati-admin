import { Component, OnInit } from '@angular/core';
import { LeClient } from 'src/app/_models/client.model';
import { GenericServiceService } from 'src/app/_services/generic-service.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

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

  listOfData = new Array<LeClient>();

  constructor(
    private clientService: GenericServiceService<LeClient>
  ) { }

  ngOnInit(): void {
    this.clientService.getAll('GetClients').then((datas) => {
      console.log("Récupération des données sur le serveur");
      console.log(datas);
      this.listOfData = datas;
    });
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
