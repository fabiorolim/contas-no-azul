import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user !== null));
  }

  loginComEmail({ email, senha }): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha);
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  criarConta({ email, senha, nome, foto }): Promise<auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then(credentials =>
        credentials.user.updateProfile({ displayName: nome, photoURL: foto })
          .then(() => credentials)
      );
  }
}
