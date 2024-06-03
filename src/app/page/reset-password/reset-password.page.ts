// reset-password.page.ts
import { Component } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';
  mensagem: string ='';
  mensagemGreen: string ='';

  constructor(private authService: FirebaseloginService) {}

  resetPassword() {
    console.log('Valor do email:', this.email); // Adicione esta linha
    if (!this.email) {
      console.error('Email não fornecido');
      this.mensagem = 'Email não fornecido!'
      return;
    }
  
    // Adicione uma validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      console.error('Email inválido');
      this.mensagem = 'Email invalido!'
      return;
    }
  
    this.authService.resetarSenha(this.email)
      .then(() => {
        console.log('Email de redefinição de senha enviado com sucesso');
        this.mensagemGreen = 'Email de redefinição de senha enviado com sucesso!'
      })
      .catch((error) => {
        console.error('Erro ao enviar email de redefinição de senha', error);
        // Trate o erro adequadamente
      });
    }
}
