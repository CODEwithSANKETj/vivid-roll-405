import Navbar from "./Components/Navbar";
// import ProductDetails from "./Components/Product_details";
// import Home from "./Pages/Home";

import MainRoutes from "./Pages/MainRoutes";
import { Paymentpage } from "./Pages/PaymentPage";
// import Product_list from "./Pages/Product_list";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MainRoutes /> */}
      <Paymentpage />
    </div>
  );
}

export default App;
