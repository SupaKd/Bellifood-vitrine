import { useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./hooks/ScrollToTop"; 

function App() {
  const location = useLocation();

  function handlePathname() {
    return location.pathname === "/"
      ? "home"
      : location.pathname.slice(1);
  }

  return (
    <div className="App">
      <Header />

      <ScrollToTop />

      <main className="container" id={handlePathname()}>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;

