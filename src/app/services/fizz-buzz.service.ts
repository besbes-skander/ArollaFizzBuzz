import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() {
  }

  outputFizzBuzz(value: number) {
    return value;
  }
}
