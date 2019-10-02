import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  NavController,
  ToastController
} from '@ionic/angular';
import { AlertOptions, LoadingOptions, ToastOptions } from '@ionic/core';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: AuthService,
    private alertControl: AlertController,
    private loadControl: LoadingController,
    private toastControl: ToastController,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController) { }


  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  async alert(options?: AlertOptions): Promise<HTMLIonAlertElement> {
    const alert = await this.alertControl.create(options);
    await alert.present();
    return alert;
  }

  async load(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const load = await this.loadControl.create({
      message: 'Aguarde...',
      ...options
    });
    await load.present();
    return load;
  }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastControl.create({
      position: 'bottom',
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    });
    await toast.present();
    return toast;
  }

  async login() {
    // console.log('Form', this.formLogin.value);
    const loading = await this.load();
    try {
      const credentials = await this.loginService.loginComEmail(this.formLogin.value);
      console.log('Autenticou', credentials);
      // return this.router.navigate(['/tabs/dashboard']);
      this.navCtrl.navigateForward(this.activatedRoute.snapshot.queryParamMap.get('redirect') || '/tabs/dashboard');
    } catch (e) {
      await this.toast({
        message: e.message
      });
      console.log('Erro ao autenticar', e);
    } finally {
      loading.dismiss();
    }
    // this.loginService.loginComEmail(this.formLogin.value);
    // if (this.loginService.isAuthenticated) {
    //   return this.router.navigate(['/tabs/dashboard']);
    // } else {
    //   console.log('Erro na autenticação!');
    // }
  }
}
