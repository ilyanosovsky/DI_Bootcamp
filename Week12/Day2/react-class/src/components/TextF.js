import {useState, useEffect} from 'react';


const TestF = (props) => {
    const [title,setTitle] = useState('Text Function');
    const [name, setName] = useState('What a name');

    useEffect (()=> {
        console.log(title, name);
    }, []);

    useEffect(()=>{
        console.log(title);
        return () => {
            console.log('unmount');
        }
    }, [title])

    return(
        <>
            <h1>{title}</h1>
            <input onChange={(e) => setTitle(e.target.value)} />
            <h1>{name}</h1>
            <input onChange={(e) => setName(e.target.value)} />
        </>
    )
};

export default TestF;