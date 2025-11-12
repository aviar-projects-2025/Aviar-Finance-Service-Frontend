import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LoanPrograms from "./components/LoanPrograms.jsx";
import Tools from "./components/Tools.jsx";
import Resources from "./components/Resources.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LoanPrograms />
        <Tools />
        <Resources />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
