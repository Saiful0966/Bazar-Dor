

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
    socialProviders:{
        google:{
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
        },
        github:{
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string

        }

    },
    database: mongodbAdapter(db, {
        client,
    }),
});