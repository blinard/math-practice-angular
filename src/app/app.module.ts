import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import "hammerjs";
import { RandomIntegerService } from "./random-integer.service";
import { MathProblemService } from "./math-problem.service";
import { MathProblemComponent } from "./math-problem/math-problem.component";

@NgModule({
  declarations: [
    AppComponent,
    MathProblemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [RandomIntegerService, MathProblemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
