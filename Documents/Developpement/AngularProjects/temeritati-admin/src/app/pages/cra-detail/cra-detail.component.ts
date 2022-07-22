import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cra-detail',
  templateUrl: './cra-detail.component.html',
  styleUrls: ['./cra-detail.component.scss']
})
export class CraDetailComponent implements OnInit {

  liste = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
