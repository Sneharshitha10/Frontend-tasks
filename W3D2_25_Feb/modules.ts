export var x : string = "Sneha";

export function fun()
{
    console.log("hello function");
}

export class Myclass
{
    a:number;
    b:number;

    constructor(a:number,b:number)
    {
        this.a = a;
        this.b = b;
    }

    add=() => {return this.a + this.b};
}