import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet'; //tipo Pets

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petsService: PetService) {}

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.pets = this.petsService.getPets();
  }
}
