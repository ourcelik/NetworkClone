import axios from "axios";

export const gqlClient = axios.create({
    baseURL: "http://localhost:5000/networkclone2/us-central1/graphql",
});
