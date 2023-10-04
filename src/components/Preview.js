import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { marked } from 'marked';
const Preview = () => {
  const { getItem } = useLocalStorage('code');
  const [compiled] = useOutletContext();
  const code = getItem();

  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: code ? marked(code) : compiled }}
      style={{ color: 'white !important' }}
    ></div>
  );
};

export default Preview;
