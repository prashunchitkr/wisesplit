import { IExpense } from "@/core";

interface IExpenseFormProps {
  onSubmit: React.Dispatch<React.SetStateAction<IExpense[]>>;
}

export const ExpenseForm = ({ onSubmit }: IExpenseFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get("person") || !formData.get("amount")) return;

    const expense: IExpense = {
      person: formData.get("person") as string,
      amount: Number(formData.get("amount")),
    };
    onSubmit((prevExpenses) => [...prevExpenses, expense]);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="person">Person</label>
        <input type="text" name="person" id="person" />

        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};
