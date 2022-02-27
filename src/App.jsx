import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Results } from "./components/results/results";
import { Home } from "./components/home/home";
import { Hotel } from "./components/hotels/hotel_details";
import { SignIn_page } from "./components/login/login";
import { Register } from "./components/register/register";
import { Payment } from "./components/payments/Payment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/hotel-detail" element={<Hotel />}></Route>
        <Route path="/login" element={<SignIn_page />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
