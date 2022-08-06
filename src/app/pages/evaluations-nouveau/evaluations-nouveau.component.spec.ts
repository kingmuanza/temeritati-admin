import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsNouveauComponent } from './evaluations-nouveau.component';

describe('EvaluationsNouveauComponent', () => {
  let component: EvaluationsNouveauComponent;
  let fixture: ComponentFixture<EvaluationsNouveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationsNouveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsNouveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
