import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluations-nouveau',
  templateUrl: './evaluations-nouveau.component.html',
  styleUrls: ['./evaluations-nouveau.component.scss']
})
export class EvaluationsNouveauComponent implements OnInit {

  client = '1';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  resumee() {
    this.router.navigate(['evaluations', 'resume']);
  }

}
