import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceberPage } from './receber.page';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComponentsModule } from 'src/app/core/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ReceberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AngularFirestoreModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceberPage]
})
export class ReceberPageModule {}
