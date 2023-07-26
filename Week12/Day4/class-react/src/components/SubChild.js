import {useContext} from 'react';
import { AppContext } from '../App';
import { ChildContext } from './Child';

const SubChild = (props) => {

    const {text, setText, a} = useContext(AppContext);
    const {name} = useContext(ChildContext);
    return (
        <>
            <h2>Sub Child {name} {a}</h2>
            Props: {text}
            <div>
                <button onClick={() => setText('Ivan Kozin is the Best')}>Change Text</button>
            </div>
        </>
    );
};

export default SubChild;
