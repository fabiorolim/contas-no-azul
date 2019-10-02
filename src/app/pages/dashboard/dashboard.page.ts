import { AuthService } from './../../core/auth/auth.service';
import { Calculador } from './../../core/classes/calculador';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  cor: string;
  totalPagar: number;
  totalReceber: number;
  nomeUsuario: string;
  foto: string;


  constructor(
    private router: Router,
    private authService: AuthService,
    private calculador: Calculador) {
  }

  private carregaPerfil() {
    this.authService.authState$
      .subscribe(user => (
        this.nomeUsuario = user.displayName,
        this.foto = user.photoURL
      ));
    // console.log(this.nomeUsuario);
  }


  private alteraCorSaldo() {
    if (this.totalReceber - this.totalPagar > 0.0) {
      this.cor = "primary";
    } else {
      this.cor = "danger";
    }
  }


  async ionViewWillEnter() {
    try {
      this.carregaPerfil();
      await this.calculador.loadContasPagar();
      await this.calculador.loadContasReceber();
      this.totalReceber = await this.calculador.calculaTotalReceber();
      this.totalPagar = await this.calculador.calculaTotalPagar();
    } catch (e) {
      console.log("Erro", e);
    } finally {
      this.alteraCorSaldo();
    }
  }

  sair() {
    this.authService.logout();
    return this.router.navigate(['/login']);
  }
}
