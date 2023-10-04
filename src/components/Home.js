import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { marked } from 'marked';
import { useLocalStorage } from '../hooks/useLocalStorage';
const Home = () => {
  const { setItem, getItem } = useLocalStorage('code');
  const item = getItem();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (item) {
      setCode(item);
    } else {
      setCode('## hello world');
    }
  }, [item]);

  const [_, setCompiled] = useOutletContext();

  const handleChange = e => {
    setCode(e.target.value);
    setCompiled(marked(e.target.value));
    setItem(e.target.value);
  };
  return (
    <div>
      <textarea onChange={handleChange} value={code} />
    </div>
  );
};

export default Home;
