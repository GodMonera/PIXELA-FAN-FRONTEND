import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import LiveStream from "./LiveStream";
import Forum from "./Forum";
import Login from "./Login";
import Register from "./Register";
import Store from "./Store";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/livestream" element={<LiveStream />} />
        <Route path="/feeling" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
