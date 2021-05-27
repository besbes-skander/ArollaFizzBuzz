import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() {
  }

  outputFizzBuzz(value: number): string | number {
    let result = '';

    result += this.divisibleBy3(value);

    result += this.divisibleBy5(value);

    result = this.isEmptyResult(value, result);

    return result;
  }

  private divisibleBy5(value: number): string {
    return (value > 0 && value % 5 === 0) ? 'Buzz' : '';
  }

  private divisibleBy3(value: number): string {
    return (value > 0 && value % 3 === 0) ? 'Fizz' : '';
  }

  private isEmptyResult(value: number, result: string) {
    return result.length > 0 ? result : value.toString();
  }
}
