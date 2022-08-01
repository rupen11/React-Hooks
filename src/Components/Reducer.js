import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useReducer } from 'react';

const init = (initialState = 0) => {
    return { count: initialState };
}

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return { count: state.count + 1 };
    }
    if (action.type === "DECREMENT") {
        if (state > 0) {
            return { count: state.count - 1 };
        }
        else {
            alert("0");
        }
    }
    return state;
}

const Reducer = ({ initialState }) => {

    const [state, dispatch] = useReducer(reducer, initialState, init);
    console.log(state);

    return (
        <>
            <div className="content">
                <IconButton aria-label="remove" className="btncontainer">
                    <RemoveIcon onClick={() => { dispatch({ type: "DECREMENT" }) }} />
                </IconButton>
                <p className="count">{state.count}</p>
                <IconButton aria-label="add" className="btncontainer">
                    <AddIcon onClick={() => { dispatch({ type: "INCREMENT" }) }} />
                </IconButton>
            </div>
        </>
    )
}

export default Reducer
