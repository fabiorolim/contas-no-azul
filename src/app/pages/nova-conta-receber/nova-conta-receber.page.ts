import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/core/models/conta.model';
import { ContaReceberService } from 'src/app/core/services/conta-receber.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { LoadingOptions, ToastOptions } from '@ionic/core';


@Component({
  selector: 'app-nova-conta-receber',
  templateUrl: './nova-conta-receber.page.html',
  styleUrls: ['./nova-conta-receber.page.scss'],
})
export class NovaContaReceberPage implements OnInit {

  form: FormGroup;
  conta: Conta;

  constructor(
    private fb: FormBuilder,
    private contaReceberService: ContaReceberService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.createForm();
  }

  async load(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const load = await this.loadingController.create({
      message: 'Salvando...',
      ...options
    });
    await load.present();
    return load;
  }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      position: 'bottom',
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    });
    await toast.present();
    return toast;
  }

  private createForm() {
    this.form = this.fb.group({
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.load();
    try {
      console.log(this.form.value);
      await this.contaReceberService.create(this.form.value);
      this.navCtrl.navigateBack('/tabs/receber');
    } catch (e) {
      console.log('Erro ao tentar salvar conta', e);
      await this.toast({ message: e.message });
    } finally {
      loading.dismiss();
    }
  }
}