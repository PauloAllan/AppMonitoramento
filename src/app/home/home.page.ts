import { Component, OnInit } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  mostrarConteudo: boolean = false;
  isLoading: boolean = true;
  nomeUsuario: string = ''; // Variável para armazenar o nome do usuário
  idadeUsuario: string = ''; // Variável para armazenar a idade do usuário

  constructor(
    private authService: FirebaseloginService, 
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.showLoadingScreen();
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        // Usuário autenticado, recuperar dados do usuário
        this.authService.getUserData().subscribe(data => {
          if (data) {
            // Se houver dados do usuário, atribua-os às variáveis nomeUsuario e idadeUsuario
            this.mostrarConteudo = true;
            this.nomeUsuario = data.nome || 'Usuário';
            this.idadeUsuario = data.idade || 'N/A';
          }
        });
      } else {
        // Usuário não autenticado, redirecionar para a página de login
        this.navCtrl.navigateRoot('/login');
      }
    });
  }

  async showLoadingScreen() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando...',
      spinner: 'bubbles', // Tipo de spinner
      cssClass: 'custom-loading', // Classe CSS personalizada
      duration: 1000
    });
    await loading.present();

    loading.onDidDismiss().then(() => {
      this.isLoading = false;
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.navCtrl.navigateRoot('/login');
    });
  }
}
