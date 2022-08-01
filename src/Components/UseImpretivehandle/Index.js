import React, { useRef } from 'react';
import Input from './Input';

const Index = () => {
    const inputRef = useRef(null);
    return (
        <div>
            <Input onFocus={() => inputRef.current.focus()}
                ref={inputRef} />
        </div>
    );
};

export default Index;
