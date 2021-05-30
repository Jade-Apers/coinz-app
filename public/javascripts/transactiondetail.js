window.addEventListener("load", function(){
    let tokentje = localStorage.getItem("token");
    if(!tokentje){
        window.location.replace("login.html");
    }

    else {

        fetch("/api/v1/details", {
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
                   // let detailsPage;
                 //   let sender= json.data.sender;
                   // let coinz= json.data.coinz;
                   // let reason= json.data.reason;

                 /*   json.data.details.forEach(element => {                        
                        let sender= element.sender;
                        let coinz= element.coinz;
                        let reason= element.reason;
*/
                let foto= "arrow.png"

            console.log(json.data);

                detailsPage= 
                `
                    <div class="transfer__image"><p>&#128520;</p></div>
                    <div class="transfer__arrow"><p>&#10145;&#65039;</p></div>
                    <div class="transfer__image"><p>&#128519;</p></div>
                    <div class="transfer__sender"><h3>From ${json.data.coinz.sender}</h3></div>
                    <div class="transfer__coinz"> <h3>+ ${json.data.coinz.coinz} coinz</h3></div>
                    <div class="transfer__reason"><p>Reason:</p></div>
                    <div class="transfer__reason-title"><p>${json.data.coinz.reason}</p></div>
                `
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
    
