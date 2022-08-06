import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsResumeComponent } from './evaluations-resume.component';

describe('EvaluationsResumeComponent', () => {
  let component: EvaluationsResumeComponent;
  let fixture: ComponentFixture<EvaluationsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationsResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
