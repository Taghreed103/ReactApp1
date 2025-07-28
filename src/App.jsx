import './App.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { BrowserRouter,Routes , Route} from 'react-router-dom';
import Layout from './Components/Layout';


  function App() {

  return (
    <>
 <BrowserRouter basename="/ReactApp1">

        <Routes>


        <Route path="/" element={<Layout />} >
                 <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
         </Route>


         
         </Routes>

        {/* Other components or routes can be added here */}
      </BrowserRouter   >
     
    </>
  )
}

export default App
