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

import ConventionalLoanPage from "./components/loanPages/ConventionalLoanPage.jsx"
import FHALoanPage from "./components/loanPages/FHALoanPage.jsx"
import VALoanPage from "./components/loanPages/VALoanPage.jsx"
import USDALoanPage from "./components/loanPages/USDALoanPage.jsx"
import JumboLoansSection from "./components/loanPages/JumboLoansSection.jsx";
import NonQMBankStatementSection from "./components/loanPages/NonQMBankStatementSection.jsx";
import HomeEquitySection from "./components/loanPages/HomeEquitySection.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyingInIllinoisPage from "./components/BuyingInIllinoisPage.jsx";
import FirstTimeBuyerRoadmapPage from "./components/FirstTimeBuyerRoadmapPage.jsx";
import RefinanceDecisionGuidePage from "./components/RefinanceDecisionGuidePage.jsx";
// import JumboLoanPage from "./components/loanPages/JumboLoanPage.jsx"



function App() {
  const [openTool, setOpenTool] = useState(null);
  const closeModal = () => setOpenTool(null);

  const [openLoan, setOpenLoan] = useState(null);
  const closeLoanModal = () => setOpenLoan(null);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />

        <LoanPrograms onOpenLoan={setOpenLoan} />

        <Tools onOpenTool={setOpenTool} />

        <Routes>
          <Route path="/resources/buying-in-illinois" element={<BuyingInIllinoisPage />} />
          <Route path="/resources/first-time-buyer-roadmap" element={<FirstTimeBuyerRoadmapPage />} />
          <Route path="/resources/refinance-decision-guide" element={<RefinanceDecisionGuidePage />} />
        </Routes>

        <Resources />
        <ContactForm />
      </main>

      <Footer />

      {/* --- MODALS --- */}
      {openTool && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>

            {openTool === "Affordability" && <AffordabilityCalculator />}
            {openTool === "Refinance" && <RefinanceSavings />}
            {openTool === "Rate" && <RateScenario />}
            {openTool === "Checklist" && <DocumentChecklist />}
          </div>
        </div>
      )}

      {openLoan && (
        <div className="modal-backdrop" onClick={closeLoanModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeLoanModal}>✖</button>

            {openLoan === "CONVENTIONAL" && <ConventionalLoanPage />}
            {openLoan === "FHA" && <FHALoanPage />}
            {openLoan === "VA" && <VALoanPage />}
            {openLoan === "USDA" && <USDALoanPage />}
            {openLoan === "JUMBO" && <JumboLoansSection />}
            {openLoan === "NON_QM" && <NonQMBankStatementSection />}
            {openLoan === "HOME_EQUITY" && <HomeEquitySection />}
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;




