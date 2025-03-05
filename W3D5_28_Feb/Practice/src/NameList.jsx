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

    const names = ['Bruce', 'clark' , 'diana']
    //const NameList = names.map(name => <h2> {name } </h2>)
    //const personList = persons.map(person => <Person key = {person.id} person = {person} /> )
    const namesList = names.map((name,index) => <h2 key = {index}>{index} {name}</h2>)
    return(
        <div>
          { /* <h2>{ names[0] }</h2>
            <h2> { names[1] } </h2>
            <h2> { names[2] } </h2> */ }

         { /*  {
                names.map(name => <h2> {name } </h2>)
            } */ }

           {namesList}


        </div>
    )
}

export default NameList