import data from '../dataJson.json';

const One = () => {
    return(
        <>
            <h1>This is Exercise 1</h1>

            {data.SocialMedias.map((link, index) => {
                return <li key={index}>{link}</li> 
            })}
        </>
    );
}

export default One;