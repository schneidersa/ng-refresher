import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'                                          // service object is everywhere the same object!
})
export class PersonsService {
  personsChanged = new Subject<string[]>();                   // Observable
  persons: string[] = ['Peter', 'Paul', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);                   // emitting events through personsChanged subject to update list of persons
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);                   // emitting events through personsChanged subject to update list of persons
  }
}
