import { ExpenseContainer } from "@/components/Expense";
import { PaymentDetails } from "@/components/Payment";

function App() {
  return (
    <div className="container px-4 sm:px-0 w-full sm:w-1/2 md:w-1/4 mx-auto">
      <ExpenseContainer />
      <PaymentDetails />
    </div>
  );
}

export default App;
