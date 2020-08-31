import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfiledComponent } from './formfiled.component';

describe('FormfiledComponent', () => {
  let component: FormfiledComponent;
  let fixture: ComponentFixture<FormfiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
