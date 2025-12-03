// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Trainers from "./components/Trainers";
import Equipment from "./components/Equipment";
import Facility from "./components/Facility";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Trainers />
      <Equipment />
      <Facility />
      <Testimonials />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
