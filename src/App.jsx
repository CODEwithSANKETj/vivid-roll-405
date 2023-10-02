import AdminMainNavbar from "./Admin/AdminMainNavbar";
import Navbar from "./Components/Navbar";
// import ProductDetails from "./Components/Product_details";
// import Home from "./Pages/Home";

import MainRoutes from "./Pages/MainRoutes";
// import Product_list from "./Pages/Product_list";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AdminMainNavbar />  we have to conditionally render it if user is Admin */}
      <MainRoutes />
    </div>
  );
}

export default App;
