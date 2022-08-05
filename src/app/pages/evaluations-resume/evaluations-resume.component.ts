import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-evaluations-resume',
  templateUrl: './evaluations-resume.component.html',
  styleUrls: ['./evaluations-resume.component.scss']
})
export class EvaluationsResumeComponent implements OnInit {

  client = '1';
  current = 0;
  preHighLight = false;
  nextHighLight = false;
  marks: NzMarks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    
  };


  constructor() { }

  ngOnInit(): void {
  }

  passerAEtape2() {
    this.current = 1;
  }

  passerAEtape3() {
    this.current = 2;
  }

}
