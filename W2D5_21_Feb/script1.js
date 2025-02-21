console.log("Hello, Good Evening !!");

/* fetch("https://jsonplaceholder.typicode.com/users")
     .then(function(res) {
         return res.json();
      })
      .then(function(data) {
        console.log(data);
      });  */

/*    ///////////////////////// GET request  ////////////////////////   */      
/* fetch("https://jsonplaceholder.typicode.com/users")      
     .then(res => {
        if(res.ok) {console.log("GET request successful")}
        else { console.log("Get request unsuccessful")}
        return res
    }) 
     .then((res) => res.json())
     .then((data) => console.log(data));
     .catch(error => console.log(error)) */

/*    ///////////////////////// POST request  ////////////////////////   */        

const data = {
    title : "This is title",
    body : "This is post body",
    userId : 2
}     

/* fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type" : "application/json"
    }
}).then((res) => res.json())
  .then((data) => console.log(data))
  .catch(error => console.error("Error:", error)); */

/*    ///////////////////////// PUT request  ////////////////////////   */ 

/* fetch("https://jsonplaceholder.typicode.com/posts/2",{
    method : "PUT",
    body : JSON.stringify(data),
    headers : {
        "content-type" : "application/json"
    }
}).then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error)); */


/*    ///////////////////////// DELETE request  ////////////////////////   */ 

fetch("https://jsonplaceholder.typicode.com/posts/2",{
    method : "DELETE",
    //body : JSON.stringify(data),
    headers : {
        "content-type" : "application/json"
    }
}).then(res => {
    if(res.ok) {console.log("DELETE request successful")}
    else { console.log("DELETE request unsuccessful")}
    return res
  }).then(res => console.log(res))




