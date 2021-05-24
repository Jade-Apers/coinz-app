var btnLogin = document.querySelector(".btnlogin").addEventListener("click", (e) => {
        var username= document.querySelector('.username').value;
        var password = document.querySelector('.password').value;
        
    fetch('http://localhost:3000/users/login', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then(response =>{
        return response.json();
    }).then(json =>{
        if(json.status === "success"){
            let token= json.data.token;
            localStorage.setItem("token", token);
            window.location.href="index.html";

        } else{
            let feedback = document.querySelector(".alert");
            feedback.textContent="Login failed buddy.";
            feedback.classList.remove('hide');
            window.location.href="login.html";
        }
    })
});




// login verification
/*

let formLogin = document.querySelector(".login__fields");
formLogin= addEventListener("submit", checkLogin);

function checkLogin(e) {
    let hasErrors = false;
    document.querySelector(".login__form").classList.remove("alert");
    document.querySelector(".login__form").classList.add("hide");

    let txtEmail = document.querySelector("#mailadres");
    let thomasmore= txtEmail.value.indexOf("@student.thomasmore.be");

    if (txtEmail.value === "" || thomasmore === -1) {
        let emailError= document.querySelector(".login__form"); 
        emailError.classList.add("alert");
        hasErrors =  true;
    }

    if (hasErrors === false) {
      checkLogin();
    }
  
    e.preventDefault();
  }

  function loginChecked() {

      document.querySelector(".login__form").classList.add("hide");

  }*/