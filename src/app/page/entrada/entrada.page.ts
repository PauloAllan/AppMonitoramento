// entrada.page.ts

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
  
  mostrarBoasVindas: boolean = true;
  isRotating: boolean = false;
  isLoading: boolean = true;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.showLoadingScreen();
  }

  showLoadingScreen() {
    setTimeout(() => {
      this.isLoading = false;
    }, 8000); // 10 segundos
  }

  mostrarProximaTela() {
    this.mostrarBoasVindas = false;
  }

  cadastrar(){
    this.navCtrl.navigateForward('/cadastro');
  }

  login() {
    this.navCtrl.navigateForward('/login');
  }

  toggleRotation() {
    this.isRotating = !this.isRotating;
  }
}
