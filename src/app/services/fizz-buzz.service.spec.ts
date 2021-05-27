import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzBuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for 0', () => {
    const value = 0;

    const result = service.outputFizzBuzz(value);

    expect(result).toEqual(0);
  });

  it('should return Fizz for 3', () => {
    const value = 3;

    const result = service.outputFizzBuzz(value);

    expect(result).toEqual('Fizz');
  });

  it('should return Fizz for 6', () => {
    const value = 6;

    const result = service.outputFizzBuzz(value);

    expect(result).toEqual('Fizz');
  });

  it('should return Fizz for 9', () => {
    const value = 9;

    const result = service.outputFizzBuzz(value);

    expect(result).toEqual('Fizz');
  });

  it('should return Buzz for 5', () => {
    const value = 5;

    const result = service.outputFizzBuzz(value);

    expect(result).toEqual('Buzz');
  });

  it('should return Buzz for 10', () => {
    const value = 10;

    const result = service.outputFizzBuzz(value);

    expect(result).toEqual('Buzz');
  });
});
