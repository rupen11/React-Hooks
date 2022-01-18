import React, { useState } from 'react'

const Sortcircuit = () => {
    const [primary, setPrimary] = useState("Rupen");
    return (
        <>
            <h1>1 {"Rupen" || "RJ"}</h1>
            <h1>2 {"Rupen" && "RJ"}</h1>
            <h1>3 {primary || "RJ"}</h1>
            <h1>4 {primary && "RJ"}</h1>
        </>
    )
}

export default Sortcircuit
