import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoute from "./routes/AppRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoute />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
