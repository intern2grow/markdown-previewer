import React from 'react'
import data from '../data/data.json'

function DocsComponent() {
    
  return (
    <div className='docs'>
        {
            data.elements.map((e)=>(
                <div className='header'key={e.id}>
                    <h1>{e.name}</h1>
                    <p>{e.description}</p>
                        {
                            e.examples.map((e, index)=>(
                                <div className='example'key={index}>
                                    <h4><span>-</span> markdown</h4> 
                                    <p>{e.markdown}</p>
                                    <h4><span>-</span> html</h4>
                                    <p>{e.html}</p>
                                </div>

                            ))
                        }
                     
                </div>
            ))
        }

    </div>
  )
}

export default DocsComponent