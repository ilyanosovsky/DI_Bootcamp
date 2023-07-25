import data from '../dataJson.json';

const Two = () => {
    return(
        <>
            <h1>This is Exercise 2</h1>

            {data.Skills.map((item,index) => {
                return (
                <ul key={index}>
                    <strong>{item.Area}</strong>
                    {item.SkillSet.map((item, index) => {
                        return <li key={index}>{item.Name}</li>
                    })}
                </ul>
                )
            })}
        </>
    );
}

export default Two;