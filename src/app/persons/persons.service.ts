import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'                                          // service object is everywhere the same object!
})
export class PersonsService {
  personsChanged = new Subject<string[]>();                   // Observable
  persons: string[] = [];

  constructor(private http: HttpClient) {

  }

  fetchPersons() {
    this.http
    .get<any>('https://swapi.co/api/people')
    .pipe(
      map(responseData => {
        return responseData.results.map(character => character.name);
      })
    )
    .subscribe(transformedData => {
      this.personsChanged.next(transformedData);
    });
  }

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
