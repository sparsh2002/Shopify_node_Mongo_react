import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./Pages/Customers/CustomerList";
import ViewCustomerById from "./Pages/Customers/ViewCustomerById";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import OrderList from "./Pages/Orders/OrderList";
import ViewOrderById from "./Pages/Orders/ViewOrderById";
import ProductList from "./Pages/Products/ProductList";
import ProductView from "./Pages/Products/ProductView";
import SignUp from "./Pages/SignUp";

// import {createAppBridge} from '@shopify/app-bridge-core';
// import {Provider as AppBridgeProvider} from '@shopify/app-bridge-react';


// console.log(process.env.REACT_APP_API_KEY)
// console.log(process.env.REACT_APP_STORE_DOMAIN)

// const appBridge = createAppBridge({
//   apiKey: process.env.REACT_APP_API_KEY,
//   shopOrigin: process.env.REACT_APP_STORE_DOMAIN,
//   forceRedirect:true,
// });

function App() {
  // const appBridge = createAppBridge({
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   shopOrigin: process.env.REACT_APP_STORE_DOMAIN,
  // });
  return (
    // <AppBridgeProvider appBridge={appBridge}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Product Routes */}
        <Route path='/products/list' element={<ProductList />} />
        <Route path='/products/view/:id' element={<ProductView />} />

        {/* Customer Routes */}

        <Route path='/customers/list' element={<CustomerList />} />
        <Route path='/customers/view/:id' element={<ViewCustomerById />} />

        {/* Order Routes */}

        <Route path='/orders/view/:id' element={<ViewOrderById />} />
        <Route path='/orders/list' element={<OrderList />} />
      </Routes>
    </BrowserRouter>
    // </AppBridgeProvider>
  );
}

export default App;
