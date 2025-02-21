import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import MissionVisionSection from "./MissionVision";
import Form from "./Form";
import ContactUs from "./Contact";
import Footer from "./Footer";

const NoCodeEditor = () => {
  const [components, setComponents] = useState([
    { id: 1, name: "Navbar", component: <Navbar /> },
    { id: 2, name: "Home", component: <Home /> },
    { id: 3, name: "About", component: <About /> },
    { id: 4, name: "Services", component: <Services /> },
    { id: 5, name: "Mission & Vision", component: <MissionVisionSection /> },
    { id: 6, name: "Form", component: <Form /> },
    { id: 7, name: "Contact Us", component: <ContactUs /> },
    { id: 8, name: "Footer", component: <Footer /> },
  ]);

  const handleAddComponent = (component) => {
    setComponents([...components, component]);
  };

  return (
    <div className="no-code-editor">
      <div className="editor-sidebar">
        <h2>Add Components</h2>
        <button onClick={() => handleAddComponent({ id: 9, name: "New Component", component: <div>New Component</div> })}>
          Add New Component
        </button>
      </div>
      <div className="editor-preview">
        {components.map((comp) => (
          <div key={comp.id}>{comp.component}</div>
        ))}
      </div>
    </div>
  );
};

export default NoCodeEditor;
