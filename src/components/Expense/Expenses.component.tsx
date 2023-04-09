import { useExpenseStore } from "@/store";

export const Expenses = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  return (
    <div>
      <h4>Expenses</h4>
      {expenses.map((expense) => (
        <div key={expense.person}>
          <b>{expense.person}</b> paid <b>Rs.{expense.amount}</b>
        </div>
      ))}
    </div>
  );
};
