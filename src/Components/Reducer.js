import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        if (state > 0) {
            return state - 1;
        }
        else {
            alert("0");
        }
    }
    return state;
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div className="content">
                <IconButton aria-label="remove" className="btncontainer">
                    <RemoveIcon onClick={() => { dispatch({ type: "DECREMENT" }) }} />
                </IconButton>
                <p className="count">{state}</p>
                <IconButton aria-label="add" className="btncontainer">
                    <AddIcon onClick={() => { dispatch({ type: "INCREMENT" }) }} />
                </IconButton>
            </div>
        </>
    )
}

export default Reducer
