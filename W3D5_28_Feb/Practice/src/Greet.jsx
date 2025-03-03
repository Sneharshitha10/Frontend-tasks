import React from 'react'

/* const Greet = props => {
    return(
        <div>
            <h1> Hello {props.name} a.k.a {props.heroName}</h1>
        </div>
    )
} */ 


//destructuring in function parameter itself
/* const Greet = ({name , heroName}) => {
    return(
        <div>
            <h1> Hello {name} a.k.a {heroName}</h1>
        </div>
    )
} */

//destructuring in function body
const Greet = props => {
    const {name, heroName} = props
    return(
        <div>
            <h1> Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}


export default Greet