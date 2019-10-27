import { NgModule } from '@angular/core';
import { ItemContaComponent } from '../components/item-conta/item-conta.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [ItemContaComponent],
    exports: [ItemContaComponent],
    imports: [IonicModule]
})

export class ComponentsModule { }
