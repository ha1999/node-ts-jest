import { add, multiply } from "../app/math";
import setupTestDB from "./utils/setupTestDB";

setupTestDB();

describe("Math functions", () => {
  it("should multiply 5 by 3", () => {
    const result = multiply(5, 3);
    expect(result).toBe(15);
  });

  it("should add 5 by 3", () => {
    const result = add(5, 3);
    expect(result).toBe(8);
  });

  test('object assignment', () => {
    const data: {one: number, two?: number} = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});