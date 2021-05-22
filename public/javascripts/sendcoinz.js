//send a coin with enter
let input = document.querySelector(".btnsendcoinz");
input.addEventListener("click", (e)=>{
  let text = input.value;
  fetch('http://localhost:3000/api/v1/transfers',{
    method:"post",
    'headers':{
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      "text":text
    })
  })
  .then(result => {
    return result.json();
  }).then(json => {
   ` <a> <div class="history">
    <div class="history__received">
    <a href="receivecoinz.html"><img src="/src/images/NV6A6972Enjoy.jpg" alt="profile picture" height=65px class="history__profilepic"></a>
    <a href="receivecoinz.html"> <p>Received  ${json.data.coinzs.coinz} coinz from ${json.data.users.username} </p> </a>
    </div>`;
    document.querySelector(".history").insertAdjacentHTML('afterend', transfer);
  }).catch(err =>{
    console.log(err);
  })

  e.preventDefault();
});
