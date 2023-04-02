// On définit les options de la requête à l'API REST
const options = {
    method: 'GET',
    headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODAzOTkzMjQsImlhdCI6MTY4MDM4NTEyNSwiYXV0aF90aW1lIjoxNjgwMzYzMzI0LCJqdGkiOiJjNDg4ZmIxOS0zYmNkLTQ4YmQtYTdiNi0zZjhjZDc0MzgzMGEiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiMjllYTljYmUtZmUzMC00YjAxLThhYjUtYWY2OTVlNzc2OWRkIiwic2Vzc2lvbl9zdGF0ZSI6IjAyODk0N2QyLWEzM2YtNGJhNy04NWMzLTViMWQwYTIyZTc0OSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMDI4OTQ3ZDItYTMzZi00YmE3LTg1YzMtNWIxZDBhMjJlNzQ5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.WSMedHxXrbglz8ttA2iwks1_BbQBFmTnPfBj9wI-mxTqaf8Y3HtGlt6cgh9MVvUs2vYzmJhTZ55p2tD3Iol2kYyjBYNMPc3gUKSPSzPpv0845kkBe8opFyhuq-H3v_yNI-uEpe7q9-kuSKHN_deGtzpKe3kICPjCuwgGL1U6AWy7dWX-VPuhoXJJLtnjVoJO-hlstKxICeBFvmj8ZDkF141wBOO-PpGxEuxGsD6_5nNi_mW0fUVTHkT-DgPudwaq0cpChmnhbe5fzE59tSYn8vcnao46mw8oEKB-TemS7wQSKblxyFKYdGVlBZEL5PGovuvelnE4XlZmAL_yZDTDyA'},
};

// On récupère l'élément <ul> dans lequel on va afficher les informations de l'équipe
const myTeamName = document.getElementById('myTeamName');
const myTeamInfo = document.getElementById('myTeamInfo');
const myTeamMedal = document.getElementById('myTeamMedal');
const myTeamVehicule = document.getElementById('myTeamVehicule');

// On envoie la requête à l'API REST pour récupérer les informations de l'équipe avec l'ID 20
fetch('http://185.98.136.60:9090/teams/20', options)
    .then(response => response.json())
    .then(team => {
        // On crée un élément <li> dans la liste <ul> avec le nom, l'ID et le score de l'équipe
        const teamItem = document.createElement('h2');
        teamItem.textContent = `${team.name}`;
        myTeamName.appendChild(teamItem);
    })
    .catch(err => console.error(err));


//--------------------//

fetch('http://185.98.136.60:9090/teams/20', options)
    .then(response => response.json())
    .then(team => {
        // On crée un élément <li> dans la liste <ul> avec le nom, l'ID et le score de l'équipe
        const teamScore = document.createElement('li');
        const teamCoin = document.createElement('li');
        const teamActualRace = document.createElement('li');
        teamScore.textContent = `${team.score}`;
        teamCoin.textContent = `${team.coin}`;

        myTeamInfo.appendChild(teamScore);
        myTeamInfo.appendChild(teamCoin);
        myTeamInfo.appendChild(teamActualRace);

    })
    .catch(err => console.error(err));

//--------------------//

fetch('http://185.98.136.60:9090/teams/20/bestTimes', options)
    .then(response => response.json())
    .then(teams => {
            // On crée un élément <li> dans la liste <ul> avec le nom, l'ID et le score de l'équipe
            const medalGold = document.createElement('li');
            const medalSilver = document.createElement('li');
            const medalBrass = document.createElement('li');


            medalGold.textContent = `${teams.filter(team => team.medal === 'Gold').length}`;
            medalSilver.textContent = `${teams.filter(team => team.medal === 'Silver').length}`;
            medalBrass.textContent = `${teams.filter(team => team.medal === 'Brass').length}`;

            myTeamMedal.appendChild(medalGold);
            myTeamMedal.appendChild(medalSilver);
            myTeamMedal.appendChild(medalBrass);



    })
    .catch(err => console.error(err));

//--------------------//

fetch('http://185.98.136.60:9090/teams/20', options)
    .then(response => response.json())
    .then(team => {
        // On crée un élément <li> dans la liste <ul> avec le nom, l'ID et le score de l'équipe
        const vehiculeAccel = document.createElement('li');
        const vehiculeEnergy = document.createElement('li');
        const vehiculeGrip = document.createElement('li');
        const vehiculeAbility = document.createElement('li');
        const vehiculePower = document.createElement('li');
        const vehiculeWear = document.createElement('li');
        const vehiculeWeight = document.createElement('li');

        vehiculeAccel.textContent = `Acceleration : ${team.vehicle.acceleration}`;
        vehiculeEnergy.textContent = `Energy: ${team.vehicle.energyConsumption}`;
        vehiculeGrip.textContent = `Grip : ${team.vehicle.grip}`;
        vehiculeAbility.textContent = `Ability : ${team.vehicle.handlingAbility}`;
        vehiculePower.textContent = `Power : ${team.vehicle.power}`;
        vehiculeWear.textContent = `Wear : ${team.vehicle.wear}`;
        vehiculeWeight.textContent = `Weigth : ${team.vehicle.weight}`;

        myTeamVehicule.appendChild(vehiculeAccel);
        myTeamVehicule.appendChild(vehiculeEnergy);
        myTeamVehicule.appendChild(vehiculeGrip);
        myTeamVehicule.appendChild(vehiculeAbility);
        myTeamVehicule.appendChild(vehiculePower);
        myTeamVehicule.appendChild(vehiculeWear);
        myTeamVehicule.appendChild(vehiculeWeight);

    })
    .catch(err => console.error(err));

//--------------------//



