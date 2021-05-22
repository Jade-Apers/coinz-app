var btn = document.querySelector(".btnsignup").addEventListener("click", (e) => {
    var email= document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var username = document.querySelector('#firstname').value;
    var lastname = document.querySelector('#lastname').value;
    
fetch('http://localhost:3000/users/signup', {
    method: "post",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "email": email,
        "username": username,
        "password":password,
        "lastname":lastname
    })
}).then(response =>{
    return response.json();
}).then(json =>{
    if(json.status === "success"){
        let feedback = document.querySelector(".alert");
        feedback.textContent= "Sign up complete!";
        feedback.classList.remove('hide');

        let token= json.data.token;
            localStorage.setItem("token", token);
            window.location.href="index.html";
    }
})


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
  
    }*/