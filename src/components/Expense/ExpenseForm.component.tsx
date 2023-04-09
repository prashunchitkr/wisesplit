import { useExpenseStore } from "@/store";
import { SubmitHandler, useForm } from "react-hook-form";

interface IPaymentForm {
  person: string;
  amount: number;
}

export const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<IPaymentForm>();
  const { addExpense, reset } = useExpenseStore();

  const submit: SubmitHandler<IPaymentForm> = (data) => {
    addExpense({
      id: crypto.randomUUID(),
      person: data.person,
      amount: data.amount,
    });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="form-control w-full">
        <label className="label" htmlFor="person">
          <span className="label-text">Person</span>
        </label>
        <input
          className="input input-bordered input-accent w-full"
          id="person"
          {...register("person", {
            required: {
              value: true,
              message: "Person name is required",
            },
            minLength: {
              value: 1,
              message: "Minimum length is 1",
            },
          })}
        />
        {errors.person && (
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.person.message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control w-full">
        <label className="label" htmlFor="amount">
          <span className="label-text">Amount</span>
        </label>
        <input
          className="input input-bordered input-accent w-full"
          id="amount"
          type="number"
          min={0}
          {...register("amount", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Amount is required",
            },
            min: {
              value: 0,
              message: "Minimum amount is 0",
            },
          })}
        />
      </div>
      {errors.amount && (
        <label className="label">
          <span className="label-text-alt text-red-500">
            {errors.amount.message}
          </span>
        </label>
      )}

      <button className="btn btn-primary w-full mt-2" type="submit">
        Add
      </button>

      <button
        className="btn btn-warning w-full mt-2"
        type="button"
        onClick={reset}
      >
        Reset Expenses
      </button>
    </form>
  );
};
