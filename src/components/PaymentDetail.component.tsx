import { IPayment } from "@/core";

interface IPaymentDetailProps {
  payment: IPayment;
}

export const PaymentDetail = ({ payment }: IPaymentDetailProps) => {
  return (
    <div>
      <b>{payment.from}</b> pays <b>{payment.amount}</b> to <b>{payment.to}</b>
    </div>
  );
};
