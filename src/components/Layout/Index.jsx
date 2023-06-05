import { Outlet } from "react-router-dom";
import Footer from "../Footer/Index";
import Navbar from "../Navbar/Index";

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
