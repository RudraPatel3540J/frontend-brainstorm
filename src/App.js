import React from "react";
import ProgressBar from "./components/ProgressBar";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { interviewData } from "./data/interviewData";

function App() {
  return (
    <>
      <ProgressBar />
      <div className="container">
        <div className="header">
          <h1>🚀 Interview Questions</h1>
          <p>Complete Guide with Examples & Best Practices</p>
        </div>

        <Navigation />

        <Section sectionData={interviewData.fundamentals} id="fundamentals" />
        <Section sectionData={interviewData.react} id="react" />
        <Section sectionData={interviewData.nextjs} id="nextjs" />
        <Section sectionData={interviewData.redux} id="redux" />
        <Section sectionData={interviewData.systemDesign} id="systemDesign" />
        <Section sectionData={interviewData.coding} id="coding" />
      </div>
      <Footer />
    </>
  );
}

export default App;
