
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/model/firebase.service';

@Component({
  selector: 'app-dados-add',
  templateUrl: './dados-add.page.html',
  styleUrls: ['./dados-add.page.scss'],
})
export class DadosAddPage implements OnInit {

  novoNome: string ="";

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    // Você pode carregar os dados do usuário aqui, se necessário
  }

  atualizarNome() {
    if (this.novoNome) {
      this.firebaseService.enviarDadosUsuario({ nome: this.novoNome })
        .then(() => {
          console.log('Nome atualizado com sucesso');
          // Você pode adicionar um feedback para o usuário aqui, se desejar
        })
        .catch(error => {
          console.error('Erro ao atualizar o nome:', error);
          // Você pode adicionar um feedback para o usuário aqui, se desejar
        });
    } else {
      // Adicione um feedback para o usuário caso o novo nome não tenha sido fornecido
    }
  }
}


