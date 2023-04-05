import { IExpense, splitCost } from "@/core";

describe("test for splitting costs", () => {
  const expenses: IExpense[] = [
    { person: "A", amount: 200 },
    { person: "B", amount: 2000 },
    { person: "C", amount: 120 },
    { person: "D", amount: 10 },
    { person: "E", amount: 1000 },
  ];

  test("should split costs", () => {
    expect(splitCost(expenses)).toEqual([
      { from: "D", to: "B", amount: 656 },
      { from: "C", to: "B", amount: 546 },
      { from: "A", to: "B", amount: 132 },
      { from: "A", to: "E", amount: 334 },
    ]);
  });
});
