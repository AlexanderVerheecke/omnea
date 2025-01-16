import { Plateau } from "./plateau";

describe("plateau init tests", () => {
  test("plateau inits correctly", () => {
    const plateau = new Plateau(5, 5);

    expect(plateau.w).toBe(5);
    expect(plateau.h).toBe(5);
  });
});
