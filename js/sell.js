const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODA0MjE0NzMsImlhdCI6MTY4MDM5OTk1MiwiYXV0aF90aW1lIjoxNjgwMzg1NDczLCJqdGkiOiJiZjcwYzA1OC02YzI3LTRmMzAtODI3MC1lMmVkMzRkMTJjMDQiLCJpc3MiOiJodHRwOi8vMTg1Ljk4LjEzNi42MDo4MDgwL3JlYWxtcy9jb2RlbGVtYW5zIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijk2NmI4MTFmLTU0YzYtNGVkNS1iMDE5LTE5YmNiY2UwNmQ4MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1kZWZpLTI0aCIsIm5vbmNlIjoiMmFjODUxZGQtNTMwNS00MGY2LWJkYzItYjhmZWFkZGJjNjczIiwic2Vzc2lvbl9zdGF0ZSI6ImEyMGQzYzZlLWU2ZTQtNGE3Mi1iZWMxLTk0YTgwNDEzNTc1MyIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNvZGVsZW1hbnMiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYTIwZDNjNmUtZTZlNC00YTcyLWJlYzEtOTRhODA0MTM1NzUzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImltcG9ydGFudCIsInRlYW1faWQiOiIyMCIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IiFJbXBvcnRhbnQifQ.SKRU7-KZeqPlqiLl3VWcBqHvGLTi5BHvFagQiPYxK5BbIiUkduqN-o2KsewpMTuxT1vdLp-aOS2VFUxan9ejohdK8irrjWiuUM3z0b62U6BirloPb3qVfiek7Tj6EmIRjsy25XipUwRqTYJmSNTfWpvvdYifBagXVMb4C4Tpc5Knj65PwnP0mXYsVbAzikTkKcQY8O9YFdLCax5rWgwQCo8QkKjVYGgSoBuOuR3UuSBqQsEG23YVoboq5fhIbA6CiMc0UkeLAv419R2lqpMGw09DejkBbOqlsF-IChapya_pep6JqAZdPZSe2BDa3QPKsWTTtEliLZOb5mPNRWuRxA'},
    body: JSON.stringify({
        itemId: 30,
        price: 2200
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