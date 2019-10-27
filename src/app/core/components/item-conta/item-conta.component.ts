import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Conta } from '../../models/conta.model';

@Component({
  selector: 'app-item-conta',
  templateUrl: './item-conta.component.html',
  styleUrls: ['./item-conta.component.scss'],
})
export class ItemContaComponent {

  @Input() conta: Conta;
  @Output() update = new EventEmitter<Conta>();
  @Output() delete = new EventEmitter<Conta>();

}
