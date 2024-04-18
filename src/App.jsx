import About from "./pages/about";
import Project from "./pages/project";
import Join from "./components/join";
import Header from "./components/header";
import Footer from "./components/footer";
import Hangman from "./pages/hangman/Hangman";
import step0 from "./assets/stepImages/0.jpg";
import step1 from "./assets/stepImages/1.jpg";
import step2 from "./assets/stepImages/2.jpg";
import step3 from "./assets/stepImages/3.jpg";
import step4 from "./assets/stepImages/4.jpg";
import step5 from "./assets/stepImages/5.jpg";
import step6 from "./assets/stepImages/6.jpg";
import Homepage from "./pages/home";
import Quiz from "./pages/quiz";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/games/hangman"
              element={
                <Hangman
                  maxWrong={6}
                  images={[step0, step1, step2, step3, step4, step5, step6]}
                />
              }
            />
            <Route path="/project" element={<Project />} />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Join />
                </>
              }
            />
            <Route path="/games/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
