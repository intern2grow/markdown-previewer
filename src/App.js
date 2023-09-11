import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import useLocalStorage from "./components/useLocalStorage";
import Docs from "./components/Docs";


const App = () => {
  const [code, setCode] = useState("## Hello");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [hide, hidePreview] = useState(true);
  const [value, setValue] = useLocalStorage("myKey");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const openMD = () => {
    console.log(0);
    hidePreview(true);
  };

  const openPreview = () => {
    console.log(0);
    hidePreview(false);
  };
  const openModal = () => {
    setActiveContent(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
    setCode(value);
    setCompiled(marked.parse(value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button className="btn" onClick={openPreview}>Preview</button>
          <button className="btn" onClick={openModal}>Docs</button>
        </div>
         {isModalOpen && <Docs openModal={closeModal} />}
       
        {hide ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : (
          <div>
            <textarea value={compiled} />
            <div>
          <textarea value={activeContent || ""} readOnly />
        </div>
          </div>
          
        )}
      </div>
    </>
  );
};

export default App;
