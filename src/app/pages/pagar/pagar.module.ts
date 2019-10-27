import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagarPage } from './pagar.page';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComponentsModule } from 'src/app/core/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PagarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFirestoreModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagarPage]
})
export class PagarPageModule {}
