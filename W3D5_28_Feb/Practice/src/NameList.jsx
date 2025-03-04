import React from 'react'
import Person from './Person'

function NameList()
{
    //const names = ['sneha','karthik','Sneharshitha']

    const persons = [
        {
            id : 1,
            name : 'Sneha',
            age : 22
        },
        {
            id : 2,
            name : 'Sneharshitha',
            age : 22
        },
        {
            id : 3,
            name : 'Karthik',
            age : 18
        }
    ]
    //const NameList = names.map(name => <h2> {name } </h2>)
    const personList = persons.map(person => <Person person = {person} /> )
    return(
        <div>
          { /* <h2>{ names[0] }</h2>
            <h2> { names[1] } </h2>
            <h2> { names[2] } </h2> */ }

         { /*  {
                names.map(name => <h2> {name } </h2>)
            } */ }

           {personList}


        </div>
    )
}

export default NameList