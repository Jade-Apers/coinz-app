/*primus = Primus.connect(url, {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});*/


window.addEventListener("load", function(){
  let tokentje = localStorage.getItem("token");
  if(!tokentje){
      window.location.replace("login.html");
  }

  else {
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
      })
    }
    })