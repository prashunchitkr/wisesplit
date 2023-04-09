import { IExpense, splitCost } from "@/core";
import { vi } from "vitest";

describe("test for splitting costs", () => {
  const MOCK_UUID = "mock-uuid";
  const expenses: IExpense[] = [
    { person: "A", amount: 200, id: MOCK_UUID },
    { person: "B", amount: 2000, id: MOCK_UUID },
    { person: "C", amount: 120, id: MOCK_UUID },
    { person: "D", amount: 10, id: MOCK_UUID },
    { person: "E", amount: 1000, id: MOCK_UUID },
  ];

  beforeAll(() => {
    const cryptoMock = {
      randomUUID: () => MOCK_UUID,
    };

    vi.stubGlobal("crypto", cryptoMock);
  });

  test("should split costs", () => {
    expect(splitCost(expenses)).toEqual([
      { id: MOCK_UUID, from: "D", to: "B", amount: 656 },
      { id: MOCK_UUID, from: "C", to: "B", amount: 546 },
      { id: MOCK_UUID, from: "A", to: "B", amount: 132 },
      { id: MOCK_UUID, from: "A", to: "E", amount: 334 },
    ]);
  });
});
