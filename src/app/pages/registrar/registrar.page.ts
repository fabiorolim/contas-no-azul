import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formNovoUsuario: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.criarForm();
  }

  private criarForm() {
    this.formNovoUsuario = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      nome: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      confirma: ['', [Validators.required]],
      foto: ['', [Validators.required]]
    });
  }

  async registrar() {
    try {
      await this.authService.criarConta(this.formNovoUsuario.value);
      console.log('Usuário criado!');
      return this.router.navigate(['login/']);
    } catch (e) {
      console.log('Erro!', e);
    }
  }
}
