window.addEventListener("load", function(){
    let tokentje = localStorage.getItem("token");
    if(!tokentje){
        window.location.replace("login.html");
    }

    else {

        fetch("http://localhost:3000/api/v1/details", {
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
                    let detailsPage;
                    let sender= json.data.sender;
                    let coinz= json.data.coinz;
                    let reason= json.data.reason;

                 /*   json.data.details.forEach(element => {                        
                        let sender= element.sender;
                        let coinz= element.coinz;
                        let reason= element.reason;
*/
            console.log(json.data.details);


                        detailsPage= 
                        `<div class="transfer">
                            <div class="transfer__image"><img src="/src/images/NV6A6972Enjoy.jpg" width="300" alt="profile picture sender"></div>
                            <div class="transfer__arrow"><img src="/src/images/arrow.png" alt="arrow" width="50"> </div>
                            <div class="transfer__image"><img src="/src/images/NV6A6959Enjoy.jpg" width="300" alt="profile picture receiver"></div>
                            <div class="transfer__sender"><h3>From ${json.data.details.sender}</h3></div>
                            <div class="transfer__coinz"> <h3>+ ${json.data.details.coinz} coinz</h3></div>
                            <div class="transfer__reason"><p>Reason:</p></div>
                            <div class= "transfer__reason-icon"><img src="/src/images/support (1).svg" alt="reason icon" width="40px" class="fill"></div>
                            <div class="transfer__reason-title"><p>${json.data.details.reason}</p></div>
                        </div>`
                        document.querySelector(".transfer").innerHTML += detailsPage;
              /*          
                    })
                };
                })
            }
        })*/

         }
        })
            }
        });
    
