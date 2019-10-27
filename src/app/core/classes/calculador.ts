import { LoadingController } from '@ionic/angular';
import { Conta } from '../models/conta.model';
import { Injectable } from '@angular/core';
import { ContaPagarService } from '../services/conta-pagar.service';
import { ContaReceberService } from '../services/conta-receber.service';
import { Observable } from 'rxjs';



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
    ) { }


    async loadContasPagar() {
        this.contasPagar$ = await this.contaPagarService.getAll();
        await this.contasPagar$.subscribe(contas => {
            this.contasPagar = contas;
        });
        console.log(this.contasPagar$);
    }

    loadContasReceber() {
        this.contasReceber$ = this.contaReceberService.getAll();
        this.contasReceber$.subscribe(contas => {
            this.contasReceber = contas;
            // load.dismiss();
        });
        console.log(this.contasPagar$);
        console.log(this.contasPagar);
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

