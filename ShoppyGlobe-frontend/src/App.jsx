import { Outlet } from "react-router-dom";
import Header from "./components/headerComponents/Header";
import Footer from "./components/Footer";
import login from "../login";

function App() {
  return (
    <section className="min-h-screen container mx-auto flex flex-col">
      <Header />
      <login />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
export default App;
