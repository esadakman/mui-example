import PagiContextProvider from "./context/PaginateContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <PagiContextProvider>
      <AppRouter />
    </PagiContextProvider>
  );
}

export default App;
