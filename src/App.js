import React, { useState } from "react";
import { marked } from "marked";
import LocalStorage from "./components/LocalStorage/useLocalStorage";
import Docs from "./components/Docs/Docs";
import "./App.css";

const App = () => {
  const [code, setCode] = useState("## Hello");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [hide, hidePreview] = useState(true);

  const [value, setValue] = LocalStorage("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const openMD = () => {
    hidePreview(true);
  };

  const openPreview = () => {
    hidePreview(false);
  };

  const openDocs = () => {
    setActiveContent(null);
    setIsModalOpen(true);
  };

  const closeDocs = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setCode(value);
    setValue(e.target.value);
    setCompiled(marked.parse(value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">

        <div className="btns">
          <button onClick={openMD} className="btn">MarkDown</button>
          <button className="btn" onClick={openPreview}>Preview</button>
          <button className="btn" onClick={openDocs}>Docs</button>
        </div>

        {isModalOpen && <Docs openDocs={closeDocs} />}

        {
        hide ? (<div><textarea onChange={handleChange} value={code} /></div>) 
          :
          (<div><textarea value={compiled}/>
          <div>
            <textarea value={activeContent || ""} readOnly />
          </div>
          </div>)
        }
      </div>
    </>
  );
};

export default App;