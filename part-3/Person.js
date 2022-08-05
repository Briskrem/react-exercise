const Person = (prop) =>{

    let instructions;
    let Name;

    const age = prop.age
    const name = prop.name
    if(age < 20){
        instructions = 'you must be 18'
    }else{
        instructions = 'please go vote'
    }

    if(prop.name.length > 8){
        Name = name.slice(0,5)
        console.log
        console.log(Name)
    }
    return (
        <div>
            
            <p>Learn some info about this person</p>
            <p>{prop.name}</p>
            <p>{prop.age}</p>
            <h3>{instructions}</h3>
            <p>length of name :{Name}</p>
            <ul>{prop.hobbies.map(h => <li>{h}</li>)}</ul>

        </div>
        
    )
}