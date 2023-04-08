import { useState } from "react";
import { Expenses } from "./Expenses.component";
import { IExpense } from "@/core";
import { ExpenseForm } from "./ExpenseForm.component";

export const ExpenseContainer = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  return (
    <div>
      <ExpenseForm onSubmit={setExpenses} />
      <Expenses expenses={expenses} />
    </div>
  );
};
