/************************ public  *************************/

/* class Computer
{
    public name : string ;
    public price : number;

    constructor(name: string , price : number)
    {
        this.name = name;
        this.price = price;
    }
}
let comp = new Computer("Dell",10000);
console.log(comp.name);
console.log(comp.price);  */


/************************ private  *************************/

/* class Computer
{
    private name : string ;
    private price : number;

    constructor(name: string , price : number)
    {
        this.name = name;
        this.price = price;
    }
}
let comp = new Computer("Dell",10000);
console.log(comp.name);
console.log(comp.price); */



/************************ protected  *************************/

class Computer
{
    protected name : string ;
    protected price : number;

    constructor(name: string , price : number)
    {
        this.name = name;
        this.price = price;
    }
}
let comp = new Computer("Dell",10000);
//console.log(comp.name);
//console.log(comp.price); 