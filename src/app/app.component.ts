import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //Initialize session (store in service?)...number of questions, maxOperandValue, store questions and responses
  //Allow skip and loop back around
  //Have a MathProblemComponent to render the problem

  title = "app works!";
}
