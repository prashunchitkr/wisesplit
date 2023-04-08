import { ExpenseContainer } from "@/components/ExpenseContainer.component";
import { PaymentDetails } from "@/components/PaymentDetails.component";

function App() {
  return (
    <div>
      <ExpenseContainer />
      <PaymentDetails expenses={[]} />
    </div>
  );
}

export default App;
