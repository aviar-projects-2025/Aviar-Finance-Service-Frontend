import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LoanPrograms from "./components/LoanPrograms.jsx";
import Tools from "./components/Tools.jsx";
import Resources from "./components/Resources.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

import AffordabilityCalculator from "./components/tools/AffordabilityCalculator";
import RateScenario from "./components/tools/RateScenario";
import RefinanceSavings from "./components/tools/RefinanceSavings";
import DocumentChecklist from "./components/tools/DocumentChecklist";



function App() {

  const [openTool, setOpenTool] = useState(null); // <-- NEW

  const closeModal = () => setOpenTool(null);



  return (
    <>
      <Header />
      <main>
        <Hero />
        <LoanPrograms />

        {/* Pass setter to Tools */}
        <Tools onOpenTool={setOpenTool} />


        <Resources />
        <ContactForm />
      </main>
      <Footer />


      {/* ---------- MODAL ---------- */}
      {openTool && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>✖</button>

            {openTool === "Affordability" && <AffordabilityCalculator />}
            {openTool === "Refinance" && <RefinanceSavings />}
            {openTool === "Rate" && <RateScenario />}
            {openTool === "Checklist" && <DocumentChecklist />}
          </div>
        </div>
      )}
    </>
  );
}

export default App;




