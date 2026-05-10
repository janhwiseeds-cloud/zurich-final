import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error("Missing MONGODB_URL environment variable");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongo: { promise: Promise<MongoClient> | null } | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value is preserved across module reloads
  if (!global._mongo) {
    client = new MongoClient(uri, options);
    global._mongo = { promise: client.connect() };
  }
  clientPromise = global._mongo.promise as Promise<MongoClient>;
} else {
  // In production, it's safe to create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;