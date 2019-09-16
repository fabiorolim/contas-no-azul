import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.page.html',
  styleUrls: ['./nova-conta.page.scss'],
})
export class NovaContaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  novaConta() {
    return this.router.navigate(['/tabs/dashboard']);
  }
}
