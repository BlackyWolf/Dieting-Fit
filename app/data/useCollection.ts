// import { Database } from "https://deno.land/x/aloedb@0.9.0/mod.ts";
import {
    Collection,
    MongoClient,
} from "https://deno.land/x/mongo@v0.30.1/mod.ts";

const client = new MongoClient();

await client.connect(Deno.env.get("DB_CONNECTION") || "");

const database = client.database(Deno.env.get("DB_NAME") || "");

export function useCollection<TEntity, TData>(name: string, callback: (collection: Collection<TEntity>) => Promise<TData>): Promise<TData> {
    if (!name) {
        throw new Error("The collection name is required.");
    }

    if (!callback) {
        throw new Error("The callback function is required.");
    }

    const collection = database.collection<TEntity>(name);

    return callback(collection);
}
