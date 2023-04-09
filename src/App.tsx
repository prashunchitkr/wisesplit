import { ExpenseContainer } from "@/components/Expense";
import { PaymentDetails } from "@/components/Payment";

function App() {
  return (
    <div className="container w-1/4 mx-auto">
      <ExpenseContainer />
      <PaymentDetails />
    </div>
  );
}

export default App;
