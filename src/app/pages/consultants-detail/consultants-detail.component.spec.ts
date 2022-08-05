import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsDetailComponent } from './consultants-detail.component';

describe('ConsultantsDetailComponent', () => {
  let component: ConsultantsDetailComponent;
  let fixture: ComponentFixture<ConsultantsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
