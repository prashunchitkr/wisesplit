import { ExpenseContainer } from "@/components/Expense";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Expense Container", () => {
  const setup = () => {
    render(<ExpenseContainer />);

    return {
      personInput: screen.getByLabelText("Person"),
      amountInput: screen.getByLabelText("Amount"),
      addButton: screen.getByText("Add"),
    };
  };

  test("Should render correctly", async () => {
    const { personInput, amountInput, addButton } = setup();

    expect(personInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("Should add expense", async () => {
    const { personInput, amountInput, addButton } = setup();

    fireEvent.change(personInput, { target: { value: "John" } });
    fireEvent.change(amountInput, { target: { value: 100 } });
    fireEvent.click(addButton);

    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(await screen.findByText(/100/)).toBeInTheDocument();
  });

  test("Should clear input after adding expense", async () => {
    const { personInput, amountInput, addButton } = setup();

    fireEvent.change(personInput, { target: { value: "John" } });
    fireEvent.change(amountInput, { target: { value: 100 } });
    fireEvent.click(addButton);

    expect(personInput).toHaveValue(undefined);
    expect(amountInput).toHaveValue(undefined);
  });

  test("Should not add expense if person is empty", async () => {
    const { personInput, amountInput, addButton } = setup();

    fireEvent.change(personInput, { target: { value: "" } });
    fireEvent.change(amountInput, { target: { value: 100 } });
    fireEvent.click(addButton);

    expect(
      await screen.findByText("Person name is required")
    ).toBeInTheDocument();
  });

  test("Should not add expense if amount is empty", async () => {
    const { personInput, amountInput, addButton } = setup();

    fireEvent.change(personInput, { target: { value: "John" } });
    fireEvent.change(amountInput, { target: { value: "" } });
    fireEvent.click(addButton);

    expect(await screen.findByText("Amount is required")).toBeInTheDocument();
  });
});
