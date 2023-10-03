
import './App.css';
import { Nav } from './Components/NavBar/Nav';
import { AllRoutes } from './Pages/AllRoutes';
import { Contact } from './Pages/Contact';
import { Footer } from './Pages/Footer';

function App() {
  return (
    <>
      <Nav />
      {/* <AllRoutes /> */}
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
