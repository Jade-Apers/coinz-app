
//send a coin with enter
const btnSendcoinz = document.querySelector(".btnsendcoinz").addEventListener("click", (e)=>{
  const receiver = document.querySelector(".form__to").value;
  const coinz = document.querySelector(".form__amountcoinz").value;
  const reason = document.querySelector(".form__reason").value;
  const message = document.querySelector(".form__message").value;
  
  fetch('/api/v1/transfers',{
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
  }).then(result => {
    return result.json();
  }).then(json => {
    if(json.status === "success"){
      let transfer = `<div class="history__received">
      <img src="/src/images/NV6A6972Enjoy.jpg" alt="profile picture" height=65px class="history__profilepic"></a>
      <a href="receivecoinz.html"> <p>Received ${json.data.coinzapp.coinzs} coinz from ${json.data.users.username}</p></a>
      </div>`
      document.querySelector(".history").insertAdjacentHTML('afterend', transfer);
    } else{
      let feedback = document.querySelector(".form__alert");
      feedback.textContent="Transaction failed";
      feedback.classList.remove('hide');
    }
  }).catch(err =>{
    console.log(err);
  })

  e.preventDefault();
});
