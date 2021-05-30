let btnSignup = document.querySelector('.btnsignup').addEventListener("click", (e) => {
let email= document.querySelector('.email').value;
let password = document.querySelector('.password').value;
let username = document.querySelector('.username').value;

e.preventDefault();

      //signup verification
      
let formGlobal= document.querySelector(".signup__form");
    formGlobal.classList.remove("alert");
    //formGlobal.classList.add("hide");
      
let thomasmore= email.indexOf("@student.thomasmore.be");
      
    if (email === "" || thomasmore === -1) {
       let labelEmail=document.querySelector("#email");
       labelEmail.classList.add("alert");
       labelEmail.innerHTML="Email address: gebruik je Thomas More mailadres";
       setTimeout(()=>{
        labelEmail.classList.remove("alert");
        labelEmail.innerHTML="Email address";
    }, 4000)
    }

    if (username === "") {
        let labelUsername=document.querySelector("#username");
        labelUsername.classList.add("alert");
        labelUsername.innerHTML="Username: Vul dit veld in";
        setTimeout(()=>{
            labelUsername.classList.remove("alert");
            labelUsername.innerHTML="Username";
        }, 4000)
    }
     
    if (password === "") {
        let labelPassword=document.querySelector("#password");
        labelPassword.classList.add("alert");
        labelPassword.innerHTML="Password: Vul dit veld in";
        setTimeout(()=>{
            labelPassword.classList.remove("alert");
            labelPassword.innerHTML="Password";
        }, 4000)
    }

    else {    
        fetch('http://localhost:3000/users/signup', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "username": username,
                "password": password
            })
            }).then(response =>{
                return response.json();
            }).then(json =>{
                if(json.status === "error"){
                   let feedback = document.querySelector(".alert");
                   feedback.textContent= "Sign up failed, my friend. Please try again!";
                   feedback.classList.remove('hide');
                   setTimeout(()=>{
                    feedback.classList.add("hide");
                }, 4000)
                }

                else if (json.status === "success") {
                    //let feedback = document.querySelector(".alert");
                    //feedback.textContent= "Sign up complete!";
                    //feedback.classList.remove('hide');
                    
                    let token= json.data.token;
                    localStorage.setItem("token", token);
                    window.location.href="index.html";
                }
                });
            }
        });