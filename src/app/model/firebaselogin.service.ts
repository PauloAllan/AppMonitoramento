import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseloginService {

  constructor(private autenticar: AngularFireAuth, private firestore: AngularFirestore) { }

  login(email: string, senha: string) {
    return this.autenticar.signInWithEmailAndPassword(email, senha);
  }

  cadastro(email: string, senha: string) {
    return this.autenticar.createUserWithEmailAndPassword(email, senha);
  }

  logout() {
    return this.autenticar.signOut();
  }

  getAuthState(): Observable<any> {
    return this.autenticar.authState;
  }

  getUserData(): Observable<any> {
    return this.autenticar.authState.pipe(
      switchMap(user => {
        if (user) {
          // Se o usuário estiver autenticado, recupere os dados dele do Firestore
          return this.firestore.collection('usuarios').doc(user.uid).valueChanges();
        } else {
          // Se o usuário não estiver autenticado, retorne um Observable vazio
          return of(null);
        }
      })
    );
  }

}
