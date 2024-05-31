import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosAddPageRoutingModule } from './dados-add-routing.module';

import { DadosAddPage } from './dados-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAddPageRoutingModule
  ],
  declarations: [DadosAddPage]
})
export class DadosAddPageModule {}
