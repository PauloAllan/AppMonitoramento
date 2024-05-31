import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore, private autenticar: AngularFireAuth) { }

  getUserData(): Observable<any> {
    return this.autenticar.authState.pipe(
      switchMap(user => {
        if (user) {
          // Se o usuário estiver autenticado, recupere os dados dele do Firestore
          return this.firestore.collection('usuarios').doc(user.uid).valueChanges();
        } else {
          // Se o usuário não estiver autenticado, retorne um Observable vazio
          return [];
        }
      })
    );
  }

  enviarDadosUsuario(dados: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.autenticar.authState.subscribe(user => {
        if (user) {
          // Se o usuário estiver autenticado, envie os dados dele para o Firestore
          this.firestore.collection('usuarios').doc(user.uid).set(dados)
          .then(() => resolve())
          .catch(error => reject(error));
        } else {
          reject(new Error('Nenhum usuário autenticado.'));
        }
      });
    });
  }
}
