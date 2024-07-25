// Import necessary CSS and Bootstrap for styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components for the different sections of the app
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Navigation bar at the top */}
      <NavBar />
      
      {/* Banner section */}
      <Banner />
      
      {/* Skills section */}
      <Skills />
      
      {/* Projects section */}
      <Projects />
      
      {/* Contact form section */}
      <Contact />
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
export default App;
