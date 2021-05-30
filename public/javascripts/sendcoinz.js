
//send a coin with enter
const btnSendcoinz = document.querySelector(".btnsendcoinz").addEventListener("click", (e)=>{
  var user = document.querySelector(".form__to").value;
  const coinz = document.querySelector(".form__amountcoinz").value;
  const reason = document.querySelector(".form__reason").value;
  const message = document.querySelector(".form__message").value;
  
  fetch('http://localhost:3000/api/v1/transfers',{
    method:"post",
    'headers':{
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({
      "user" : user,
      "coinz": coinz,
      "reason" : reason,
      "message" : message
    })
  }).then(response => {
    return response.json();
  }).then(json => {
    if(json.status === "success"){
      let feedback = document.querySelector(".form__alert");
      feedback.textContent="Transaction succeeded";
      feedback.classList.remove('hide');
      window.location.href = "index.html"
    } else{
      let feedback = document.querySelector(".form__alert");
      feedback.textContent="Transaction failed";
      feedback.classList.remove('hide');
    }
  }).catch(err =>{
    console.log(err);
  })
});