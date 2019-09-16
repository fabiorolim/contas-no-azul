import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberPage } from './receber.page';

describe('ReceberPage', () => {
  let component: ReceberPage;
  let fixture: ComponentFixture<ReceberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
