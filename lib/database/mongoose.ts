import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// optimize 하기 위해 캐싱을 하려고 함 아니면 작업을 할 때마다 mongodb에 연결을 하게 되서 불필요해지게 된다.

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Already connected to the database.");
    return cached.conn;
  }

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(`${MONGODB_URL}`, {
      dbName: "image-genius",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  console.log("Connected to the database.");

  return cached.conn;
};
