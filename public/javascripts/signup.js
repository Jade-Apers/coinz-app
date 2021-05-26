let btnSignup = document.querySelector('.btnsignup').addEventListener("click", (e) => {
    let email= document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let username = document.querySelector('.username').value;
        
    fetch('/users/signup', {
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
        if(json.status === "success") {
            let feedback = document.querySelector(".alert");
            feedback.textContent= "Sign up complete!";
            feedback.classList.remove('hide');
            
            let token= json.data.token;
            localStorage.setItem("token", token);
            window.location.href="index.html";
        }
    
        });
    });
    
    
      
      
      //signup verification
    /*
      let formSignup = document.querySelector(".signup__fields");
      formSignup.addEventListener("submit", checkSignup);
      
      function checkSignup(e) {
          let hasErrors = false;
          let formGlobal= document.querySelector(".signup__form");
          formGlobal.classList.remove("alert");
          formGlobal.classList.add("hide");
      
          let txtEmail = document.querySelector("#mailadres");
          let thomasmore= txtEmail.value.indexOf("@student.thomasmore.be");
      
          if (txtEmail.value === "" || thomasmore === -1) {
              let emailError= document.querySelector(".signup__form"); 
              emailError.classList.add("alert");
              hasErrors =  true;
          }
      
          if (hasErrors === false) {
            checkSignup();
          }
        
          e.preventDefault();
        }
      
        function signupChecked() {
      
            document.querySelector(".signup__form").classList.add("hide");
      
        }
        */