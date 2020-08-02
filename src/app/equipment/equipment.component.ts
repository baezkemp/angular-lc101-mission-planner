import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment:string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ]

  constructor() { }

  ngOnInit() {
  }

  add(piece: string) {
    this.equipment.push(piece);
  }

  remove(piece: string) {
    let index = this.equipment.indexOf(piece);
    this.equipment.splice(index, 1);
  }

  equipmentBeingEdited: string[] = null;
  edit(piece) {
    this.equipmentBeingEdited = piece;
  }

  save(newEquipment: string, piece:string) {
    let index = this.equipment.indexOf(piece);
    this.equipment[index] = newEquipment;
    this.equipmentBeingEdited = null;
  }

}
