import { IExpense } from "@/core";

interface IExpensesProps {
  expenses: IExpense[];
}

export const Expenses = ({ expenses }: IExpensesProps) => {
  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.person}>
          {expense.person} <b>Rs.{expense.amount}</b>
        </div>
      ))}
    </div>
  );
};
