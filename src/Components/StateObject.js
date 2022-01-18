import React, { useState } from 'react';

const StateObject = () => {
    const [myObject, setMyObject] = useState({
        name: "Rupen",
        age: "21",
        degree: "BE"
    });

    const change = () => {
        setMyObject({ ...myObject, name: "RJ" });
    }
    return (
        <>
            <div className="object_container">
                <div className="list">
                    <h4>Name: {myObject.name}</h4>
                    <h4>Age: {myObject.age}</h4>
                    <h4>Degree: {myObject.degree}</h4>
                    <button className="btnclear" onClick={change}>Change</button>
                </div>
            </div>
        </>
    )
}

export default StateObject
