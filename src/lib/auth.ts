// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "@better-auth/mongo-adapter";

// const client = new MongoClient(process.env.BETTER_AUTH_DB_URL as string);

// const db = client.db("dor-dam");

// export const auth = betterAuth({
//     emailAndPassword:{
//         enabled: true
//     },
//   database: mongodbAdapter(db, {
//     client,
//   }),
// });





















import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const connectionString = process.env.BETTER_AUTH_DB_URL;

if (!connectionString) {
  throw new Error("BETTER_AUTH_DB_URL is not defined in environment variables.");
}

const client = new MongoClient(connectionString);

const db = client.db("dor_dam");

export const auth = betterAuth({
    emailAndPassword:{
        enabled: true
    },
    database: mongodbAdapter(db, {
        client,
    }),
});