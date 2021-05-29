let btnLogin = document.querySelector(".btnlogin").addEventListener("click", (e) => {
let username= document.querySelector('.username').value;
let password = document.querySelector('.password').value;

e.preventDefault();

let formGlobal= document.querySelector(".login__form");
    formGlobal.classList.remove("alert");

    if (username === "") {
        let labelUsername=document.querySelector("#login__username");
        labelUsername.classList.add("alert");
        labelUsername.innerHTML="Username: Vul dit veld in";
        setTimeout(()=>{
            labelUsername.classList.remove("alert");
            labelUsername.innerHTML="Username";
        }, 4000)
    }
     
    if (password === "") {
        let labelPassword=document.querySelector("#login__password");
        labelPassword.classList.add("alert");
        labelPassword.innerHTML="Password: Vul dit veld in";
        setTimeout(()=>{
            labelPassword.classList.remove("alert");
            labelPassword.innerHTML="Password";
        }, 4000)
    }

    else {     
        fetch('/users/login', {
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
            if(json.status === "error"){
                let feedback = document.querySelector(".alert");
                feedback.textContent= "Login failed, buddy. Please try again!";
                feedback.classList.remove('hide');
                setTimeout(()=>{
                    feedback.classList.add("hide");
                }, 4000)
                //alert("failed");
            }

            

            else if(json.status === "success"){
                let token= json.data.token;
                localStorage.setItem("token", token);
                window.location.href="index.html";
            } 
        });
        }
    });