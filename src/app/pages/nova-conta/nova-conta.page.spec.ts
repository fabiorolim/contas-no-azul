import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaContaPage } from './nova-conta.page';

describe('NovaContaPage', () => {
  let component: NovaContaPage;
  let fixture: ComponentFixture<NovaContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaContaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
