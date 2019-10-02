import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaContaPagarPage } from './nova-conta-pagar.page';

describe('NovaContaPagarPage', () => {
  let component: NovaContaPagarPage;
  let fixture: ComponentFixture<NovaContaPagarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaContaPagarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaContaPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
