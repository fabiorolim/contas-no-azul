import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContaComponent } from './item-conta.component';

describe('ContaPagarComponent', () => {
  let component: ItemContaComponent;
  let fixture: ComponentFixture<ItemContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemContaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
