import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'      // service object is everywhere the same object!
})
export class PersonsService {
  persons: string[] = ['Peter', 'Paul', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }
}
