import { Component } from '@angular/core';
import { Conta } from 'src/app/core/models/conta.model';
import { ContaReceberService } from 'src/app/core/services/conta-receber.service';
import { LoadingController, NavController, AlertController, ToastController } from '@ionic/angular';
import { LoadingOptions, AlertOptions, ToastOptions } from '@ionic/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


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
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) {
    // this.contaService.setTipo({ tipo: "receber" });
  }


  async load(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const load = await this.loadingController.create({
      message: 'Carregando contas...',
      ...options
    });
    load.present();
    return load;
  }

  async alert(options?: AlertOptions): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create(options);
    await alert.present();
    return alert;
  }

  async ionViewWillEnter() {
    const load = await this.load();
    this.contas$ = this.contaReceberService.getAll();
    this.contas$.subscribe(() => load.dismiss());
  }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    });
    await toast.present();
    return toast;
  }

  ionViewDidEnter() {
    console.log('receber-did-enter');
  }

  onUpdate(conta: Conta): void {
    this.navCtrl.navigateForward(['editar-conta-receber', conta.id]);
  }

  async onDelete(conta: Conta): Promise<void> {
    await this.alert({
      message: `Quer realmente apagar esta conta "${conta.descricao}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.contaReceberService.delete(conta);
            await this.toast({
              message: `Conta "${conta.descricao}" deletetada!`
            });
          }
        },
        'Não'
      ]
    });
  }
}
