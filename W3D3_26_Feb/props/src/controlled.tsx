import React , {useRef} from 'react'

function UncontrolledComponent()
{
    const inputElementRef = useRef<any>(null);

    function handleSubmit()
    {
        alert('user name is : ${inputElementRef.current.value}');
    }

    return(
        <div className="App">
            <h2> Login form </h2>
            <form onSubmit = {handleSubmit}>
                <label>Name:</label>
                <br/>
                <input type="text" name="name" ref={inputElementRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UncontrolledComponent;