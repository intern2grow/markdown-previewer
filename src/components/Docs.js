import { useEffect, useState } from 'react';

const Docs = () => {
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchElements = () => {
      try {
        setIsLoading(true);
        fetch('http://localhost:4000/elements')
          .then(res => res.json())
          .then(data => setElements(data));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchElements();
  }, []);

  if (isLoading) return <p>Loading Data...</p>;
  return (
    <div className="elements">
      {elements.map(el => (
        <div className="element" key={el.name}>
          <h2>{el.name}</h2>
          <p>{el.description}</p>
          {el.examples.map((ex, index) => (
            <div className="example" key={ex.markdown}>
              <h3>-Markdown {index}</h3>
              <p>{ex.markdown}</p>
              <h3>-html</h3>
              <p>{ex.html}</p>
            </div>
          ))}
          {el.additional_examples.map(ex => (
            <div className="example" key={ex.name}>
              <h3>{ex.name}</h3>
              <p>{ex.html}</p>
              <h3>-Markdown </h3>
              <p>{ex.markdown}</p>
              <h3>-html</h3>
              <p>{ex.html}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Docs;
