import { TestBed, inject } from "@angular/core/testing";

import { RandomIntegerService } from "./random-integer.service";
import { MaterialModule } from "@angular/material";

describe("RandomIntegerServiceService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [RandomIntegerService]
    });
  });

  it("should be created", inject([RandomIntegerService], (service: RandomIntegerService) => {
    expect(service).toBeTruthy();
  }));

  it("shouldn't accept fractional maxValues", inject([RandomIntegerService], (service: RandomIntegerService) => {
    expect(function() { service.getRandomInteger(0.001); }).toThrowError();
    expect(function() { service.getRandomInteger(0.5); }).toThrowError();
    expect(function() { service.getRandomInteger(2.1); }).toThrowError();
  }));

  it("should return random integer", inject([RandomIntegerService], (service: RandomIntegerService) => {
    let randomInt = service.getRandomInteger(7);
    expect(Math.floor(randomInt) === randomInt).toBeTruthy();

    randomInt = service.getRandomInteger(11);
    expect(Math.floor(randomInt) === randomInt).toBeTruthy();

    randomInt = service.getRandomInteger(13);
    expect(Math.floor(randomInt) === randomInt).toBeTruthy();

    randomInt = service.getRandomInteger(21);
    expect(Math.floor(randomInt) === randomInt).toBeTruthy();
  }));

  it("should return value less than or equal to maxValue", inject([RandomIntegerService], (service: RandomIntegerService) => {
    let randomInt = service.getRandomInteger(7);
    expect(randomInt).toBeLessThanOrEqual(7);

    randomInt = service.getRandomInteger(11);
    expect(randomInt).toBeLessThanOrEqual(11);

    randomInt = service.getRandomInteger(13);
    expect(randomInt).toBeLessThanOrEqual(13);

    randomInt = service.getRandomInteger(21);
    expect(randomInt).toBeLessThanOrEqual(21);
  }));
});
