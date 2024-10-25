import Router from "@/Router/Router";
import ModalProvider from "@/Context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
}

export default App;
