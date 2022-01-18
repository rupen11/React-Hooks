import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useEffect } from 'react';
import Usecustom from './Usecustom';

const Useeffect1 = () => {

    const [width, setWidth] = useState();
    const [count, setCount] = useState(0);

    // Custome
    Usecustom(count);

    useEffect(() => {
        console.log("world")
    }, []);

    const totalwidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", totalwidth);
        // cleanup function
        return () => {
            window.removeEventListener("resize", totalwidth);
        }
    });

    return (
        <>
            <div className="content">
                <IconButton aria-label="remove" className="btncontainer">
                    <RemoveIcon onClick={() => { count <= 0 ? alert("Minimum limit reached 0") : setCount(count - 1) }} />
                </IconButton>
                <p className="count">{count}</p>
                <IconButton aria-label="add" className="btncontainer">
                    <AddIcon onClick={() => setCount(count + 1)} />
                </IconButton>
            </div>
            <h1>Screen {width}</h1>
        </>
    )
}

export default Useeffect1
