import { useExpenseStore } from "@/store";
import { IPayment } from "@/core";

export const PaymentDetails = () => {
  const { payments } = useExpenseStore();

  return (
    <div className="prose mt-3">
      <h2>Payments</h2>
      {payments.length === 0 && <span>No payments to calculate</span>}
      {payments.map((payment) => {
        return (
          <div key={payment.id}>
            <PaymentDetail payment={payment} />
          </div>
        );
      })}
    </div>
  );
};

interface IPaymentDetailProps {
  payment: IPayment;
}

const PaymentDetail = ({ payment }: IPaymentDetailProps) => {
  return (
    <div>
      <span className="badge badge-primary">{payment.from}</span> pays{" "}
      <span className="badge badge-accent">Rs.{payment.amount}</span> to{" "}
      <span className="badge badge-secondary">{payment.to}</span>
    </div>
  );
};
