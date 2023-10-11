import React, {useState } from 'react'
import date from '../../json/date.json';
import './Docs.css';

function Docs() {
    const [ docs, setDocs] = useState(date)
return (
    <>
    {
        docs.elements.map((item)=>{
            return(
            <div className='Blockquotes' key={item.id}>
                <h1 className="headName" >
                    {item.name}
                </h1>
                <p>{item.description}</p>

            <div className="example-section">
            {item.examples.map((mark)=>
                <div className='examples-text'>
                    <h4>MarkDown:</h4> 
                    <p>{mark.markdown}</p>
                    <h4>html:</h4>
                    <p>{mark.html}</p>
                </div>
            )}
            </div>

            </div>
            )
        })
    }
    </>
)
}

export default Docs;