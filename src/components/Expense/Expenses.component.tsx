import { IExpense } from "@/core";
import { useExpenseStore } from "@/store";

export const Expenses = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  return (
    <div className="prose mt-3">
      <h2>Expenses</h2>
      {expenses.length === 0 && <span>No expenses</span>}
      {expenses.map((expense) => (
        <ExpenseDetail key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

interface IExpenseDetail {
  expense: IExpense;
}

const ExpenseDetail = ({ expense }: IExpenseDetail) => (
  <div>
    <b>{expense.person}</b> paid <b>Rs.{expense.amount}</b>
  </div>
);
