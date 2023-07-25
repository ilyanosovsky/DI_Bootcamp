import {useState} from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    if(count > 5){
        throw new Error('Crashed....')
    }

    return(
        <>
            {count}
            <button onClick={()=>setCount(count + 1)}>Add</button>
        </>
    )
}

export default Counter;