import { TestBed, inject } from "@angular/core/testing";

import { MathProblemService } from "./math-problem.service";

describe("MathProblemServiceService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathProblemService]
    });
  });

  it("should be created", inject([MathProblemService], (service: MathProblemService) => {
    expect(service).toBeTruthy();
  }));
});
