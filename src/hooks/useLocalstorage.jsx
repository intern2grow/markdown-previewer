import React, { useState } from 'react'

function useLocalstorage(key,initValue) {
    const getValue = localStorage.getItem(key) || initValue;
    const [value, setValue] = useState(getValue)

    const updateValue = (newValue)=>{
        setValue(newValue)
        localStorage.setItem(key, newValue);
    }
    
  return (
    [value,updateValue]
  )
}

export default useLocalstorage