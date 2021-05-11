import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models/user';

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {
  transform(address: Address): string {
    return `${address.street}, ${address.city}, ${address.zipcode}`;
  }
}
