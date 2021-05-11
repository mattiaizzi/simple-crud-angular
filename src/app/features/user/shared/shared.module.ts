import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPipe } from './pipes/address.pipe';

@NgModule({
  declarations: [AddressPipe],
  exports: [AddressPipe],
  imports: [CommonModule],
})
export class SharedModule {}
