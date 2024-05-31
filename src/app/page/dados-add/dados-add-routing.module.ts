import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosAddPage } from './dados-add.page';

const routes: Routes = [
  {
    path: '',
    component: DadosAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosAddPageRoutingModule {}
