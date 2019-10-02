import { Component } from '@angular/core';
import { Conta } from 'src/app/core/models/conta.model';
import { ContaReceberService } from 'src/app/core/services/conta-receber.service';
import { LoadingController, NavController } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
})

export class ReceberPage {

  contas$: Observable<Conta[]>;

  constructor(
    private contaReceberService: ContaReceberService,
    private loadingController: LoadingController,
  ) {
    // this.contaService.setTipo({ tipo: "receber" });
  }


  async load(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const load = await this.loadingController.create({
      message: 'Carregando contas...',
      ...options
    });
    await load.present();
    return load;
  }

  async ionViewWillEnter() {
    const load = await this.load();
    this.contas$ = this.contaReceberService.getAll();
    this.contas$.pipe(take(1)).subscribe(() => load.dismiss());
  }

  ionViewDidEnter() {
    console.log('receber-did-enter');
  }
}
