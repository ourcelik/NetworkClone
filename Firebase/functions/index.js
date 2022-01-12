const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const serviceAccount = require("./networkclone-156e4-firebase-adminsdk-rsvgk-f380606048.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://networkclone-156e4.firebaseio.com"
});
const db = admin.firestore();


const typeDefs = gql`
    type colorOptions {
        name: String
        color: String
    }
    type model {
        boy: String
        gogus: String
        bel: String
        kalca: String
        ayak_Numarasi: String
    }
    type details {
        refNo: String
        content: [String]
        model:model
        sample_size: String
    }
    type content {
        categoryId: Int
        subCategoryId: Int
        subtitleId: Int
        id: ID!
        type: String
        name: String
        price: Float
        colorOptions: [
            colorOptions
        ]
        sizes: [String]
        details: details
    }

    type Item {
        id: ID!
        content:content
        cartImage: String
        photos: [String]
    }
    type Query {
        items: [Item]
        getItemById(id: ID!): Item
        getItemByCategoryId(id: Int!): [Item]
        getItemBySubCategoryId(id: Int!): [Item]
        getItemBySubTitleId(subCategoryId: Int!,subTitleId:Int!): [Item]
        getItemBySearchKey(key: String!): [Item]
    }
    `;
// db.collection('items').get().then(snapshot => {
//     snapshot.docs.map(doc => {
//         db.collection("items").doc(doc.id).collection('content').get().then(snapshot => {
//             console.log(snapshot.docs.map(doc => doc.data()));
//         })
//     }
//         );
// });

const resolvers = {
    Query: {
        items: () => {
            return db.collection('items').get().then(snapshot => {
                return snapshot.docs.map(doc => {
                    console.log(doc.data().content);
                    return {
                        id: doc.id,
                        content : {
                            ...doc.data().content
                        },
                        cartImage: doc.data().cartImage,
                        photos: doc.data().photos
                    }
                })
            })

        },
        getItemById: async (_, args) => {
            let item = {};
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.id == args.id) {
                    item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    return item;
                }
            }
            return null;

        },
        getItemByCategoryId: async (_, args) => {
            let items = [];
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.categoryId == args.id) {
                    item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
        getItemBySubCategoryId: async (_, args) => {
            let items = [];
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.subCategoryId == args.id) {
                    item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
        getItemBySubTitleId: async (_, args) => {
            let items = [];
            console.log(args.subTitleId);
            let snapshot = await db.collection("items").get()
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.subtitleId == args.subTitleId && snapshot.docs[i].data().content.subCategoryId == args.subCategoryId) {
                    console.log(snapshot.docs[i].data());
                    item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        },
        getItemBySearchKey: async (_, args) => {
            let items = [];
            let snapshot = await db.collection('items').get()
            if (args.key === "*") {
                     snapshot.docs.forEach(doc => {
                        let item = 
                            {
                                id: doc.id,
                                content : {
                                    ...doc.data().content
                                },
                                cartImage: doc.data().cartImage,
                                photos: doc.data().photos
                            }
                        items.push(item);
                    })
                items = items.sort(()=>Math.random()-0.5);
                
                return items;
            }
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().content.name.toLowerCase().includes(args.key.toLowerCase())
                 || snapshot.docs[i].data().content.price.toString().includes(args.key.toLowerCase())
                    || snapshot.docs[i].data().content.type.toLowerCase().includes(args.key.toLowerCase())
                 ) {
                    item = {
                        id: snapshot.docs[i].id,
                        content : {
                            ...snapshot.docs[i].data().content
                        },
                        cartImage: snapshot.docs[i].data().cartImage,
                        photos: snapshot.docs[i].data().photos
                    }
                    items.push(item);
                }
            }
            return items;

        }
}
// const items = searchKey !== "*" ? dummyData.dummyItems.filter(
//     (item) => item.content.name.toLowerCase().includes(searchKey) || 
//               item.content.type.toLowerCase().includes(searchKey) ||
//               item.content.price.toString().includes(searchKey)
//   )           :dummyData.dummyItems;
//   res.send(getItemsSumarry(items.sort(() => Math.random() - 0.5)));

};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then( ()=>{server.applyMiddleware({ app, path: '/', cors: true });});


exports.graphql = functions.https.onRequest(app);


// getItemById: async(_, args) => {
//     db.collection("items").doc().set(itemForSet);
//     let item = {};
//     let snapshot = await db.collection("items").get()
//     for (let i = 0; i < snapshot.docs.length; i++) {
//             doc = snapshot.docs[i];
//             const contentPromise = await db.collection("items").doc(doc.id).collection('content');
//             let content = await contentPromise.get();
//             let id = 0;
//             content = content.docs.map(doc => 
//                 {
//                     id = doc.id;
//                     return doc.data();
//                 }
//                 );
//                 if (id == args.id) {
//                     item =  {
//                         id: doc.id,
//                         ...doc.data(),
//                         content : {
//                             id:id,
//                             ...content[0]
//                         }
//                     }
//                     console.log(item);
//                     return item;
//                 }
//     }
//     return null;
// }

// items: () => {
//     return db.collection("items").get().then(snapshot => {
//         return snapshot.docs.map(async doc => {
//             const contentPromise = await db.collection("items").doc(doc.id).collection('content');
//             let content = await contentPromise.get();
//             content = content.docs.map(doc => doc.data());
//             console.log(content);

//             return {
//                 id: doc.id,
//                 ...doc.data(),
//                 content : {
//                     ...content[0]
//                 }
//                 }

//         });
//     });
// },

const items =  [
    
    {
        content: {
            categoryId: 1,
            subCategoryId: 0,
            subtitleId: 1,
            id: 3,
            type: "NETWORK Casual",
            name: "Basic Fit Siyah Tek Omuzlu Kazak",
            price: 449.00,
            colorOptions: [
                { name: 'Haki', color: "#625e45" },
                { name: 'Camel', color: "#c4af8a" },
                { name: 'Siyah', color: "#000000" },
                { name: 'Antrasit', color: "#383e42" },
                { name: 'Ekru', color: "#cdb891" },
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406329596_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406329596_1.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406329596_2.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406329596_3.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406329596_4.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406329596_5.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406329596_6.jpg"
        ],
    },
    {
        content: {
            categoryId: 1,
            subCategoryId: 0,
            subtitleId: 1,
            id: 4,
            type: "NETWORK Casual",
            name: "Basic Fit Pembe Kapüşonlu Kazak",
            price: 679.00,
            colorOptions: [
                { name: 'Haki', color: "#625e45" },
                { name: 'Camel', color: "#c4af8a" },
                { name: 'Siyah', color: "#000000" },
                { name: 'Antrasit', color: "#383e42" },
                { name: 'Ekru', color: "#cdb891" },
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406369738_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406369738_1.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406369738_2.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406369738_3.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406369738_4.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406369738_5.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406369738_6.jpg"

        ],
    },
    {
        content: {
            categoryId: 1,
            subCategoryId: 0,
            subtitleId: 1,
            id: 5,
            type: "NETWORK Casual",
            name: "Gri Melanj Dik Yaka Kazak",
            price: 399.00,
            colorOptions: [
                { name: 'Gri Melanj', color: "#c9cac7" },
                { name: 'Camel', color: "#c4af8a" },
                { name: 'Siyah', color: "#000000" },
                { name: 'Antrasit', color: "#383e42" },
                { name: 'Ekru', color: "#cdb891" },
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["XS", "S", "M", "L"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400405862926_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405862926_1.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405862926_2.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405862926_3.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405862926_4.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405862926_5.jpg",

        ],
    },
    {
        content: {
            categoryId: 1,
            subCategoryId: 0,
            subtitleId: 1,
            id: 6,
            type: "NETWORK Casual",
            name: "Basic Fit Kırmızı Sweatshirt",
            price: 629.00,
            colorOptions: [
                { name: 'Kırmızı', color: "red" },
                { name: 'Camel', color: "#c4af8a" },
                { name: 'Siyah', color: "#000000" },
                { name: 'Antrasit', color: "#383e42" },
                { name: 'Ekru', color: "#cdb891" },
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["XS", "S", "M", "L"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406355823_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406355823_1.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406355823_2.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406355823_3.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406355823_4.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406355823_5.jpg"

        ],
    },
    {
        content: {
            categoryId: 1,
            subCategoryId: 1,
            subtitleId: 1,
            id: 7,
            type: "NETWORK Casual",
            name: "Regular Fit Ekru Desenli Pantolon",
            price: 809.00,
            colorOptions: [
                { name: 'Ekru', color: "#c2b280" },
                { name: 'Kırmızı', color: "red" },
                { name: 'Camel', color: "#c4af8a" },
                { name: 'Siyah', color: "#000000" },
                { name: 'Antrasit', color: "#383e42" },
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["36", "38", "40", "42", "44", ],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406380696_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406380696_1.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406380696_2.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406380696_3.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406380696_4.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406380696_5.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406380696_6.jpg"

        ],
    },
    {
        content: {
            categoryId: 1,
            subCategoryId: 1,
            subtitleId: 1,
            id: 8,
            type: "NETWORK BUSINESS",
            name: "Slim Fit Siyah Pantolon",
            price: 764.00,
            colorOptions: [
                { name: 'Siyah', color: "black" },
              
            ],
            sizes: ["34","36", "38", "40", "42", "44", ],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406381662_1_100_154.jpg",
        photos: [
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406381662_1.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406381662_2.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406381662_3.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406381662_4.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406381662_5.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406381662_6.jpg"

        ],
    },
    {
        content: {
            categoryId: 1,
            subCategoryId: 2,
            subtitleId: 1,
            id: 9,
            type: "NETWORK BUSINESS",
            name: "Geniş Fit Indigo Mont",
            price: 1529.00,
            colorOptions: [
                { name: 'Indigo', color: "#152457" },
                { name: 'Siyah', color: "black" },
              
            ],
            sizes: ["XS", "S", "M", "L", "XL", "XXL" ],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406288053_1_100_154.jpg",
        photos: [
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406288053_1.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406288053_2.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406288053_3.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406288053_4.jpg",
       "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406288053_5.jpg",

        ],
    },
    {
        content: {
            categoryId: 1,
            subCategoryId: 2,
            subtitleId: 1,
            id: 10,
            type: "NETWORK SPECIAL",
            name: "Geniş Fit Indigo Mont",
            price: 1569.00,
            colorOptions: [
                { name: 'Beyaz', color: "white" },
                { name: 'Siyah', color: "black" },
              
            ],
            sizes: ["XS", "S", "M", "L", "XL", "XXL" ],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406287902_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406287902_1.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406287902_2.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406287902_3.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406287902_4.jpg",
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406287902_5.jpg"
        ],
    },
    {
        content: {
            categoryId: 2   ,
            subCategoryId: 7,
            subtitleId: 1,
            id: 18,
            type: "NETWORK LIMITED",
            name: "Slim Fit Siyah Kelebek Yaka Yün Palto",
            price: 2649.00,
            colorOptions: [
                { name: 'Siyah', color: "#000000" },
            ],
            sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
            details: {
                refNo: "1076075-052",
                content: ["%90 Yün %10 Kaşmir",
                    "Kruvaze Yaka, Düğme Kapatmalı, Yün Palto. Düz Renk, 2 Adet Cepli"
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400405903742_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903742_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903742_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903742_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903742_4.jpg",
        ],
    },

{
	    content: {
            categoryId: 2   ,
            subCategoryId: 7,
            subtitleId: 1,
            id: 19,
            type: "NETWORK Smart Casual",
            name: "Slim Fit Antrasit Ekose Desenli Yün Palto",
            price: 1649.00,
            colorOptions: [
                { name: 'Antrasit', color: "#383e42" },
            ],
            sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400405903834_1_100_154.jpg",
        photos: [
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903834_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903834_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903834_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405903834_4.jpg"
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 7,
            subtitleId: 1,
            id: 20,
            type: "NETWORK LIMITED",
            name: "Kahverengi Palto",
            price: 2649.00,
            colorOptions: [
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400405905005_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905005_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905005_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905005_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905005_4.jpg",
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 7,
            subtitleId: 1,
            id: 21,
            type: "NETWORK Smart Casual",
            name: "Slim Fit Camel Kelebek Yaka Yün Palto",
            price: 1499.00,
            colorOptions: [
                { name: 'Camel', color: "#c4af8a" },
            ],
            sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400405905906_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905906_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905906_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905906_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405905906_4.jpg",
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 7,
            subtitleId: 1,
            id: 22,
            type: "NETWORK Smart",
            name: "Gri Kruvaze Yaka Yün Palto",
            price: 1649.00,
            colorOptions: [
		{ name: 'Ekru', color: "#cdb891" },
            ],
            sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406421474_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405951163_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405951163_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405951163_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405951163_4.jpg",
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 7,
            subtitleId: 1,
            id: 23,
            type: "NETWORK Smart Casual",
            name: "Comfort Fit Siyah Palto",
            price: 3314.00,
            colorOptions: [
                { name: 'Siyah', color: "#000000" },
            ],
            sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406422525_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406422525_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406422525_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406422525_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406422525_4.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406422525_5.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406422525_6.jpg",
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 6,
            subtitleId: 1,
            id: 24,
            type: "NETWORK Smart Casual",
            name: "Jogger Fit Siyah Pantolon",
            price: 679.00,
            colorOptions: [
                { name: 'Siyah', color: "#000000" },
            ],
            sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406080763_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406080763_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406080763_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406080763_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406080763_4.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406080763_5.jpg",
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 6,
            subtitleId: 1,
            id: 25,
            type: "Slim Fit Haki Eşofman Altı",
            name: "Jogger Fit Siyah Pantolon",
            price: 324.00,
            colorOptions: [
                { name: 'Haki', color: "#625e45" },
            ],
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406362739_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406362739_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406362739_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406362739_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406362739_4.jpg",
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 8,
            subtitleId: 2,
            id: 26,
            type: "NETWORK Smart Casual",
            name: "Siyah Erkek Ayakkabı",
            price: 1019.00,
            colorOptions: [
                { name: 'Siyah', color: "#000000" },
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["40", "41", "42", "43", "44", "45"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406214748_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406214748_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406214748_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406214748_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406214748_4.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406214748_5.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406214748_6.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406214748_7.jpg", 
        ],
    },
{
            content: {
            categoryId: 2   ,
            subCategoryId: 8,
            subtitleId: 2,
            id: 27,
            type: "NETWORK Smart Casual",
            name: "Kahverengi Zımbalı Erkek Deri Ayakkabı",
            price: 1444.00,
            colorOptions: [
                { name: 'Kahverengi', color: "#964b00" },
            ],
            sizes: ["40", "41", "42", "43", "44", "45"],
            details: {
                refNo: "1075927-224",
                content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                    "%98 Pamuk,%2 Elastan",
                    "Normal (Regular) Bel",
                    "Dar (Slim) Paça",
                    "Jean Pantolon",
                    "Fermuar Kapatmalı",
                    "5 Adet Cepli",
                ],
                model: {
                    boy: "177 cm",
                    gogus: "83 cm",
                    bel: "59 cm",
                    kalça: "89 cm",
                    ayak_Numarası: "40"
                },
                sample_size: "27"
            },

        },
        cartImage : "https://img-network.mncdn.com/productimages/2400406388975_1_100_154.jpg",
        photos: [
        "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406388975_1.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406388975_2.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406388975_3.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406388975_4.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406388975_5.jpg",
            "https://img-network.mncdn.com/mnresize/491/754/productimages/2400406388975_6.jpg", 
        ],
    },


    
   
    
    
   
   
   

    
]