var btn = document.querySelector(".signup button").addEventListener("onclick", (e) => {
        e.preventDefault();
        var email= document.querySelector('#email').value;
        var password = document.querySelector('#password').value;
        var username = document.querySelector('#username').value;
        
    fetch('http://localhost:3000/users/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "password":password
        })
    }).then(response =>{
        return response.json();
    }).then(json =>{
        if(json.status === "success"){
            let feedback = document.querySelector(".alert");
            feedback.textContent= "Sign up complete!";
            feedback.classList.remove('hidden');
        }
    })
    
});
