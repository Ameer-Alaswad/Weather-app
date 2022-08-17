import Form from "./components/form/Form";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Form />
      </QueryClientProvider>
    </div>
  );
}

export default App;
