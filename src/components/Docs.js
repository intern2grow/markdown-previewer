import React, {useState } from 'react'
import data from './data.json'
const Docs = () => {
    const[docs, setDocs]=useState(data);

   //const fetchDocs= async()=>{
        //  const resp=await fetch("http://localhost:3009/basic_syntax");
        //  const data = await resp.json();
        //          console.log(data);
        //        return setDocs(data);
    //}
  
  return (
    <div className="docs">
        {docs.basic_syntax.map((item,index)=>(
          <div>
            <h1 className="name" key={index}>{item.name}</h1>
            <p>{item.description}</p>
            <div className="example-section">
             {item.examples.map((mark)=>
             <>
            <h4>MarkDown:</h4> 

             <p>{mark.markdown}</p>
             <h4>html:</h4>
             <p>{mark.html}</p>

             </>
             )}

            </div>
            </div>
        ))}
    
    </div>
  )
}

export default Docs