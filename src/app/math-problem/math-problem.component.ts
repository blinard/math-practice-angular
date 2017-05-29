import { Component, OnInit, Input } from "@angular/core";
import { MathProblem } from "app/math-problem";

@Component({
  selector: "app-math-problem",
  templateUrl: "./math-problem.component.html",
  styleUrls: ["./math-problem.component.css"]
})
export class MathProblemComponent implements OnInit {
  @Input() mathProblem: MathProblem;
  constructor() { }

  ngOnInit() {
  }

}
