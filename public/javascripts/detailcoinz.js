const { response } = require("express");

    const receiver = document.querySelector(".form__to");
    const coinz = document.querySelector(".form__amountcoinz");
    const reason = document.querySelector(".form__reason");
    const message = document.querySelector(".form__message");

    fetch('http://localhost:3000/api/v1/detailcoinz',{
    method:"get",
    'headers':{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(response =>{
    return response.json();
}).then(json =>{
    if(json.status === "Success"){
        
    }
})

