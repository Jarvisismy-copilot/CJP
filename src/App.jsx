
import "./App.css";
import About from './components/About';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Navbar />
      <Hero />
      <About />
    </div>
 
  )
}

export default App
