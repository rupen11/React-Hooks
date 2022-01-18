import React, { useState } from 'react';

const StateArray = () => {
    const data = [
        {
            id: 0,
            name: "Rupen",
            age: "21"
        },
        {
            id: 1,
            name: "Pratham",
            age: "26"
        },
        {
            id: 2,
            name: "Harry",
            age: "24"
        }
    ];

    const [myArray, setMyArray] = useState(data);

    const clearArray = () => {
        setMyArray([]);
    }

    const removelist = (id) => {
        setMyArray(myArray.filter((curretnlist) => {
            return curretnlist.id !== id
        }));
    }

    return (
        <>
            <div className="array_container">
                <div className="inner">
                    <div className="list">
                        <ul>
                            {
                                myArray.map((list) => {
                                    const { id, name, age } = list;
                                    return (
                                        <>
                                            <li key={id}>Name: {name} Age:{age} <button className="btnremove" onClick={() => removelist(id)}>remove</button></li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <button className="btnclear" onClick={clearArray}>clearArray</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StateArray
