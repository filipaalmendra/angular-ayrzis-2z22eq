import { Injectable } from '@angular/core';
import { Pets } from './pets';
import { PETS } from './mock-pets';

@Injectable({
  providedIn: 'root', //SINGLETON
})
export class PetService {
  constructor() {}

  //metodo que devolve a lista de Pets
  getPets(): Pets[] {
    return PETS;
  }
}
