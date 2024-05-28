import { Component, OnInit } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string="";
  senha:string="";
  mensagem:string="";

  constructor(private service:FirebaseloginService, private navCtrl:NavController) { }

  login(){
    if(this.email && this.senha){
      this.service.login(this.email,this.senha).then(
        result => {
          
          console.log('Usuario Logado', result.user)
          this.navCtrl.navigateForward('/home')
        }
      ).catch(
        error => {
          console.log('Erro ao fazer login', error)
          this.mensagem = 'Erro ao fazer login. Verifique suas Informações!'
        }
      )
    } else{
      this.mensagem = 'Por favor, preencha os campos!!'
    }
  }
  cadastrar(){
    this.navCtrl.navigateForward('cadastro');
  }

  ngOnInit() {
  }

}
