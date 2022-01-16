export async function getMainAdverts() {
    let query = `
    query GetMainAdverts {
        getMainAdverts {
          mainAdverts {
            id
            url
          }
        }
      }
  `
      console.log("sa cnm");
    return fetch('http://localhost:5000/networkclone2/us-central1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
        })
        })
        .then(r => r.json())
        .then(r =>{ console.log(r); return r})
}