import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaContaReceberPage } from './nova-conta-receber.page';

describe('NovaContaReceberPage', () => {
  let component: NovaContaReceberPage;
  let fixture: ComponentFixture<NovaContaReceberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaContaReceberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaContaReceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
