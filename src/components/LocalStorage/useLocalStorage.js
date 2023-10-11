import { useState, useEffect } from "react";

function LocalStorage(key, initValue) {
    const getValue = localStorage.getItem(key) || initValue;

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default LocalStorage;