import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesDetailComponent } from './factures-detail.component';

describe('FacturesDetailComponent', () => {
  let component: FacturesDetailComponent;
  let fixture: ComponentFixture<FacturesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
