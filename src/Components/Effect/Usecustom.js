import React, { useEffect } from 'react'

const Usecustom = (count) => {
    useEffect(() => {
        console.log("ok");
        document.title = `${count}`;
    }, [count]);
}

export default Usecustom
