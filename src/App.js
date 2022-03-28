import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Movie from "./components/Movie.js";
import Home from "./routes/Home.js";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/Movie/:id" element={<Detail />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
