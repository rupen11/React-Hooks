import React, { useRef } from 'react'
import { useState } from 'react';

const Ref = () => {
    const name = useRef(null);
    const [status, setStatus] = useState(false);
    const sendName = (e) => {
        e.preventDefault();
        const sname = name.current.value;
        { sname === "" ? alert("Field must be a container some value") : setStatus(true) }
    }
    return (
        <>
            <div className="name_container">
                <form method="post" className="mynameform" onSubmit={sendName}>
                    <input type="text" placeholder="Name" ref={name} />
                    <button className="btn-warning btn">Submit</button>
                </form>
                <h1>{status ? `Hellow, ${name.current.value}` : ""}</h1>
            </div>
        </>
    )
}

export default Ref
