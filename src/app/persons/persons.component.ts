import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {                            // OnInit - https://angular.io/guide/lifecycle-hooks
  personList: string[];
  isFetching = false;
  private personListSubscribe: Subscription;
  // private personsService: PersonsService;

  constructor(private prsService: PersonsService) {
    // this.personList = personsService.persons;
    // this.personsService = prsService;
  }

  ngOnInit() {
    this.personListSubscribe = this.prsService.personsChanged.subscribe(persons => {    // subscribe to list of personsChanged
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  ngOnDestroy() {
    // tslint:disable-next-line: max-line-length
    this.personListSubscribe.unsubscribe();                                             // unsubscribe to list of personsChanged to prevent memory leaks
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
}
