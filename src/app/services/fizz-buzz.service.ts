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
    if (this.divisibleBy5(value)) {
      return 'Buzz';
    }
    return value;
  }

  private divisibleBy5(value: number) {
    return value && value % 5 === 0;
  }

  private divisibleBy3(value: number) {
    return value && value % 3 === 0;
  }
}
