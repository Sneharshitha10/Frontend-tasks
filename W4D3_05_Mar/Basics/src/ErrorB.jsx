import React from 'react'

function ErrorB({name})
{
    if(name === 'joker')
    {
        throw new Error('not a good name !')
    }    
    return(
        <div>
            {name}
        </div>
    )
}

export default ErrorB