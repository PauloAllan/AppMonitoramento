import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/model/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados-add',
  templateUrl: './dados-add.page.html',
  styleUrls: ['./dados-add.page.scss'],
})
export class DadosAddPage implements OnInit {

  novoNome: string = "";
  novaIdade!: Date;
  novoGenero: string = "";
  novoPeso!: number;
  novoCPF: string = "";
  section: number = 1;
  section1: boolean = true;

  constructor(
    private firebaseService: FirebaseService, 
    private navCtrl: NavController) { }

  ngOnInit() {
    // Você pode carregar os dados do usuário aqui, se necessário
  }

  atualizarDados() {
    // Seção 1: Atualizar nome
    if (this.section === 1) {
      if (this.novoNome) {
        // Atualizar nome no banco de dados
        this.firebaseService.enviarDadosUsuario({ nome: this.novoNome });
        this.section++;
      }
    }

    // Seção 2: Atualizar idade
    else if (this.section === 2) {
      if (this.novaIdade) {
        // Atualizar idade no banco de dados
        this.firebaseService.enviarDadosUsuario({ idade: this.novaIdade });
        this.section++;
      }
    }

    // Seção 3: Atualizar gênero
    else if (this.section === 3) {
      if (this.novoGenero) {
        // Atualizar gênero no banco de dados
        this.firebaseService.enviarDadosUsuario({ genero: this.novoGenero });
        this.section++;
      }
    }

    // Seção 4: Atualizar peso
    else if (this.section === 4) {
      if (this.novoPeso) {
        // Atualizar peso no banco de dados
        this.firebaseService.enviarDadosUsuario({ peso: this.novoPeso });
        this.section++;
      }
    }

    // Seção 5: Atualizar CPF
    else if (this.section === 5) {
      if (this.novoCPF) {
        // Atualizar CPF no banco de dados
        this.firebaseService.enviarDadosUsuario({ cpf: this.novoCPF });
        this.section++;
      }
    }

    // Seção 6: Confirmar informações
    else if (this.section === 6) {
    }
  }

  section2() {
    this.section1 = false;
  }
  
  confirmarDados() {
        // Enviar todas as informações para o banco de dados
        this.firebaseService.enviarDadosUsuario({
          nome: this.novoNome,
          idade: this.novaIdade,
          genero: this.novoGenero,
          peso: this.novoPeso,
          cpf: this.novoCPF
        }).then(() => {
          console.log('Informações enviadas com sucesso!');
          // Redirecionar para a próxima página ou fazer qualquer outra ação necessária
        }).catch(error => {
          console.error('Erro ao enviar informações:', error);
          // Tratar o erro conforme necessário
        });
      }

  editarDados() {
        this.section--;
  }

  confirmar() {
    this.navCtrl.navigateForward('/home');
  }

} 
