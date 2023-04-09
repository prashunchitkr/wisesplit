import { IExpense } from "@/core";
import { useExpenseStore } from "@/store";

export const ExpenseForm = () => {
  const { addExpense } = useExpenseStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get("person") || !formData.get("amount")) return;

    const expense: IExpense = {
      person: formData.get("person") as string,
      amount: Number(formData.get("amount")),
    };
    addExpense(expense);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full">
          <label className="label" htmlFor="person">
            <span className="label-text">Person</span>
          </label>
          <input
            className="input input-bordered input-accent w-full"
            type="text"
            name="person"
            id="person"
          />
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="amount">
            <span className="label-text">Amount</span>
          </label>
          <input
            className="input input-bordered input-accent w-full"
            type="number"
            name="amount"
            id="amount"
          />
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
