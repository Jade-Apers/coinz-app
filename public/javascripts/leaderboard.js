let inputLeaderboard;

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
                if(json.status === 'success'){
                    inputLeaderboard= json.data;
                    let rankingItem= 1;

                    json.transfer.forEach(function(e){
                        let username= e.user;
                        let score= e.coinz;

                        let ranking= 
                        `<div class="leaderboard__list">
                            <div class="leaderboard__grid__rank">${rankingItem} Coinz</div>    
                            <div class="leaderboard__grid__name">${username}</div>
                            <div class="leaderboard__grid__score">${score} Coinz</div>
                        </div>`
                        document.querySelector(".leaderboard__grid").innerHTML += ranking;
                        rankingItem++;
                    });
                }
            })
    }
});