import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ]

  constructor() { }

  ngOnInit() {
  }

  add(hypothysis: string) {
    this.experiments.push(hypothysis);
  }

  remove(hypothysis: string) {
    let index = this.experiments.indexOf(hypothysis);
    this.experiments.splice(index, 1);
  }

  experimentsBeingEdited: string[] = null;
  edit(hypothysis) {
    this.experimentsBeingEdited = hypothysis;
  }

  save(newExperiment: string, hypothysis:string) {
    let index = this.experiments.indexOf(hypothysis);
    this.experiments[index] = newExperiment;
    this.experimentsBeingEdited = null;
  }

}
