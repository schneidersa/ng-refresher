import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = ['Peter', 'Paul', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
  }
}
