import About from "./pages/about";
import Project from "./pages/project";
import Join from "./components/join";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Project/>}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
