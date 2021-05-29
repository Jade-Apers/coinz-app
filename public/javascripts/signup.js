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
        }

    else if (username === "") {
        let labelEmail=document.querySelector("#username");
        labelEmail.classList.add("alert");
        labelEmail.innerHTML="Username: Vul dit veld in";
    }
     
    else if (password === "") {
        let labelEmail=document.querySelector("#password");
        labelEmail.classList.add("alert");
        labelEmail.innerHTML="Password: Vul dit veld in";
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
                   feedback.textContent= "Sign up failed. Please try again!";
                   feedback.classList.remove('hide');
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