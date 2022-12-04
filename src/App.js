import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import {Toaster} from "react-hot-toast"
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
        <Router>
        <Header />
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/cart" element={<Cart />} />
        </Routes>
        <Toaster />
        </Router>
    </div>
  );
}

export default App;
