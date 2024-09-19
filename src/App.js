
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './sections/About';
import { Client } from './sections/Client';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Popular } from './sections/Popular';
import { Props } from './sections/Props';
import { Service } from './sections/Service';

function App() {
  return (
    <>
    <Header/>
      <Hero/>
      <About/>
      <Popular/>
      <Props/>
      
      <Service/>
     <Client/>
     <Contact/>
    
    <Footer/>
    

    </>
  );
}

export default App;
