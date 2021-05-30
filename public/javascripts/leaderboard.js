window.addEventListener("load", function(){
    let tokentje = localStorage.getItem("token");
    if(!tokentje){
        window.location.replace("login.html");
    }

    else {
        fetch("http://localhost:3000/api/v1/leaderboard", {
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
                  //  let rankingItem= 1;

                   /* leaderboard.forEach(element => {                        
                        let username= element.username;
                        let score= element.coinz;

                   */     
                      /*  ranking= 
                        `<div class="leaderboard__list">
                            <div class="leaderboard__grid__rank">${rankingItem} Coinz</div>    
                            <div class="leaderboard__grid__name">${username}</div>
                            <div class="leaderboard__grid__score">${score} Coinz</div>
                        </div>
                        <hr class="list_hr">`
                        document.querySelector(".leaderboard__grid").innerHTML += ranking;
                        rankingItem++;*/

                    for(let rankingItem=1; rankingItem<=10; rankingItem++){
                        console.log("test");

                        let leaderboard= json.data;
                        console.log(leaderboard);

                        let username= leaderboard.username;
                        let score= leaderboard.coinz;


                        ranking= 
                        `<div class="leaderboard__list">
                            <div class="leaderboard__grid__rank">${rankingItem}</div>    
                            <div class="leaderboard__grid__name">${username}</div>
                            <div class="leaderboard__grid__score">${score} Coinz</div>
                        </div>
                        <hr class="list_hr">`
                        document.querySelector(".leaderboard__grid").innerHTML += ranking;
                        ///rankingItem++;
                    }
                //    });
                }
            })
        }})  
