//function affiche

const URL_GRAPE_BASE = "http://185.98.136.60:9090/";
const URL_GRAPE_Image = "http://185.98.136.60/";
var itemId = ""
var price = ""

const Token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODAzOTkzMjQsImlhdCI6MTY4MDM4NTEyNSwiYXV0aF90aW1lIjoxNjgwMzYzMzI0LCJqdGkiOiJjNDg4ZmIxOS0zYmNkLTQ4YmQtYTdiNi0zZjhjZDc0MzgzMGEiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiMjllYTljYmUtZmUzMC00YjAxLThhYjUtYWY2OTVlNzc2OWRkIiwic2Vzc2lvbl9zdGF0ZSI6IjAyODk0N2QyLWEzM2YtNGJhNy04NWMzLTViMWQwYTIyZTc0OSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMDI4OTQ3ZDItYTMzZi00YmE3LTg1YzMtNWIxZDBhMjJlNzQ5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.WSMedHxXrbglz8ttA2iwks1_BbQBFmTnPfBj9wI-mxTqaf8Y3HtGlt6cgh9MVvUs2vYzmJhTZ55p2tD3Iol2kYyjBYNMPc3gUKSPSzPpv0845kkBe8opFyhuq-H3v_yNI-uEpe7q9-kuSKHN_deGtzpKe3kICPjCuwgGL1U6AWy7dWX-VPuhoXJJLtnjVoJO-hlstKxICeBFvmj8ZDkF141wBOO-PpGxEuxGsD6_5nNi_mW0fUVTHkT-DgPudwaq0cpChmnhbe5fzE59tSYn8vcnao46mw8oEKB-TemS7wQSKblxyFKYdGVlBZEL5PGovuvelnE4XlZmAL_yZDTDyA';

const options = {
    method: 'GET',
    headers: {
        'Authorization': Token,
    },
};

const options1 = {
    method: 'POST',
    headers: {
        'Authorization': Token,
    },
    body: JSON.stringify({
        "itemId": 154,
        "price": 1000
    })
};

const options2 = {
    method: 'PUT',
    headers: {
        'Authorization': Token,
    },
};



function AfficheTeams() {
    fetch(
        `${URL_GRAPE_BASE}teams`,
        options
    )
        .then(response => response.json())
        .then(data => {
            const teamsList = document.getElementById('teams-list');
            //function teams
            data.forEach(team => {
                const listItem = document.createElement('li');
                listItem.innerText = `${team.name} - ID: ${team.id}, score: ${team.score}, vehicleAcceleration: ${team.vehicle.acceleration}`;
                teamsList.appendChild(listItem);
            });
        })
        .catch(error => console.error(error));
}

function AfficheItems() {
    fetch(`${URL_GRAPE_BASE}items`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const Itemslist = document.getElementById('Items-liste');
            data.forEach(item => {
                const listItems = document.createElement('div');
                listItems.classList.add('item');
                var itemstack = ""
                for (let index = 0; index < item.statistiques.length; index++) {
                    itemstack += ", type: " + item.statistiques[index].type + ",  value: " + item.statistiques[index].value
                }
                const statsArray = itemstack.split(", "); // split the string after each comma and put into an array

                const statsDivs = statsArray.map(stat => {
                    return `<div>${stat}</div>`; // create a div element for each item in the array
                }).join(""); // join the array elements into a single string
                const im = JSON.stringify(item.image);
                strimage = item.image.split('assets')
                console.log(strimage)
                c = `${URL_GRAPE_Image}assets${strimage[1]}.png`
                Itemslist.appendChild(listItems);
                listItems.innerHTML = `<img src="${c}" style='width:100px'><div id="${item.id}" class="item-name">${item.name} - ID: ${item.id}</div><div class="item-details"><div>Type: ${item.type}</div><div>Rareté: ${item.rarity}</div><div>Prix: ${item.sellingPrice}</div><div>Stats: ${statsDivs}</div><button class="buy-button" onclick="buttonAchat(this)">Acheter</button></div>`;
                Itemslist.appendChild(listItems);
            });
        })
        .catch(error => console.error(error));
}

function AfficheInventaire() {
    fetch(
        `${URL_GRAPE_BASE}teams/20/inventory`,
        options
    )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const invliste = document.getElementById('inv-liste');
            data.items.forEach(inv => {
                const listItems = document.createElement('li');
                var itemstack = ""
                for (let index = 0; index < inv.item.statistiques.length; index++) {
                    itemstack = itemstack + " type: " + inv.item.statistiques[index].type + ", value: " + inv.item.statistiques[index].value
                }
                setTimeout(() => {
                    listItems.innerText = `Equiped : ${inv.isEquipped} - ID: ${inv.item.id}, type: ${inv.item.type}, rareté: ${inv.item.rarity},  stats: ${itemstack}`;
                    invliste.appendChild(listItems);
                }, 1000);
            });
        });
}

function AfficheRace() {
    fetch(`${URL_GRAPE_BASE}races/all/20`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const Raceliste = document.getElementById('Race-liste');
            data.forEach(race => {
                const listRace = document.createElement('div');
                listRace.classList.add('race');
                var itemstack = ""
                for (let index = 0; index < race.medals.length; index++) {
                    itemstack = itemstack + " type: " + race.medals[index].type + ", rewardCoins: " + race.medals[index].rewardCoins + ", rewardPoints " + race.medals[index].rewardPoints + ", timeToObtain: " + race.medals[index].timeToObtain
                }
                listRace.innerHTML = `<div class="race-name">${race.name} - ID: ${race.id}, difficulte: ${race.difficulty}</div><div class="race-stats">Stats : ${itemstack}</div>`;
                Raceliste.appendChild(listRace);
            });
        })
}

//start course

function startcourse(nb) {
    fetch(
        `${URL_GRAPE_BASE}races/${nb}/run/20`,
        options
    )
        .then(data => {
            //undefine
            console.log(data)
        });
}

//vente
//bug ===>
function vente(id, prix) {
    itemId = id;
    price = prix;
    fetch('${URL_GRAPE_BASE}items/sell/20/marketplace', options1)
        .then(response => {
            if (response.ok) {
                console.log('Objet vendu avec succès !');
            } else {
                throw new Error('Erreur lors de la vente de lobjet.');
            }
        })
        .catch(error => console.error(error));
}

function buttonAchat(c) {
    try {
        var btnid = c.parentElement.parentElement.children[1].id
    } catch (error) {
    }
    console.log(btnid)
    // const id = document.getElementById('Items-input').value;
    //   fetch(
    //     `${URL_GRAPE_BASE}items/buy/${id}/20`,
    //     options1
    //   )
}

function buttonEquip() {
    const id = document.getElementById('Equip-input').value;
    fetch(
        `${URL_GRAPE_BASE}teams/20/inventory/equip/${id}`,
        options2
    )
}