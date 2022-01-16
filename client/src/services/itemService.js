
export async function getItem(id) {
  let query  =`
  query GetItemById($id: ID!) {
    getItemById(id: $id) {
      id
      
      cartImage
      photos
      content {
        categoryId
        subCategoryId
        subtitleId
        id
        type
        name
        price
        colorOptions {
          name
          color
        }
        sizes
        details {
          refNo
          content
          model {
            kalca
            bel
            gogus
            boy
            ayak_Numarasi
          }
          sample_size
        }
      }
    }
  }
  `
  
  return fetch('http://localhost:5000/networkclone2/us-central1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { id },
    })
  })
    .then(r => r.json())
}

// export async function getItem(id) {
//   return appAxios.get(`items/${id}`);
// }

export async function getItemsSummary() {
  let query = `
    query{
      items {
        id
        content
        {
          name
          price
          id
          
        }
        photos
        
      }
    }
  `
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
}

export async function getItemsByCategoryId(id) {
  let query = `
    query{
      getItemByCategoryId(id:${id}){
        content{
          id
          name
          price
        }
        photos
      }
    }
  `
  
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
}

export async function getItemsBySubCategoryId(id) {
  let query = `
    query{
      getItemBySubCategoryId(id:${id}){
        content{
          id
          name
          price
        }
        photos
      }
    }
  `
  
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
}

export async function getItemsBySubtitleId(itemInfo) {
  let query = `
  query{
    getItemBySubTitleId(subTitleId:${itemInfo.contentId},subCategoryId:${itemInfo.subCategoryId}){
      content{
        id
        name
        price
      }
      photos
    }
  }
  `
  
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
}

export async function getItemsBySearchKey(key) {
  let query = `
  query GetItemBySearchKey($key: String!) {
    getItemBySearchKey(key: $key) {
      content{
        id
        name
        price
      }
      photos
    }
  }
  `
  
  return fetch('http://localhost:5000/networkclone2/us-central1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables : {
        "key" : key
      }
    })
  })
    .then(r => r.json())
    .then(r => {console.log(r);return r})
}

