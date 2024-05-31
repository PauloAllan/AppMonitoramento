import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  private elts: any;
  private texts: string[] = [
    "",
    "AppMonitorando",
    "<ion-icon name='pulse-outline'></ion-icon>"
  ];
  private morphTime: number = 3; // 1 segundo para a animação de morphing
  private cooldownTime: number = 1; // 0.5 segundos para o cooldown
  private textIndex: number = this.texts.length - 1;
  private time: Date = new Date();
  private morph: number = 0;
  private cooldown: number = this.cooldownTime;
  private hasNavigated: boolean = false; // Controle para evitar navegação múltipla

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
    };

    this.elts.text1.innerHTML = this.texts[this.textIndex % this.texts.length];
    this.elts.text2.innerHTML = this.texts[(this.textIndex + 1) % this.texts.length];

    this.animate();
  }

  private doMorph() {
    this.morph -= this.cooldown;
    this.cooldown = 0;

    let fraction = this.morph / this.morphTime;

    if (fraction > 1) {
      this.cooldown = this.cooldownTime;
      fraction = 1;
    }

    this.setMorph(fraction);
  }

  private setMorph(fraction: number) {
    this.elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    this.elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    this.elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    this.elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    this.elts.text1.innerHTML = this.texts[this.textIndex % this.texts.length];
    this.elts.text2.innerHTML = this.texts[(this.textIndex + 1) % this.texts.length];
  }

  private doCooldown() {
    this.morph = 0;

    this.elts.text2.style.filter = "";
    this.elts.text2.style.opacity = "100%";

    this.elts.text1.style.filter = "";
    this.elts.text1.style.opacity = "0%";
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    let newTime = new Date();
    let shouldIncrementIndex = this.cooldown > 0;
    let dt = (newTime.getTime() - this.time.getTime()) / 1000;
    this.time = newTime;

    this.cooldown -= dt;

    if (this.cooldown <= 0) {
      if (shouldIncrementIndex) {
        this.textIndex++;

        // Verifica se a última frase foi exibida
        if (this.textIndex >= this.texts.length && !this.hasNavigated) {
          this.hasNavigated = true; // Marca que a navegação já foi feita
          setTimeout(() => {
            this.fadeOutAndNavigate();
          }, 4000); // Aguarde 7 segundos para a transição
          return;
        }
      }

      this.doMorph();
    } else {
      this.doCooldown();
    }
  }

  private fadeOutAndNavigate() {
    // Verifique se o container não é nulo
    const container = document.getElementById('container');
    if (container) {
      container.classList.add('fade-out');

      // Aguarde a transição de opacidade terminar antes de navegar
      setTimeout(() => {
        this.navigateToEntrada();
      }, 2000); // Correspondendo ao tempo de transição em .fade-out
    } else {
      // Se o container for nulo, navegue imediatamente
      this.navigateToEntrada();
    }
  }

  private navigateToEntrada() {
    this.navCtrl.navigateForward('/entrada');
  }
}
