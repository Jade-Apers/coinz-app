/*primus = Primus.connect(url, {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});*/


//load transfers met een get request zoals bij  leaderboard
fetch('http://localhost:3000/api/v1/transfers',{
  method:"get",
  'headers':{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')


}})

//send a coin with enter
const btnSendcoinz = document.querySelector(".btnsendcoinz").addEventListener("click", (e)=>{
  const receiver = document.querySelector(".form__to").value;
  const coinz = document.querySelector(".form__amountcoinz").value;
  const reason = document.querySelector(".form__reason").value;
  const message = document.querySelector(".form__message").value;
  
  fetch('http://localhost:3000/api/v1/transfers',{
    method:"post",
    'headers':{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({
      "receiver" : receiver,
      "coinz": coinz,
      "reason" : reason,
      "message" : message
    })
  }).then(response => {
    return response.json();
  }).then(json => {
    console.log(json.status);

    if(json.status === "success"){
      let transfer = 
      `<div class="history">
      <div class="history__received">
      <img src="/src/images/NV6A6972Enjoy.jpg" alt="profile picture" height=65px class="history__profilepic"></a>
      <a href="receivecoinz.html"> <p>Received ${json.data.transfer.coinz} coinz from ${json.data.transfer.sender} </p></a>
      </div>
      <div class="history">`;
      document.querySelector(".history").insertAdjacentHTML('afterend', transfer);
    } 
    else{
      let feedback = document.querySelector(".form__alert");
      feedback.textContent="Transaction failed";
      feedback.classList.remove('hide');
    }

  }).catch(err =>{
    console.log(err);
  })

  e.preventDefault();
});
