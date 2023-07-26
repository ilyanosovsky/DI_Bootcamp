import SubChild from "./SubChild";
import {createContext, useState} from 'react';

export const ChildContext = createContext();

const Child = (props) => {
    const [name,setName] = useState('Bunny')
    return (
        <>
            <h2>Child</h2>
            <ChildContext.Provider value={{name}}>
                <SubChild />
            </ChildContext.Provider>
        </>
    );
};

export default Child;