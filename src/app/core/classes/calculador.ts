import { Conta } from '../models/conta.model';
import { Injectable } from '@angular/core';
import { ContaPagarService } from '../services/conta-pagar.service';
import { ContaReceberService } from '../services/conta-receber.service';
import { Observable } from 'rxjs';
import { createNgModule } from '@angular/compiler/src/core';



@Injectable({
    providedIn: 'root'
})

export class Calculador {

    // private contasPagar: Conta[];
    // private contasReceber: Conta[];

    // contasPagar$: Observable<Conta[]>;
    // contasReceber$: Observable<Conta[]>;
    totalPagar: number;
    totalReceber: number;

    constructor(
        private contaPagarService: ContaPagarService,
        private contaReceberService: ContaReceberService,
    ) { }

    calculate(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await this.contaPagarService.getAll().subscribe(contas => {
                this.totalPagar = contas.reduce((total, conta) => total + conta.valor, 0);
                console.log(this.totalPagar);
            });

            await this.contaReceberService.getAll().subscribe(contas => {
                this.totalReceber = contas.reduce((total, conta) => total + conta.valor, 0);
                console.log(this.totalReceber);
            });
            resolve({
                'total_pagar': this.totalPagar,
                'total_receber': this.totalReceber,
                'saldo': this.totalReceber - this.totalPagar
            })
        });
    }


    // getTotalPagar() {
    //     this.contaPagarService.getAll().subscribe(contas => {
    //         this.totalPagar = contas.reduce((total, conta) => total + conta.valor, 0);
    //         console.log(this.totalPagar);
    //         return this.totalPagar;
    //     });
    //     return this.totalPagar;
    // }

    // getTotalReceber() {
    //     this.contaReceberService.getAll().subscribe(contas => {
    //         this.totalReceber = contas.reduce((total, conta) => total + conta.valor, 0);
    //         console.log(this.totalReceber);
    //         return this.totalReceber;
    //     });
    //     return this.totalReceber;
    // }

    // calculaTotal(contas: Conta[]){
    //     return contas.reduce((total, conta) => total + conta.valor, 0);
    // }

    // async calculaTotalReceber(): Promise<number> {
    //     return this.contasReceber.reduce((total, conta) => total + conta.valor, 0);
    // }

    // async calculaTotalPagar(): Promise<number> {
    //     return this.contasPagar.reduce((total, conta) => total + conta.valor, 0);
    // }
}

