import { Component, OnInit } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  email: string = "";
  senha: string = "";
  mensagem: string = "";
  passwordFieldType: string = 'password';  // Added to control password field type

  constructor(private service: FirebaseloginService, private navCtrl: NavController) { }

  // Function to toggle password visibility
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  // Function to validate the password
  validarSenha(senha: string): boolean {
    const senhaRegex = /^(?=.*[#$@&*])[A-Za-z\d#$@&*]{7,}$/;
    return senhaRegex.test(senha);
  }

  registrar() {
    if (this.email && this.senha) {
      if (this.validarSenha(this.senha)) {
        this.service.cadastro(this.email, this.senha).then(
          result => {
            console.log('Usuario Cadastrado', result.user)
            this.navCtrl.navigateForward('/dados-add')
          }
        ).catch(
          error => {
            console.log('Erro ao fazer cadastro', error)
            this.mensagem = 'Erro ao fazer cadastro. Verifique suas Informações!'
          }
        )
      } else {
        this.mensagem = 'A senha deve conter mais de 6 caracteres e incluir pelo menos um dos seguintes símbolos: #$@&*';
      }
    } else {
      this.mensagem = 'Por favor, preencha os campos!!'
    }
  }

  ngOnInit() {
  }
}
