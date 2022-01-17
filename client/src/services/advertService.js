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
    return fetch('https://us-central1-networkclone2.cloudfunctions.net/graphql', {
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