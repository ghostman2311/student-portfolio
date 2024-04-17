import About from "./pages/about"
import Project from "./pages/project";
import Join from "./components/join";
import './App.css'
import Header from "./components/header";
import Footer from "./components/footer";


function App() {

  return (
    <div className="app">
      <Header/>
      <main className="content">
      <About/>
     <Join/>
     </main>
     <Footer/>
    </div>
  )
}

export default App
