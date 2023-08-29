import rewire from "rewire";

describe("String in Javascript", () => {
  test("there is no I in team", () => {
    const rewiredModule = rewire("./utils/verions");
    const nonExportedVariable = rewiredModule.__get__("version");
    console.log(nonExportedVariable, "nonExportedVariable");
    const sum = rewiredModule.__get__("sum")
    expect(sum(2, 4)).toBe(6)
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});
