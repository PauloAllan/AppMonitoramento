import { Component, OnInit } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  email:string="";
  senha:string="";
  mensagem:string="";

  constructor(private service:FirebaseloginService, private navCtrl:NavController) { }

  registrar(){
    if(this.email && this.senha){
      this.service.cadastro(this.email,this.senha).then(
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
    } else{
      this.mensagem = 'Por favor, preencha os campos!!'
    }
  }

  ngOnInit() {
  }

}
