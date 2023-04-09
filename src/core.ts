/**
 * Individual expence
 * @property person Person who made the expence
 * @property amount Amount of money spent
 */
export interface IExpense {
  id: string;
  person: string;
  amount: number;
}

/**
 * Payment between two people
 * @property from Person who pays
 * @property to Person who receives
 * @property amount Amount of money to be paid
 */
export interface IPayment {
  id: string;
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
  const totalExpence = expences.reduce((acc, cur) => acc + cur.amount, 0);
  const perPersonExpence = totalExpence / expences.length;

  // negative amount means the person has to pay
  // positive amount means the person has to receive
  const sortedDebts = expences
    .map((expence) => ({
      person: expence.person,
      amount: expence.amount - perPersonExpence,
    }))
    .sort((a, b) => a.amount - b.amount);

  const payments: IPayment[] = [];

  let head = 0;
  let tail = sortedDebts.length - 1;

  while (head < tail) {
    const headExpense = sortedDebts[head];
    const tailExpense = sortedDebts[tail];
    const owned = Math.min(
      Math.abs(headExpense.amount),
      Math.abs(tailExpense.amount)
    );

    payments.push({
      id: crypto.randomUUID(),
      from: headExpense.person,
      to: tailExpense.person,
      amount: owned,
    });

    headExpense.amount += owned;
    tailExpense.amount -= owned;

    if (headExpense.amount === 0) {
      head++;
    }

    if (tailExpense.amount === 0) {
      tail--;
    }
  }

  return payments;
}
