import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesDetailComponent } from './conges-detail.component';

describe('CongesDetailComponent', () => {
  let component: CongesDetailComponent;
  let fixture: ComponentFixture<CongesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
