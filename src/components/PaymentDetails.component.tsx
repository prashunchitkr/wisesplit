import { IExpense } from "@/core";

interface IPaymentDetailsProps {
  expenses: IExpense[];
}

export const PaymentDetails = ({ expenses }: IPaymentDetailsProps) => {
  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.person}>{expense.amount}</div>
      ))}
    </div>
  );
};
