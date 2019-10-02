import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Conta } from '../models/conta.model';
import { Firestore } from '../classes/firestore.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContaReceberService extends Firestore<Conta> {


  constructor(
    db: AngularFirestore,
    private authService: AuthService) {
    super(db);
    this.init();
  }


  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/contas/${user.uid}/receber`);
        return;
      }
      this.setCollection(null);
    });
  }
}