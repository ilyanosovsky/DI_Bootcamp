import data from '../dataJson.json';

const Three = () => {
    return(
        <>
            <h1>This is Exercise 3</h1>

            {data.Experiences.map((item, index) => {
                return (
                <div key={index}>
                    <img src={item.logo} alt={item.companyName} width="150px"></img><br />
                    <a href={item.url}>{item.companyName}</a>
                    {item.roles.map((role,index) => {
                        return (
                            <div key={index}>
                                <p><strong>{role.title}</strong></p>
                                <p>{role.startDate} {role.location}</p>
                                <p>{role.description}</p>
                            </div>
                        )
                    })}
                </div>
                )
            })}
        </>
    );
}

export default Three;