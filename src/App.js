import './App.css';
import React, {useEffect, useState} from 'react';
import {marked} from 'marked'
import DocsComponent from './components/DocsComponent';
import useLocalstorage from './hooks/useLocalstorage';

const App = () => {

  const [code, setCode] = useLocalstorage('code' ,'## Hello')
  const [compiled, setCompiled] = useState(() => {
    const storedCode = localStorage.getItem('code');
    return storedCode ? marked.parse(storedCode) : '<h2 id="hello">Hello</h2>';
  });

  const [mode, setMode] = useState('MarkDown');
    
  const switchMode = (newMode) => {
    setMode(newMode);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  }

  useEffect(() => {
    setCompiled(marked(code));
  }, [code]);

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={() => switchMode('MarkDown')}  className={`${mode === 'MarkDown'? 'active' : ''}`} >
            MarkDown
          </button>
          <button onClick={() => switchMode('Preview')}  className={`${mode === 'Preview'? 'active' : ''}`}>
            Preview
          </button>
          <button onClick={() => switchMode('Docs')}  className={`${mode === 'Docs'? 'active' : ''}`} >
            Docs
          </button>
        </div>
        
        {mode === 'MarkDown' &&(
          <div>
            <textarea onChange={handleChange} value={code}  />
          </div>
        )}
        
        {mode === 'Preview' && (
          <div>
            <textarea value={compiled} readOnly/>
          </div>
        )
        }
        {mode === 'Docs' && <DocsComponent/>}
        
      </div>
    </>
  )
}


export default App;
