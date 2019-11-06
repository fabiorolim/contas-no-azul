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
    totalPagar: number;
    totalReceber: number;

    constructor(
        private contaPagarService: ContaPagarService,
        private contaReceberService: ContaReceberService,
    ) { }


    getTotalPagar() {
        this.contaPagarService.getAll().subscribe(contas => {
            this.totalPagar = contas.reduce((total, conta) => total + conta.valor, 0);
            console.log(this.totalPagar);
            return this.totalPagar;
        });
        return this.totalPagar;
    }

    getTotalReceber() {
        this.contaReceberService.getAll().subscribe(contas => {
            this.totalReceber = contas.reduce((total, conta) => total + conta.valor, 0);
            console.log(this.totalReceber);
            return this.totalReceber;
        });
        return this.totalReceber;
    }

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

