import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { PETS } from './mock-pets';

@Injectable({
  providedIn: 'root', //SINGLETON
})
export class PetService {
  constructor() {}

  //metodo que devolve a lista de Pets
  getPets(): Pet[] {
    return PETS;
  }
}
