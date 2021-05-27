import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() {
  }

  outputFizzBuzz(value: number) : string | number {
    if(this.divisibleBy3(value) && this.divisibleBy5(value)) {
      return 'FizzBuzz';
    }
    if (this.divisibleBy3(value)) {
      return 'Fizz';
    }
    if (this.divisibleBy5(value)) {
      return 'Buzz';
    }
    return value;
  }

  private divisibleBy5(value: number) : boolean{
    return value > 0 && value % 5 === 0;
  }

  private divisibleBy3(value: number) : boolean {
    return value > 0 && value % 3 === 0;
  }
}
