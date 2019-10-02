import { LoadingController } from '@ionic/angular';
import { Conta } from '../models/conta.model';
import { Injectable } from '@angular/core';
import { ContaPagarService } from '../services/conta-pagar.service';
import { ContaReceberService } from '../services/conta-receber.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoadingOptions } from '@ionic/core';



@Injectable({
    providedIn: 'root'
})

export class Calculador {

    private contasPagar: Conta[];
    private contasReceber: Conta[];

    contasPagar$: Observable<Conta[]>;
    contasReceber$: Observable<Conta[]>;

    constructor(
        private contaPagarService: ContaPagarService,
        private contaReceberService: ContaReceberService,
        private loadingController: LoadingController
    ) { }

    async load(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
        const load = await this.loadingController.create({
            message: 'Carregando contas...',
            ...options
        });
        await load.present();
        return load;
    }

    async loadContasPagar(): Promise<void> {
        try {
            const load = await this.load();
            this.contasPagar$ = this.contaPagarService.getAll();
            this.contasPagar$.pipe(take(1)).subscribe(contas => {
                this.contasPagar = contas;
                load.dismiss();
            });
            console.log(this.contasPagar$);
        }
        catch (e) {
            console.log('Erro:', e);
        }
    }

    async loadContasReceber(): Promise<void> {
        try {
            const load = await this.load();
            this.contasReceber$ = this.contaReceberService.getAll();
            this.contasReceber$.pipe(take(1)).subscribe(contas => {
                this.contasReceber = contas;
                load.dismiss();
            });
            console.log(this.contasPagar$);
        }
        catch (e) {
            console.log('Erro:', e);
        }
    }

    async calculaTotalReceber(): Promise<number> {
        let total = 0;
        for (let conta of this.contasReceber) {
            console.log(conta);
            total += conta.valor;
        }
        return total;
    }

    async calculaTotalPagar(): Promise<number> {
        let total = 0;
        for (let conta of this.contasPagar) {
            console.log(conta);
            total += conta.valor;
        }
        return total;
    }
}

