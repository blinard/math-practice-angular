import { Component, OnInit } from "@angular/core";
import { MathProblem } from "app/math-problem";
import { MathOperation } from "app/math-operation.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentProblem: MathProblem;
  // Initialize session (store in service?)...number of questions, maxOperandValue, store questions and responses
  // Allow skip and loop back around
  // Have a MathProblemComponent to render the problem

  title = "Math Problem";

  ngOnInit(): void {
    this.currentProblem = new MathProblem(MathOperation.Multiplication, 1, 2);
  }
}
