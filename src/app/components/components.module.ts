import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
    imports: [ CommonModule,IonicModule],
    exports: [PickupCallCardComponent],
    declarations: [PickupCallCardComponent]
  })
  export class ComponentsModule {}