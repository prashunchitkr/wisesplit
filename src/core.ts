/**
 * Individual expence
 * @property person Person who made the expence
 * @property price Amount of money spent
 */
export interface IExpense {
  person: string;
  price: number;
}

/**
 * Payment between two people
 * @property from Person who pays
 * @property to Person who receives
 * @property amount Amount of money to be paid
 */
export interface IPayment {
  from: string;
  to: string;
  amount: number;
}

/**
 * Calculates the minimum number of payments required to settle all the debts.
 * @param expences List of individual expences
 * @returns Array of payments
 */
export function splitCost(expences: IExpense[]) {
  const sortedExpenses = expences.sort((a, b) => a.price - b.price);
  const payments: IPayment[] = [];

  let head = 0;
  let tail = sortedExpenses.length - 1;

  while (head !== tail) {
    const headExpense = sortedExpenses[head];
    const tailExpense = sortedExpenses[tail];
    const amount = Math.min(headExpense.price, -tailExpense.price);

    payments.push({
      from: headExpense.person,
      to: tailExpense.person,
      amount,
    });

    headExpense.price -= amount;
    tailExpense.price += amount;

    if (headExpense.price === 0) {
      head++;
    }

    if (tailExpense.price === 0) {
      tail--;
    }
  }

  return payments;
}
