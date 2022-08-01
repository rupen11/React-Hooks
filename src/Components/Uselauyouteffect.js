import React, { useLayoutEffect, useState } from 'react';

const Uselauyouteffect = () => {
    const [value, setValue] = useState('GFG');

    useLayoutEffect(() => {
        if (value === 'GFG') {
            // Changing the state
            setValue('GeeksForGeeks');
        }
        console.log('UseLayoutEffect is called with the value of ', value);
    }, [value]);

    return <div>
        <div>
            {value} is the greatest portal for geeks!
        </div>
        <button onClick={() => setValue("Rupen")}>Click</button>
    </div>;
};

export default Uselauyouteffect;
