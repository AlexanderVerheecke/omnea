// input x, y, cardinality
import { Rover } from "./rover";
describe("Rover init", () => {
  test("rover init with correct values", () => {
    const rover = new Rover(1, 2, "N");

    expect(rover.x).toBe(1);
    expect(rover.y).toBe(2);
    expect(rover.direction).toBe("N");
  });
});

describe("Rover movement test", () => {
  test("rover changes direction based L input", () => {
    const rover = new Rover(1, 2, "N");

    rover.turnLeft();

    expect(rover.direction).toBe("W");
  });

  test("rover changes direction based E input", () => {
    const rover = new Rover(1, 2, "N");

    rover.turnRight();

    expect(rover.direction).toBe("E");
  });

  test("rover moves forward on M input", () => {
    const rover = new Rover(1, 2, "N");

    rover.moveForward();

    expect(rover.x).toBe(1);
    expect(rover.y).toBe(3);
    expect(rover.direction).toBe("N");
  });

  test("Rover follows LMLMLMLMM instrucion correctly", () => {
    const rover = new Rover(1, 2, "N");

    rover.execute('LMLMLMLMM')

    expect(rover.x).toBe(1);
    expect(rover.y).toBe(3);
    expect(rover.direction).toBe("N");
  });
});
