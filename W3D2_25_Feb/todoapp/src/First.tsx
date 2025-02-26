interface prop
{
    name : string;
}
function Greet(props:prop)
{
    return <h1> Hello {props.name}</h1>
}
export default Greet;