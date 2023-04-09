import { useExpenseStore } from "@/store";

export const PaymentDetails = () => {
  const { payments } = useExpenseStore();

  return (
    <div>
      <h4>Payments</h4>
      {payments.map((payment) => {
        return (
          <div key={`${payment.from}-${payment.to}`}>
            <b>{payment.from}</b> pays <b>{payment.to}</b>{" "}
            <b>Rs.{payment.amount}</b>
          </div>
        );
      })}
    </div>
  );
};
