import { Component } from '@angular/core';
import { Conta } from 'src/app/core/models/conta.model';
import { ContaPagarService } from './../../core/services/conta-pagar.service';
import { LoadingController } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage {

  contas$: Observable<Conta[]>;

  constructor(
    private contaPagarService: ContaPagarService,
    private loadingController: LoadingController) {
    console.log('Construtor pagar page');
  }

  async load(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const load = await this.loadingController.create({
      message: 'Carregando contas...',
      ...options
    });
    load.present();
    return load;
  }

  async ionViewWillEnter() {
    const load = await this.load();
    this.contas$ = this.contaPagarService.getAll();
    this.contas$.subscribe(() => load.dismiss());
  }
}

