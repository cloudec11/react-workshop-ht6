import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
// import Navigation from './components/Navigation';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
