window.addEventListener("load", function(){
    let tokentje = localStorage.getItem("token");
    if(!tokentje){
        window.location.replace("login.html");
    }

    else {
        fetch("/api/v1/leaderboard", {
            method: "get", 
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${tokentje}`
            }
            }).then(response => {
                return response.json();
            }).then(json => {
                console.log(json);
                if(json.status === 'success'){
                    let ranking;
                    let rankingItem= 1;


                      json.data.leaderboard.forEach(element => {                        
                        let username= element.username;
                        let score= element.coinz;


                        //let username=git json.data.leaderboard;
                       // let usernameDetail= username._id="1";

                        ranking= 
                        `<div class="leaderboard__list">
                            <div class="leaderboard__grid__rank">${rankingItem}</div>    
                            <div class="leaderboard__grid__name">${username}</div>
                            <div class="leaderboard__grid__score">${score} Coinz</div>
                        </div>`
                        document.querySelector(".leaderboard__grid").innerHTML += ranking;
                        rankingItem++;

                       console.log(json.data.leaderboard)

                        ///rankingItem++;
                    })
                };
                //    });
                })
            }
        })
      
