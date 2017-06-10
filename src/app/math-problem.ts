import { MathOperation } from "app/math-operation.enum";

export class MathProblem {
    public providedResponse: number;

    constructor(public operation: MathOperation, public firstOperand: number, public secondOperand: number) {
    }

    getResult(): number {
        if (this.operation !== MathOperation.Multiplication) {
            throw new Error("Can only process Multiplication problems right now");
        }

        switch (this.operation) {
            case MathOperation.Multiplication:
                return this.firstOperand * this.secondOperand;
            default:
                throw new Error("Unknown MathOperation. Can't provide results for this MathOperation yet.");
        }
    }

    getOperationSymbol(): string {
        switch(this.operation) {
            case MathOperation.Multiplication:
                return "x";
            default:
                throw new Error("Unknown MathOperation. Can't provide symbol for this MathOperation yet.");
        }
    }
}
