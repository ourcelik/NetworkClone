
export async function register(userInput) {
    let query  =`
        mutation RegisterUser($userInput: userInput) {
            registerUser(userInput: $userInput) {
            name
            email
            id
            }
        }
    `
    console.log(userInput);
    
    return fetch('https://us-central1-networkclone2.cloudfunctions.net/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { 
                "userInput": {
                  "name": userInput.name,
                  "surname": userInput.surname,
                  "email": userInput.email,
                  "gender": userInput.gender == 0 ? "Erkek" : "Kadın",
                  "birthDate": userInput.birthDate,
                  "phoneNumber": userInput.phoneNumber,
                  "password": userInput.password
                }
         },
      })
    })
      .then(r => r.json())
}

export async function login(userInput) {
    let query = `
    mutation LoginUser($loginInput: loginInput) {
        loginUser(loginInput: $loginInput) {
          name
          email
          id
        }
      }
    `

    return fetch('https://us-central1-networkclone2.cloudfunctions.net/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { 
                  "loginInput": {
                    "email": userInput.email,
                    "password": userInput.password
                  }
           },
        })
      })
        .then(r => r.json())

}


