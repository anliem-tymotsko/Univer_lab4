import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAprovementComponent } from './admin-aprovement.component';

describe('AdminAprovementComponent', () => {
  let component: AdminAprovementComponent;
  let fixture: ComponentFixture<AdminAprovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAprovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
