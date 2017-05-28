import { MathPracticeAngularPage } from "./app.po";

describe("math-practice-angular App", () => {
  let page: MathPracticeAngularPage;

  beforeEach(() => {
    page = new MathPracticeAngularPage();
  });

  it("should display message saying app works", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("app works!");
  });
});
