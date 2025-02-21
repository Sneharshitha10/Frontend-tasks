/* ************  Synchronous Example **************** */
/* console.log("Sneharshitha");
console.log("Karthikeya");
console.log("Alekhya");
console.log("Shivamani"); */


/* ************  Asynchronous Example **************** */
/* console.log("Sneharshitha");
setTimeout(() => {
    console.log("Karthikeya");
    console.log("Alekhya");
},1000);
console.log("Shivamani"); */


/* ************  Synchronous Example **************** */
/* console.log("Sneharshitha");
console.log("Karthikeya");
console.log("Alekhya");
calculate();
console.log("Shivamani");

function calculate()
{
    let sum=0;
    for(let i=0;i<10000;i++)
    {
        sum = sum+i;
    }
    console.log("Sum is " , sum);
}  */

/* ************  Asynchronous Example **************** */
/* console.log("Sneharshitha");
console.log("Karthikeya");
console.log("Alekhya");
setTimeout(() => {
    calculate()
},1000);
console.log("Shivamani");

function calculate()
{
    let sum=0;
    for(let i=0;i<10000;i++)
    {
        sum = sum+i;
    }
    console.log("Sum is " , sum);
} */



/* ************  Callback Example **************** */

/* a(10,function(result1,error){
    if(!error)
    {
        b(result1,function(result2,error){
          if(!error)
          {
            c(result2,function(result3,error){
                if(!error)
                    console.log("result " + result3);
            })
          }
        })
    }
})
function a(value,callback)
{
    callback(value + 10,false);
}
function b(value,callback)
{
    callback(value + 10,false);
}
function c(value,callback)
{
    callback(value + 10,false);
}    */


/* ************  Promises Example **************** */
/* const p1 = Promise.resolve("Sneharshitha");
const p2 = 1000;
const p3 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000,'ok');
});
const p4 = Promise.reject("rejected");

Promise.all([p1,p2,p3]).then((values) => console.log(values));
Promise.race([p2,p1,p3]).then((values) => console.log(values));
Promise.allSettled([p1,p2,p3,p4]).then((values) => console.log(values));
Promise.any([p1,p2,p3]).then((values) => console.log(values));  */


/* ************  Async/Await Example **************** */
function step1(value,error)
{
    return new Promise((resolve,reject) => {
        if(!error)
            resolve(value + 10);
        else
            reject("something wrong");
    });
}
async function result()
{
    let result1 = await step1(10,false);
    return result1;
}
async function result2()
{
    let result = await Promise.resolve(5);
    return result;
}

result().then((result) => console.log(result));






