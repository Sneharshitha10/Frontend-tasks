/* ****************** GET request **************************** */
/* axios.get("https://reqres.in/api/users?page=2")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

function handleResult(data)
{
    console.log(data);
}    */ 


/* ****************** POST request **************************** */
/* axios.post("https://reqres.in/api/users",{
        "name": "john",
        "job": "developer"
}).then((res) => console.log(res))
  .catch((err) => console.log(err)); */


/* ****************** PUT request **************************** */  
/* axios.put("https://reqres.in/api/users/3",{
    "name": "Amit",
    "job": "cricketer"
}).then((res) => console.log(res))
.catch((err) => console.log(err)); */


/* ****************** DELETE request **************************** */  
axios.delete("https://reqres.in/api/users/3")
     .then((res) => console.log(res))
     .catch((err) => console.log(err));