import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() {
  }

  outputFizzBuzz(value: number) {
    if (this.divisibleBy3(value)) {
      return 'Fizz';
    }
    if(value === 5) {
      return 'Buzz';
    }
    return value;
  }

  private divisibleBy3(value: number) {
    return value && value % 3 === 0;
  }
}
