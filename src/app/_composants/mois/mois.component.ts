import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mois',
  templateUrl: './mois.component.html',
  styleUrls: ['./mois.component.scss']
})
export class MoisComponent implements OnInit {

  items = [1,2,3,4,5,6,7];
  constructor() { }

  ngOnInit(): void {
  }

}
