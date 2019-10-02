import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Conta } from '../models/conta.model';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContaPagarService extends Firestore<Conta> {

  constructor(
    db: AngularFirestore,
    private authService: AuthService) {
    super(db);
    this.init();
  }


  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/contas/${user.uid}/pagar`);
        return;
      }
      this.setCollection(null);
    });
  }
}
