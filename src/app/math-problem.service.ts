import { Injectable } from "@angular/core";
import { MathOperation } from "app/math-operation.enum";
import { MathProblem } from "app/math-problem";
import { RandomIntegerService } from "app/random-integer.service";

@Injectable()
export class MathProblemService {

  constructor(private randomIntegerService: RandomIntegerService) { }

  getRandomMathProblem(operation: MathOperation, maxOperandValue: number): MathProblem {
    if (Math.floor(maxOperandValue) !== maxOperandValue) {
      throw new Error("Invalid maxOperandValue. maxOperandValue must be a integer.");
    }
    if (operation !== MathOperation.Multiplication) {
      throw new Error("Can only generate Multiplication problems right now.");
    }

    return new MathProblem(
      operation,
      this.randomIntegerService.getRandomInteger(maxOperandValue),
      this.randomIntegerService.getRandomInteger(maxOperandValue)
      );
  }

}
