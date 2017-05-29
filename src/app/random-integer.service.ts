import { Injectable } from "@angular/core";

@Injectable()
export class RandomIntegerService {

  constructor() { }

  getRandomInteger(maxValue: number): number {
    if (Math.floor(maxValue) !== maxValue) {
      throw new Error("Invalid maxValue. maxValue must be an integer.");
    }

    let randomValue = Math.random();
    randomValue *= maxValue;
    return Math.floor(randomValue);
  }
}
