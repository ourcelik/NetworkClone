import axios from "axios";

export const gqlClient = axios.create({
    baseURL: "https://us-central1-networkclone2.cloudfunctions.net/graphql",
});
