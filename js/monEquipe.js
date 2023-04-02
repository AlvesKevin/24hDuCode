// On définit les options de la requête à l'API REST
const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODA0MjE0NzMsImlhdCI6MTY4MDM5OTk1MiwiYXV0aF90aW1lIjoxNjgwMzg1NDczLCJqdGkiOiJiZjcwYzA1OC02YzI3LTRmMzAtODI3MC1lMmVkMzRkMTJjMDQiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiMmFjODUxZGQtNTMwNS00MGY2LWJkYzItYjhmZWFkZGJjNjczIiwic2Vzc2lvbl9zdGF0ZSI6ImEyMGQzYzZlLWU2ZTQtNGE3Mi1iZWMxLTk0YTgwNDEzNTc1MyIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYTIwZDNjNmUtZTZlNC00YTcyLWJlYzEtOTRhODA0MTM1NzUzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.SKRU7-KZeqPlqiLl3VWcBqHvGLTi5BHvFagQiPYxK5BbIiUkduqN-o2KsewpMTuxT1vdLp-aOS2VFUxan9ejohdK8irrjWiuUM3z0b62U6BirloPb3qVfiek7Tj6EmIRjsy25XipUwRqTYJmSNTfWpvvdYifBagXVMb4C4Tpc5Knj65PwnP0mXYsVbAzikTkKcQY8O9YFdLCax5rWgwQCo8QkKjVYGgSoBuOuR3UuSBqQsEG23YVoboq5fhIbA6CiMc0UkeLAv419R2lqpMGw09DejkBbOqlsF-IChapya_pep6JqAZdPZSe2BDa3QPKsWTTtEliLZOb5mPNRWuRxA'}
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



