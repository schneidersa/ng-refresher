import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {             // https://angular.io/guide/lifecycle-hooks
  personList: string[];
  // private personsService: PersonsService;

  constructor(private prsService: PersonsService) {
    // this.personList = personsService.persons;
    // this.personsService = prsService;
  }

  ngOnInit() {
    this.personList = this.prsService.persons;
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
}
