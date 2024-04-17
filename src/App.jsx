import About from "./pages/about"
import './App.css'
import Project from "./pages/project";
import arrow from './assets/arrow.png'
function App() {

  return (
    <div className="app">
      <About/>
      <div className="joinBlock">
        <h1>Join the Newsletter!</h1>
        <p>
          You’ll receive an email every once in a while about new products,
          courses, and videos!
        </p>
        <div className="formBlock">
       <input placeholder="name@example.com" value=''/>
       <button><img src={arrow} width='14' height='14' /></button>
        </div>
        <p>We’ll never share your details. See our Privacy Policy</p>
      </div>
     
    </div>
  )
}

export default App
