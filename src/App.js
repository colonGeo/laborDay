import logo from './logo.svg';
import './App.css';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </>
  );
}

export default App;
