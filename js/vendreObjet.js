// Fonction pour afficher l'inventaire de l'équipe
function afficherInventaire() {
    fetch('http://185.98.136.60:9090/teams/20/inventory', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODAzOTkzMjQsImlhdCI6MTY4MDM4NTEyNSwiYXV0aF90aW1lIjoxNjgwMzYzMzI0LCJqdGkiOiJjNDg4ZmIxOS0zYmNkLTQ4YmQtYTdiNi0zZjhjZDc0MzgzMGEiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiMjllYTljYmUtZmUzMC00YjAxLThhYjUtYWY2OTVlNzc2OWRkIiwic2Vzc2lvbl9zdGF0ZSI6IjAyODk0N2QyLWEzM2YtNGJhNy04NWMzLTViMWQwYTIyZTc0OSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMDI4OTQ3ZDItYTMzZi00YmE3LTg1YzMtNWIxZDBhMjJlNzQ5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.WSMedHxXrbglz8ttA2iwks1_BbQBFmTnPfBj9wI-mxTqaf8Y3HtGlt6cgh9MVvUs2vYzmJhTZ55p2tD3Iol2kYyjBYNMPc3gUKSPSzPpv0845kkBe8opFyhuq-H3v_yNI-uEpe7q9-kuSKHN_deGtzpKe3kICPjCuwgGL1U6AWy7dWX-VPuhoXJJLtnjVoJO-hlstKxICeBFvmj8ZDkF141wBOO-PpGxEuxGsD6_5nNi_mW0fUVTHkT-DgPudwaq0cpChmnhbe5fzE59tSYn8vcnao46mw8oEKB-TemS7wQSKblxyFKYdGVlBZEL5PGovuvelnE4XlZmAL_yZDTDyA'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erreur lors de la récupération de l\'inventaire.');
            }
        })
        .then(data => {
            const itemList = document.getElementById('itemList');
            itemList.innerHTML = '';
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} (${item.quantity})`;
                itemList.appendChild(listItem);
            });

            // Remplir la liste déroulante pour la vente d'objet
            const itemSelect = document.getElementById('itemSelect');
            itemSelect.innerHTML = '';
            data.forEach(item => {
                const option = document.createElement('option');
                option.textContent = item.name;
                option.value = item.id;
                itemSelect.appendChild(option);
            });
        })
        .catch(error => console.error(error));
}

// Fonction pour vendre un objet
function vendreObjet() {
    const itemId = document.getElementById('itemSelect').value;
    const price = document.getElementById('priceInput').value;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer .eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODAzOTkzMjQsImlhdCI6MTY4MDM4NTEyNSwiYXV0aF90aW1lIjoxNjgwMzYzMzI0LCJqdGkiOiJjNDg4ZmIxOS0zYmNkLTQ4YmQtYTdiNi0zZjhjZDc0MzgzMGEiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiMjllYTljYmUtZmUzMC00YjAxLThhYjUtYWY2OTVlNzc2OWRkIiwic2Vzc2lvbl9zdGF0ZSI6IjAyODk0N2QyLWEzM2YtNGJhNy04NWMzLTViMWQwYTIyZTc0OSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMDI4OTQ3ZDItYTMzZi00YmE3LTg1YzMtNWIxZDBhMjJlNzQ5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.WSMedHxXrbglz8ttA2iwks1_BbQBFmTnPfBj9wI-mxTqaf8Y3HtGlt6cgh9MVvUs2vYzmJhTZ55p2tD3Iol2kYyjBYNMPc3gUKSPSzPpv0845kkBe8opFyhuq-H3v_yNI-uEpe7q9-kuSKHN_deGtzpKe3kICPjCuwgGL1U6AWy7dWX-VPuhoXJJLtnjVoJO-hlstKxICeBFvmj8ZDkF141wBOO-PpGxEuxGsD6_5nNi_mW0fUVTHkT-DgPudwaq0cpChmnhbe5fzE59tSYn8vcnao46mw8oEKB-TemS7wQSKblxyFKYdGVlBZEL5PGovuvelnE4XlZmAL_yZDTDyA'},
        body: JSON.stringify({
            itemId: itemId,
            price: price
        })
    };

    fetch(`http://185.98.136.60:9090/items/sell/20/marketplace`, options)
        .then(response => {
            if (response.ok) {
                alert('Objet vendu avec succès !');
            } else {
                throw new Error('Erreur lors de la vente de l\'objet.');
            }
        })
        .catch(error => console.error(error));
}

// Afficher l'inventaire au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    afficherInventaire();
});

// Ajouter un écouteur d'événement sur le bouton de vente
document.getElementById('sellButton').addEventListener('click', () => {
    vendreObjet();
});