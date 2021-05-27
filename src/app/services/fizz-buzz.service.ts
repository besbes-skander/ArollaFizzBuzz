import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() {
  }

  outputFizzBuzz(value: number) {
    if (value === 3) {
      return 'Fizz';
    }
    return value;
  }
}
