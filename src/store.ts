import { create } from "zustand";
import { IExpense, IPayment, splitCost } from "@/core";

interface IExpenseStoreState {
  expenses: IExpense[];
  payments: IPayment[];
}

interface IExpenseStoreActions {
  addExpense: (expense: IExpense) => void;
  removeExpense: (person: string) => void;
  updateExpense: (expense: IExpense) => void;
}

export const useExpenseStore = create<
  IExpenseStoreState & IExpenseStoreActions
>((set) => ({
  expenses: [],
  payments: [],

  addExpense: (expense: IExpense) => {
    set((state) => {
      const expenses = [...state.expenses, expense];
      return { expenses, payments: splitCost(expenses) };
    });
  },

  removeExpense: (person: string) => {
    set((state) => {
      const expenses = state.expenses.filter((e) => e.person !== person);
      return { expenses };
    });
  },

  updateExpense: (expense: IExpense) => {
    set((state) => {
      const expenses = state.expenses.map((e) => {
        if (e.person === expense.person) {
          return expense;
        }
        return e;
      });
      return { expenses };
    });
  },
}));
