//function affiche

const URL_GRAPE_BASE = "http://185.98.136.60:9090/";
var itemId = ""
var price = ""

const Token =
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODAzODQ5NTcsImlhdCI6MTY4MDM2MzM1NywiYXV0aF90aW1lIjoxNjgwMzYzMzI0LCJqdGkiOiI1MTBlZTQzZS0zZDBhLTQ5ZGQtODI1OC0zNDM2YjRjYjA2ODYiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiNjYzZWMxMjItZTM4OC00NTEyLWJlYWMtYWQ3NzZhMDNiM2U3Iiwic2Vzc2lvbl9zdGF0ZSI6IjAyODk0N2QyLWEzM2YtNGJhNy04NWMzLTViMWQwYTIyZTc0OSIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiMDI4OTQ3ZDItYTMzZi00YmE3LTg1YzMtNWIxZDBhMjJlNzQ5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.rZ92040q7ebe07XIEo4Pf0_5wTiwRFoOckH2dKtsE4g6L9CsZ-NvBaPmc9NxHBgER9wjI0Tn0C04lBRU-dG8s-QIzr7b8OIgZUvdNNR7f0GSlmo1Jq7YDub2EjWIDdKjrhfuV_5TrR-weLPN4WMV56ymTh6TGGP-kDpb3E_wZkEieexPGNO3WWHSuNbaVLT4UCoT4HYgkGbRYyIu-6vZTATPS97ph7iq4Y_WG8AItwcyACTJ3hANQ64kzqHB4nJTEuLlPpAjA2VVBRc456TrPQPYUHEpa3utVj6LMByz6kWRZW0qZfN2Qf0iqkb8zunPjf-4ibBm6FwaCN9v3oe_EA';
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
            listItems.innerText = `Equiped : ${inv.isEquipped} - ID: ${inv.item.id}, type: ${inv.item.type}, rareté: ${inv.item.rarity},  stats: ${itemstack}`;
            invliste.appendChild(listItems);
        });
    });
