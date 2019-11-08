import { AuthService } from './../../core/auth/auth.service';
import { Calculador } from './../../core/classes/calculador';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingOptions } from '@ionic/core';
import { LoadingController } from '@ionic/angular';
import { of } from 'rxjs';
import { mergeMap, concatMap } from 'rxjs/operators';

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
  data: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private calculador: Calculador,
    private loadingController: LoadingController) {
  }

  async load(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const load = await this.loadingController.create({
      message: 'Carregando contas...',
    });
    load.present();
    return load;
  }

  private async carregaPerfil() {
    await this.authService.authState$
      .subscribe(user => (
        this.nomeUsuario = user.displayName,
        this.foto = user.photoURL,
        console.log(this.nomeUsuario)
      ));
  }


  private alteraCorSaldo() {
    if (this.totalReceber - this.totalPagar > 0.0) {
      this.cor = "primary";
    } else {
      this.cor = "danger";
    }
  }


  // async ionViewWillEnter() {
  //   const load = await this.load();
  //   try {
  //     await this.carregaPerfil();
  //     await this.calculador.loadContasPagar();
  //     await this.calculador.loadContasReceber();
  //     this.totalReceber = await this.calculador.calculaTotalReceber();
  //     this.totalPagar = await this.calculador.calculaTotalPagar();
  //   } catch (e) {
  //     console.log("Erro", e);
  //   } finally {
  //     this.alteraCorSaldo();
  //     load.dismiss();
  //   }
  // }

  ionViewWillEnter() {
    this.calculador.calculate().then((data) => {
      this.data = data;
      console.log(this.data);
      this.alteraCorSaldo();
      this.carregaPerfil();
    })
  }

  sair() {
    this.authService.logout();
    return this.router.navigate(['/login']);
  }
}
