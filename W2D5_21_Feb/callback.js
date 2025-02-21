//hello(goodbye);
hello(leave);

function hello(callback)
{
    console.log("hello !!!");
    callback();
}

function leave()
{
    console.log("leave !!!");
}

function goodbye()
{
    console.log("goodbye !!!");
}



sum(displayConsole,1,2);

function sum(callback,x,y)
{
     let result = x+y;
     callback(result);
}

function displayConsole(result)
{
    console.log(result);
}



