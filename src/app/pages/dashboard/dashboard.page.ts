import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  cor: string;
  saldo: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.saldo = 0;
    if (this.saldo > 0) {
      this.cor = "primary";
    } else {
      this.cor = "danger";
    }
  }

  sair() {
    return this.router.navigate(['/login']);
  }
}
