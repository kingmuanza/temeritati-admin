import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/_models/company.model';
import { CrudService } from 'src/app/_services/crud.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  step = 1;

  company = new Company(); 

  constructor(
    private router: Router,
    private companyService: CrudService<Company>
  ) { }

  ngOnInit(): void {
  }

  previous() {
    this.step--;
  }

  suivant() {
    this.step++;
  }

  endFirstStep() {
    this.suivant();
  }

  endSecondStep() {
    this.companyService.create('company', this.company).then(() => {
      this.router.navigate(['company', 'view', this.company.id]);
    });
  }

}
