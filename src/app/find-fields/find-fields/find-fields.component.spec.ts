import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFieldsComponent } from './find-fields.component';

describe('FindFieldsComponent', () => {
  let component: FindFieldsComponent;
  let fixture: ComponentFixture<FindFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
