const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODAzOTkzMjQsImlhdCI6MTY4MDM4NTEyNSwiYXV0aF90aW1lIjoxNjgwMzYzMzI0LCJqdGkiOiJjNDg4ZmIxOS0zYmNkLTQ4YmQtYTdiNi0zZjhjZDc0MzgzMGEiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiMjllYTljYmUtZmUzMC00YjAxLThhYjUtYWY2OTVlNzc2OWRkIiwic2Vzc2lvbl9zdGF0ZSI6IjAyODk0N2QyLWEzM2YtNGJhNy04NWMzLTViMWQwYTIyZTc0OSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMDI4OTQ3ZDItYTMzZi00YmE3LTg1YzMtNWIxZDBhMjJlNzQ5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.WSMedHxXrbglz8ttA2iwks1_BbQBFmTnPfBj9wI-mxTqaf8Y3HtGlt6cgh9MVvUs2vYzmJhTZ55p2tD3Iol2kYyjBYNMPc3gUKSPSzPpv0845kkBe8opFyhuq-H3v_yNI-uEpe7q9-kuSKHN_deGtzpKe3kICPjCuwgGL1U6AWy7dWX-VPuhoXJJLtnjVoJO-hlstKxICeBFvmj8ZDkF141wBOO-PpGxEuxGsD6_5nNi_mW0fUVTHkT-DgPudwaq0cpChmnhbe5fzE59tSYn8vcnao46mw8oEKB-TemS7wQSKblxyFKYdGVlBZEL5PGovuvelnE4XlZmAL_yZDTDyA'},
    body: JSON.stringify({
        itemId: 30,
        price: 1
    })
};

fetch('http://185.98.136.60:9090/items/sell/20/teams', options)
    .then(response => {
        if (response.ok) {
            console.log('Objet vendu avec succès !');
        } else {
            throw new Error('Erreur lors de la vente de l\'objet.');
        }
    })
    .catch(error => console.error(error));